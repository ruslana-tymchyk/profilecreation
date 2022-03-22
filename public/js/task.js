// here write the code for the intervention 
//code from effort 6 task
// -----------------------------------------------------------------------------
// RUN EXPERIMENT 

// define global variables 
var collname = 'task'; 	// under what name to save it 

var writetime = 10; 	// write every x trials 
var breaktime = 200;	// break every x trials 
var dur_fb = 1500; 
var dur_rating = 10000; 
var introspectiontime = 3; // how often to ask for happiness ratings 
var dur_introspection= 1000; 
var dur_fix = 1000; 
var max_nonresp = 3; 

var dofullscreen = true; 

var debugging = false; 
if (debugging) { 
	dofullscreen = false; 
	dur_max = 3000; 
	//dur_fb = 10; 
	breaktime = 8; 
	writetime = 2;
	introspectiontime = 3; 
	design.efflevelsl = [3,4,3,4,6,4,3,4,6,4,3,4,6]; 
	design.efflevelsr = [4,3,4,2,2,3,4,2,2,3,4,2,2]; 
	design.rewlevelsl = [4,4,6,9,4,4,6,9,4,4,6,9,4]; 
	design.rewlevelsr = [3,2,4,3,3,2,4,3,3,2,4,3,3]; 
}

var nTrials = design.efflevelsl.length

var happinessquery= {
	type: 'html-keyboard-response', 
	stimulus: '<h2> How happy are you right now? </h2></br></br>', 
	trial_duration: dur_introspection, 
	choices: jsPsych.NO_KEYS, 
}; 
var happinessrating = {
	type: 'html-slider-response',
	stimulus: '<h2> How happy are you right now? </h2>', 
	labels: ['very unhappy','very happy'], 
	trial_duration: dur_rating, 
	require_movement: true, 
	prompt: '<p>Please move slider with mouse. You have 10 seconds.</p>'
}; 
var fix = {
	type: 'html-keyboard-response',
	stimulus: '<h2> + </h2>', 
	trial_duration: dur_fix, 
	choices: jsPsych.NO_KEYS, 
}; 

var timeline = [];  /* list of things to run */

if (dofullscreen==true) {timeline.push(full_screen);}
timeline.push(initialinstructions); 
timeline = timeline.concat(timeline_PHQ);
timeline = timeline.concat(timeline_AMI);
timeline = timeline.concat(timeline_TEPS);
timeline.push(taskinstructions); 
for (trial=0; trial<nTrials; trial++) {
	efftrial = { 
		type: 'effort', 
		npl:  design.efflevelsl[trial],
		npr:  design.efflevelsr[trial],
		rewl: design.rewlevelsl[trial],
		rewr: design.rewlevelsr[trial],
		dur_fb: dur_fb, 
		dur_max: dur_max, 	// defined in instructions_effort.js
		on_finish: function(data) {
			if (data.nonresponses >=max_nonresp) {
				jsPsych.endExperiment("<p>You have submitted " + max_nonresp + " trials without any responses, or with responses that were too slow.</p><p> Unfortunately, this means that the data cannot be interpreted and the experiment is invalid.</p><p> The experiment has hence been terminated and will be rejected unless it is returned.</p>")
			}; 
			if (data.escaped == 1) {
				jsPsych.endExperiment("<p>You have terminated the experiment before completing it. The experiment will be rejected unless it is returned.</p>"); 
			}
		}, 
	}; 
	if ((trial % writetime)==0 & trial > 0) {efftrial.on_finish = function() {saveTaskData(); saveTaskDataDump();}};
	timeline.push(efftrial);
	timeline.push(fix); 
	//if ((trial % introspectiontime)==0 & trial > 0) { timeline.push(happinessquery); timeline.push(happinessrating); timeline.push(fix)}; 
	if ((trial % breaktime)==0 & trial > 0) { timeline.push(takeabreak)}; 
};
timeline.push(end_screen);

// now call jsPsych.init to run experiment 
function runtask(uid) {
	saveSetup(timeline);
	jsPsych.init({
		timeline: timeline, 
	}); 
}


