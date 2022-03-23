
// plugin for the learning phase

jsPsych.plugins['preconditioningLearning'] = (function() {

	var plugin = {};

	plugin.info = {
		name: 'crimplicitLearning',
		parameters: {
			keyPressed: {
				type: jsPsych.plugins.parameterType.STRING,
				default: 'spacebar',
			},
			keyl: {
				type: jsPsych.plugins.parameterType.STRING,
				default: 'e',
			},
			keyr: {
				type: jsPsych.plugins.parameterType.STRING,
				default: 'i',
			},
			trialnumber: {
				type: jsPsych.plugins.parameterType.FLOAT,
				default: 1
			},
			dur_max:	{
				type: jsPsych.plugins.parameterType.FLOAT,
				pretty_name: 'max duration of trial',
				default: 30000,
				description: 'trial max duration',
			},
		}
	}

	plugin.trial = function(display_element, trial) {
		console.log("Call trial from our plagin.")

		let total_trial_time =NaN;
		let startTime =NaN;
		let endTime =NaN;
	    let choice = NaN;
	    let rtToBar = NaN;
	    let rtToImage = NaN;
	    let correct = NaN;

		let imagePath;
		let imagePathL;
		let imagePathR;
		let outputScore;
		let color;


		function getRndInteger(min, max) {
		  return Math.floor(Math.random() * (max - min + 1) ) + min;
		}

		// choose random image from niff and laap and random side where it is presented
		let imageNiffRandomOrder = [3, 2, 4, 2, 5, 3, 1, 5, 1, 5, 4, 2, 4, 1, 2, 1, 4, 3, 5, 3];
		let imageLaapRandomOrder = [2, 4, 5, 1, 5, 3, 5, 4, 1, 4, 3, 2, 4, 3, 2, 5, 1, 3, 2, 1];

		let imageNiff = imageNiffRandomOrder[trial.trialnumber]-1;
		let imageLaap = imageLaapRandomOrder[trial.trialnumber]-1;
		let imageSide = getRndInteger(0,1);

		//TODO: check if need to ensure that all stimuli were seen or are somehow counterbalanced, same for side

		switch (imageSide) {
			case 0:
				imagePathL = niffians[imageNiff];
				imagePathR = laapians[imageLaap];
				break;
			case 1:
				imagePathR = niffians[imageNiff];
				imagePathL = laapians[imageLaap];
				break;

				default:
					throw new Error("Invalid image path.")
		}


		// display niff and laap image, i.e. first stage
		color = 'black'
		display_element.innerHTML = (
			'<div id="nif-lap-words">' +
				'<div class="word">' +
				imagePathL +
				'</div>' +
				'<div class="word">' +
				imagePathR +
				'</div>' +
			'</div>'
		);

		startTime = performance.now();

		// function to show points, i.e. third stage
		const feedback = function (){
			console.log("feedback")
			display_element.innerHTML = (
				'<div id="jspsych-reconstruction-stim-container">' +
				'<p style="color:' + color + '; text-align: center; font-size:400%; line-height: 250%">' +
				outputScore +
				'</p>' +
				'</div>'
			)
		}

		let listenerOnBarResponse = null;
		let listenerOnOutcomeResponse = null;

		// set-up key listeners

		// show bar image, i.e. second stage
		const showBarImage = function() {
			listenerOnBarResponse = jsPsych.pluginAPI.getKeyboardResponse({
				callback_function: endTrial,
				valid_responses: [trial.keyPressed],
				rt_method: 'performance',
				persist: true,
				allow_held_key: false,
			})

			console.log("feedback")
			//rtToBar = performance.now();
			display_element.innerHTML = (
					'<div id="jspsych-affectivegonogo-stim-container">' +
					'<img class="resize" alt="" src="' + imagePath + '"/>' +
					'</div>'
				)
			}

		const feedbackChoice = function(choice){
			if(choice === 69) {
				display_element.innerHTML = (
					'<div id="nif-lap-words">' +
					'<div class="border">' +
					imagePathL +
					'</div>' +
					'<div class="word">' +
					imagePathR +
					'</div>' +
					'</div>');
			}
			if(choice === 73) {
				display_element.innerHTML = (
					'<div id="nif-lap-words">' +
					'<div class="word">' +
					imagePathL +
					'</div>' +
					'<div class="border">' +
					imagePathR +
					'</div>' +
					'</div>');
			}
			//setTimeout(10000);
		}



			//TODO need to decide if want to counterbalanced assocation with bars and rewards between participants
		// choose bar image and points depending on response to niff and laap images
		const callbackOnImageSelection = function(info) {
			console.log('after response callback')
			console.log('get keys', info.key)
            rtToImage = performance.now();
			choice = info.key
			switch(imageSide) {
				case 0:
					switch(info.key){
					case 69:
						imagePath = IMG_VERTI1_PATH;
						outputScore = "+5"
						color = "green"
						correct = 1
						break;
					case 73:
						imagePath = IMG_HORI1_PATH;
						outputScore = "-5"
						color = "red"
						correct = 0
						break;
					default:
						throw new Error("Invalid bar type.")
					}
					break;
				case 1:
					switch(info.key){
					case 73:
						imagePath = IMG_VERTI1_PATH;
						outputScore = "+5"
						color = "green"
						correct = 1
						break;
					case 69:
						imagePath = IMG_HORI1_PATH;
						outputScore = "-5"
						color = "red"
						correct = 0
						break;
					default:
						throw new Error("Invalid bar type.")
					}
					break;
			}
			jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnImageSelection); // clear keyboard response
			feedbackChoice(choice)
			setTimeout(() =>showBarImage(), 500)
		}

		// listen for key response to niff/laap images
		const listenerOnImageSelection = jsPsych.pluginAPI.getKeyboardResponse({
			callback_function: callbackOnImageSelection,
			valid_responses: [trial.keyl, trial.keyr],
			rt_method: 'performance',
			persist: true,
			allow_held_key: false,
		});

		function endTrial() {
			console.log("end trial")
			if (listenerOnBarResponse !== null) {
				jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnBarResponse); // clear keyboard response
			}
			// kill any remaining setTimeout handlers:
			jsPsych.pluginAPI.clearAllTimeouts();


			// measure response time
			endTime = performance.now();
			total_trial_time= endTime - startTime;
			console.log(total_trial_time)



			// save data
			var trialData = {
				"imageSideL": imageSide,
				"imageNiffL": imageNiff,
				"imageLaapL": imageLaap,
			 	"choiceL": choice,
			 	"totalTrialTimeL": total_trial_time,
			 	"trialStartTimeL": startTime,
				"trialEndTimeL": endTime,
				"rtToImagesL": rtToImage,
				"correctL": correct,
			 };
			jsPsych.finishTrial(trialData);
			saveLearningData();
		}


		 // end trial if trial_duration is set
		 // if (trial.dur_max !== null) {
		 //    jsPsych.pluginAPI.setTimeout(function() {
			// 	console.log('timeout')
			// 	display_element.innerHTML = '<div id="jspsych-reconstruction-stim-container"><p style="color:#ff0000;   text-align: center; font-size:200%; line-height: 200%">You are responding too slow. <br> Please pay attention to the task! <br> If you do not pay attention and respond as accurate as possible the experiment will finish early.</p></div>';
			// 	countTrialTimeouts=countTrialTimeouts+1;
			// 	console.log(countTrialTimeouts)
		 //
			//     if(countTrialTimeouts > 2) {
			//    	console.log('Experiment should end')
			// 	   jsPsych.endExperiment("The experiment has been terminated early.")}
		 // 		else
		 // 			{endTrial()}
			// 		}, trial.dur_max);
		 // }

		 if (trial.dur_max !== null) {
		    jsPsych.pluginAPI.setTimeout(function() {
		    	if (listenerOnOutcomeResponse !== null) {
				jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnOutcomeResponse); // clear keyboard response
				}
		 		if (listenerOnImageSelection !== null) {
		 		jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnImageSelection); // clear keyboard response
				}
		 		if (listenerOnBarResponse !== null) {
		 		jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnBarResponse); // clear keyboard response
				}

				console.log('timeout')
				display_element.innerHTML = '<div id="jspsych-reconstruction-stim-container"><p style="color:#ff0000;   text-align: center; font-size:200%; line-height: 200%">You are responding too slowly. <br> Please pay attention to the task! <br> If you do not pay attention and respond as accurate as possible the experiment will finish early.</p></div>';
				countTrialTimeouts=countTrialTimeouts+1;
				console.log(countTrialTimeouts)

				setTimeout(()=>{
					if(countTrialTimeouts > 2) {
					console.log('Experiment should end')
						saveTaskDataIfAborted()
						jsPsych.endExperiment("Unfortunately, the experiment has finished early as too many of your responses were invalid.")}
					else
					{endTrial()}
					}, 3000)
		   }, trial.dur_max);
		 }

	};

	return plugin;
})();

