// Reevaluation phase

jsPsych.plugins['crimplicitReevalution'] = (function() {

	var plugin = {};

	plugin.info = {
		name: 'crimplicitReevaluation',
		parameters: {
			barType:  		{
				type: jsPsych.plugins.parameterType.STRING,
			},
			keyPressed: {
				type: jsPsych.plugins.parameterType.STRING,
				default: 'spacebar',
			},
			dur_max:	{
				type: jsPsych.plugins.parameterType.FLOAT,
				pretty_name: 'max duration of trial',
				default: 30000,
				description: 'trial max duration',
			},
			barRewardAssociation:	{
				type: jsPsych.plugins.parameterType.FLOAT,
				pretty_name: 'association between bar and reward',
				default: 0,
				description: 'association between bar and reward',
			},
		}
	}

	plugin.trial = function(display_element, trial) {
		console.log("Call trial from our plugin.")

		let imagePath;
		let outputScore;
		let color;

		let correct = NaN;
		let rtToBar = NaN;

		switch (trial.barRewardAssociation){
			case 0:
				switch (trial.barType) {
					case "verti":
						imagePath = IMG_VERTI1_PATH;
						outputScore = "-5"
						color = "red"
						correct = 0;
						break;
					case "hori":
						imagePath = IMG_HORI1_PATH;
						outputScore = "+5"
						color = "green"
						correct = 1;
						break;
					default:
						throw new Error("Invalid bar type.")
				}
				break;
			case 1:
				switch (trial.barType) {
					case "verti":
						imagePath = IMG_VERTI1_PATH;
						outputScore = "+5"
						color = "green"
						correct = 1;
						break;
					case "hori":
						imagePath = IMG_HORI1_PATH;
						outputScore = "-5"
						color = "red"
						correct = 0;
						break;
					default:
						throw new Error("Invalid bar type.")
				}
				break;
		}


		function feedback(){
			console.log("feedback")
			display_element.innerHTML = (
				'<div id="jspsych-reconstruction-stim-container">' +
				'<p style="color:' + color + '; text-align: center; font-size:400%; line-height: 250%">' +
				outputScore +
				'</p>' +
				'</div>'
			)
		}

		// set-up key listeners
		const afterResponseCallback = function(info) {
			console.log('after response callback')

			rtToBar = performance.now(); // record response to bar
			jsPsych.pluginAPI.cancelKeyboardResponse(key_listener); // clear keyboard response

			feedback();
			setTimeout(endTrial, 1000);
		}

		// listen for responses
		const key_listener = jsPsych.pluginAPI.getKeyboardResponse({
			callback_function: afterResponseCallback,
			valid_responses: [trial.keyPressed],
			rt_method: 'performance',
			persist: true,
			allow_held_key: false,
		});

		function endTrial() {
			console.log("end trial")
			// kill any remaining setTimeout handlers:
			jsPsych.pluginAPI.clearAllTimeouts();

			// // measure response time
			var endTime = performance.now();
			var total_trial_time= endTime - startTime;
			console.log(total_trial_time)

			// save data
			var trial_data = {
				"totalTrialTimeR": total_trial_time,
				"trialStartTimeR": startTime,
				"trialEndTimeR": endTime,
				"responseTimeToBarR": rtToBar,
				"correctR": correct,
				"barTypeR": trial.barType,
				"outputScoreR": outputScore,
			};

			jsPsych.finishTrial(trial_data);
			saveReevaluationData()
		}

		// draw first iteration
		display_element.innerHTML = (
			'<div id="jspsych-affectivegonogo-stim-container">' +
			'<img class="resize" alt="" src="' + imagePath + '"/>' +
			'</div>'
		);
		let startTime = performance.now();


		if (trial.dur_max !== null) {
		    jsPsych.pluginAPI.setTimeout(function() {
		    	if (key_listener !== null) {
				jsPsych.pluginAPI.cancelKeyboardResponse(key_listener); // clear keyboard response
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
