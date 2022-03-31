// here write the code for the task
//code from effort 6 task
// -----------------------------------------------------------------------------
// RUN EXPERIMENT 
// define global variables 
import { full_screen, initialinstructions, taskinstructions, takeabreak, end_screen, dur_max } from "./instructions_effort.js";
import {initialinstructions_profile, ask_questions_profile} from "./instructions_profile.js";

import {run_trial, mood_feedback} from "./task_design.js";

import { page1 } from "./intervention.js";

var collname = 'task'; 	// under what name to save it 

var writetime = 10; 	// write every x trials 
var breaktime = 200;	// break every x trials 
var dur_fb = 1500; 
var dur_rating = 10000; 
var introspectiontime = 3; // how often to ask for happiness ratings 
var dur_introspection= 1000; 
var dur_fix = 1000; 
var max_nonresp = 3; 
var nTrials = 6;
var dofullscreen = true; 

var debugging = false; 
if (debugging) { 
	dofullscreen = false; 
	dur_max = 3000; 
	//dur_fb = 10; 
	breaktime = 8; 
	writetime = 2;
	introspectiontime = 3; 
    const design = {
        efflevelsl : [3,4,3,4,6,4,3,4,6,4,3,4,6],
        efflevelsr : [4,3,4,2,2,3,4,2,2,3,4,2,2],
        rewlevelsl : [4,4,6,9,4,4,6,9,4,4,6,9,4],
        rewlevelsr : [3,2,4,3,3,2,4,3,3,2,4,3,3]
    };
    //very confused about the scope of this variable
}
console.log('hey now');
//console.log(design);
//var nTrials = design.efflevelsl.length;

var timeline = [];  /* list of things to run */
var people = ['./assets/imgs/Tomoa.jpg ', './assets/imgs/adam.jpg ', './assets/imgs/janja.jpg ', './assets/imgs/brooke.jpg '];
var names = ['Tomoa', 'Adam', 'Janja', 'Brooke'];

if (dofullscreen==true) {timeline.push(full_screen);}

var trial;
for (trial=0; trial<nTrials; trial++) {
    var response_correct = Math.floor(Math.random() * 2);
    var person = Math.floor(Math.random() * 4);
    timeline.push(run_trial(people[person], names[person], response_correct)); 
    timeline.push(mood_feedback);
	if ((trial % writetime)==0 & trial > 0) {efftrial.on_finish = function() {
        console.log('will save the data here in the future');
        //saveTaskData(); saveTaskDataDump();
    }
}
};
	//if ((trial % introspectiontime)==0 & trial > 0) { timeline.push(happinessquery); timeline.push(happinessrating); timeline.push(fix)}; 
	//if ((trial % breaktime)==0 & trial > 0) {timeline.push(takeabreak)}; 
//};
timeline.push(initialinstructions_profile);
timeline.push(ask_questions_profile);
timeline.push(page1); 
timeline.push(initialinstructions); 
timeline = timeline.concat(timeline_PHQ);
timeline = timeline.concat(timeline_TEPS);
timeline.push(taskinstructions); 
timeline.push(end_screen);

// now call jsPsych.init to run experiment 
export function runTask(uid) {
    //firestore_effort file
	//saveSetup(timeline);
    console.log(timeline);
	var jsPsych = initJsPsych(); 
    jsPsych.run(timeline);
}




