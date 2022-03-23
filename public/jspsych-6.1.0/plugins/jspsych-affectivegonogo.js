/**
 * jspsych-affectivegonogo
 * Quentin Huys
 *
 */

jsPsych.plugins['affectivegonogo'] = (function() {

	var plugin = {};

	plugin.info = {
		name: 'affectivegonogo',
		parameters: {
			keypr:		{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'key'			, default: 'j', 	description: 'key to press', },
			stim:  		{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'stim'		, default: 0, 		description: 'stimulus to display', },
			session:  	{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'session'	, default: 0, 		description: 'stimulus set (session)', },
			prob:  		{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'prob'		, default: 0.8, 	description: 'probability of appropriate outcome', },
			isgotrial: 	{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'isgotrial'	, default: 0, 		description: '1 if it is a go trial, 0 if nogo trial', },
			rewloss:		{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'rewloss'	, default: 0, 		description: 'whether it is a reward or loss trial', },
			dur_trial:	{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'dur_trial'	, default: 800,	description: 'trial duration - maximum rt', },
			dur_fb:   	{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'dur_fb'		, default: 800, 	description: 'feedback duration', },
			dur_iti:   	{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'dur_iti'	, default: 800, 	description: 'feedback duration', },
			iidreinforcement:{ type: jsPsych.plugins.parameterType.FLOAT,   pretty_name: 'iidreinforcement'	, default: 'iid',	description: 'iid reinforcement draws', },
		}
	}

	plugin.trial = function(display_element, trial) {

 		var total_trial_time =[];
 		var startTime =[];
		var keypr = []; 
		var rand = []; 

		// set-up key listeners
		var after_response = function(info) {
			console.log('go')
			keypr = (typeof trial.keypr == 'string') ? jsPsych.pluginAPI.convertKeyCharacterToKeyCode(trial.keypr) : trial.keypr;
			rt = info.rt; // record & count button presses 
			jsPsych.pluginAPI.cancelKeyboardResponse(key_listener); // clear keyboard response
			// compute if correct 
			if      ( trial.isgotrial == 1 ) { corr = 1; action = 1 }
			else if ( trial.isgotrial == 0 ) { corr = 0; action = 1 }; 
			feedback(corr,action); 
			jsPsych.pluginAPI.clearAllTimeouts();
			setTimeout(function() {
				display_element.innerHTML = '<div id="jspsych-reconstruction-stim-container"> </div>';
				jsPsych.pluginAPI.clearAllTimeouts();
				setTimeout(function() {endTrial()},trial.dur_iti); 
				},
			trial.dur_fb); 
		}

		var timeout = function(info) {
			console.log('nogo')
			keypr = 'none';
			rt = trial.dur_trial; // record & count button presses 
			jsPsych.pluginAPI.cancelKeyboardResponse(key_listener); // clear keyboard response
			// compute if correct 
			if      ( trial.isgotrial == 1 ) { corr = 0; action = 0 }
			else if ( trial.isgotrial == 0 ) { corr = 1; action = 0 }; 
			feedback(corr,action); 
			jsPsych.pluginAPI.clearAllTimeouts();
			setTimeout(function() {
				display_element.innerHTML = '<div id="jspsych-reconstruction-stim-container"> </div>';
				jsPsych.pluginAPI.clearAllTimeouts();
				setTimeout(function() {endTrial()},trial.dur_iti); 
				},
			trial.dur_fb); 
		}

		function feedback(corr,action){
			console.log('response: '+action); 
			console.log('response correct: '+corr); 
			if (trial.iidreinforcement == 'iid') { rand = jsPsych.randomization.sampleWithReplacement([0,1],1,[1-trial.prob,trial.prob]);}
			else { 
				// block randomize reinforcements to reduce experiential noise 
				// this requires an input iidreinforcement which is a binary 4x2xnTrials array 
				n = jsPsych.data.get().filter({trialcategory: trial.trialcategory, action: action, session: trial.session}).count();
				rand[0] = trial.iidreinforcement[trial.session][trial.trialcategory][action][n]; 
				console.log('category: '+trial.trialcategory)
				console.log('session: '+trial.session)
				console.log('action: '+action)
				console.log('n: '+n)
				console.log('predetermined reinf trial: '+rand[0])
			} 

			if      (corr == 1 & trial.rewloss == 1 ) { reinforcement = rand[0] }
			else if (corr == 1 & trial.rewloss == -1) { reinforcement = rand[0]-1 }
			else if (corr == 0 & trial.rewloss == 1 ) { reinforcement = 1-rand[0] }
			else if (corr == 0 & trial.rewloss == -1) { reinforcement = (1-rand[0])-1 }; 

			if      ( reinforcement ==  1) {html = '<p style="color:green; text-align: center; font-size:400%; line-height: 250%">Win!</br>+ 1 point</p>' } 
			else if ( reinforcement ==  0) {html = '<p style="color:black; text-align: center; font-size:400%; line-height: 250%"></br>0 points</p>' } 
			else if ( reinforcement == -1) {html = '<p style="color:red;   text-align: center; font-size:400%; line-height: 250%">Loss!</br>- 1 point</p>' } ; 

			display_element.innerHTML = '<div id="jspsych-reconstruction-stim-container">'+html+'</div>'; 
		}; 

		// listen for responses
		var key_listener = jsPsych.pluginAPI.getKeyboardResponse({
			callback_function: after_response,
			valid_responses: [trial.keypr],
			rt_method: 'performance',
			persist: true,
			allow_held_key: false,
		});

		function endTrial() {
			// kill any remaining setTimeout handlers
			jsPsych.pluginAPI.clearAllTimeouts();

			// measure response time
			var endTime =performance.now();
			var total_trial_time= endTime - startTime;

			// save data 
			var trial_data = {
				"rt_gonogo": rt, 
				"key": keypr, 
				"action": action, 
				"correct": corr, 
				"reinforcement": reinforcement, 
				"total_trial_time": total_trial_time,
				"trial_start_time": startTime,
			};

			// next trial
			jsPsych.finishTrial(trial_data); 
		}

		// draw first iteration
		html = '<img src="' + trial.stim + '"></img>'; 
		display_element.innerHTML = '<div id="jspsych-affectivegonogo-stim-container">'+html+'</div>';
		startTime = performance.now();

		// end trial if dur_trial is set
		if (trial.dur_trial !== null) {
			jsPsych.pluginAPI.setTimeout(function() {
				timeout()
			}, trial.dur_trial);
		}


	};

	return plugin;
})();
