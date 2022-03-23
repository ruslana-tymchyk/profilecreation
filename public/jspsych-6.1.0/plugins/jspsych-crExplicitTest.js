// plugin for the learning phase

jsPsych.plugins['crExplicitTest'] = (function() {

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
			stimulus_set_1:{
				type: jsPsych.plugins.parameterType.STRING,
				default: "niffian",
				description: 'set of stimuli used in this run',
			},
			stimulus_set_2:{
				type: jsPsych.plugins.parameterType.STRING,
				default: "laapian",
				description: 'set of stimuli used in this run',
			},
		}
	}

	plugin.trial = function(display_element, trial) {
		console.log("Call trial from our plagin.")

		let total_trial_time =NaN;
		let startTime =NaN;
		let endTime =NaN;
	    let choice = NaN;
	    let rtToImage = NaN;
	    let correct = NaN;

	    let imagePathL;
		let imagePathR;

		// choose random image from niff and laap and random side where it is presented
			// choose random image from niff and laap and random side where it is presented
		let imageNiffRandomOrder = [3, 4, 5, 2, 1];
		let imageLaapRandomOrder = [1, 5, 3, 4, 2];

		let imageNiff = imageNiffRandomOrder[trial.trialnumber]-1;
		let imageLaap = imageLaapRandomOrder[trial.trialnumber]-1;
		let imageSide = getRndInteger(0,1);

		//TODO: randomize images outside

		switch (imageSide) {
			case 0:
				imagePathL = trial.stimulus_set_1[imageNiff];
				imagePathR = trial.stimulus_set_2[imageLaap];
				break;
			case 1:
				imagePathR = trial.stimulus_set_1[imageNiff];
				imagePathL = trial.stimulus_set_2[imageLaap];
				break;

				default:
					throw new Error("Invalid image path.")
		}

		// display niff and laap image, i.e. first stage

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

		// make choice between images and start next trial
		const callbackOnImageSelection = function(info) {
			console.log('after response callback')
			console.log('get keys', info.key)
            rtToImage = performance.now();
			choice = info.key

			//TODO current setup is such that Niffian choice is always counted as correct.
			switch(imageSide) {
				case 0:
					switch(info.key){
					case 69:
						correct = 1
						break;
					case 73:
						correct = 0
						break;
					default:
						throw new Error("Invalid bar type.")
					}
					break;
				case 1:
					switch(info.key){
					case 73:
						correct = 1
						break;
					case 69:
						correct = 0
						break;
					default:
						throw new Error("Invalid bar type.")
					}
					break;
			}

			jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnImageSelection); // clear keyboard response
			feedback(choice)
			setTimeout(endTrial, 500);
		}

		// listen for key response to niff/laap images
		const listenerOnImageSelection = jsPsych.pluginAPI.getKeyboardResponse({
			callback_function: callbackOnImageSelection,
			valid_responses: [trial.keyl, trial.keyr],
			rt_method: 'performance',
			persist: true,
			allow_held_key: false,
		});

		const feedback = function(choice){
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
		}

		function endTrial() {
			console.log("end trial")

			// kill any remaining setTimeout handlers:
			jsPsych.pluginAPI.clearAllTimeouts();

			// measure response time
			endTime = performance.now();
			total_trial_time= endTime - startTime;
			console.log(total_trial_time)

			// save data
			var trialData = {
				"imageSideE": imageSide,
				"imageNiffE": imageNiff,
				"imageLaapE": imageLaap,
			 	"choiceE": choice,
				"correctE": correct,
			 	"totalTrialTimeE": total_trial_time,
			 	"trialStartTimeE": startTime,
				"trialEndTimeE": endTime,
				"rtToImagesE": rtToImage,
			 };

			jsPsych.finishTrial(trialData);
			saveExplicitTestData();
		}

		// end trial if trial_duration is set
		 if (trial.dur_max !== null) {
		    jsPsych.pluginAPI.setTimeout(function() {

		 		if (listenerOnImageSelection !== null) {
		 		jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnImageSelection); // clear keyboard response
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
