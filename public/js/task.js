// -----------------------------------------------------------------------------
// RUN EXPERIMENT 
// define global variables 
import { full_screen, initialinstructions, taskinstructions, takeabreak, end_screen, initialinstructions_profile, ask_questions_profile} from "./instructions.js";
import {run_trial, mood_feedback} from "./task_design.js";

import { intervention1 } from "./intervention.js";
import { control1 } from "./control.js";

var writetime = 10; 	// write every x trials 
var breaktime = 2;	// break every x trials 
var introspectiontime = 2; // how often to ask for happiness ratings 
var nTrials = 6;
var dofullscreen = true; 

//Generating experimental stimuli
var timeline = [];  /* list of things to run */
var people = ['./assets/imgs/Tomoa.jpg ', './assets/imgs/adam.jpg ', './assets/imgs/janja.jpg ', './assets/imgs/brooke.jpg '];
var names = ['Tomoa', 'Adam', 'Janja', 'Brooke'];
//probability of being liked by each person
var probabilities = {
    'Tomoa': 0.8,
    'Brooke': 0.6,
    'Adam': 0.4,
    'Janja': 0.2
}

//randomly generate correct trial response based on probability
var trial_response = function(person, probabilities){
    var prob = Math.random();
    var less_than = probabilities[person];
    if(prob < less_than){
        var response = 1;
    } else {
        var response = 0;
    };
    return response;
}

if (dofullscreen==true) {timeline.push(full_screen);}

timeline.push(initialinstructions_profile);
timeline.push(ask_questions_profile);
timeline.push(initialinstructions); 
timeline = timeline.concat(timeline_PHQ);
timeline = timeline.concat(timeline_TEPS);
timeline.push(taskinstructions); 

//Main task 
var trial;
for (trial=0; trial<nTrials; trial++) {
    var response_correct = Math.floor(Math.random() * 2);
    var person = Math.floor(Math.random() * 4);
    var name_trial = names[person];
    var response_correct = trial_response(name_trial,probabilities);
    timeline.push(run_trial(people[person], name_trial, response_correct)); 
    //ask for happiness rating every once in a while
	if ((trial % introspectiontime)==0 & trial > 0) { 
        timeline.push(mood_feedback);}; 
    //allow to take a break every once in a while
	if ((trial % breaktime)==0 & trial > 0) {
        timeline.push(takeabreak)}; 
	if ((trial % writetime)==0 & trial > 0) {efftrial.on_finish = function() {
        console.log('will save the data here in the future');
        //saveTaskData(); saveTaskDataDump();
    }
}
};
//randomise intervention and control
if (Math.random() < 0.5){
    timeline.push(intervention1); 
}
else{
    timeline.push(control1); 
};

timeline.push(end_screen);

// now call jsPsych.init to run experiment 
export function runTask(uid) {
    //firestore_effort file
	//saveSetup(timeline);
    console.log(timeline);
	var jsPsych = initJsPsych(); 
    jsPsych.run(timeline);
}




