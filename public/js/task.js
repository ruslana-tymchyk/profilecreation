// -----------------------------------------------------------------------------
// RUN EXPERIMENT 
// define global variables 
import { full_screen, initialinstructions, taskinstructions2, taskinstructions, end_screen, initialinstructions_profile, ask_questions_profile} from "./instructions.js";
import {run_trial, mood_feedback} from "./task_design.js";
import { intervention0, intervention1, intervention2, intervention3, intervention4 } from "./intervention.js";
import { control1, control2, control3, control4 } from "./control.js";
import {timeline_ps} from "./question_ps.js";
import {random_ps, response, list_names, image_set, random_ps_test} from './randomisation.js';


var writetime = 10; 	// write every x trials 
var introspectiontime = 5; // how often to ask for happiness ratings 
var nTrials = 10;
var trial;
var p_retrieved_counter = {
        p15: 0,
        p30: 0,
        p70: 0,
        p85: 0
    }
var dofullscreen = true; 
var timeline = [];  /* list of things to run */

if (dofullscreen==true) {timeline.push(full_screen);}
timeline.push(initialinstructions_profile);
timeline.push(ask_questions_profile);
timeline.push(initialinstructions); 
timeline = timeline.concat(timeline_PHQ);
timeline = timeline.concat(timeline_TEPS);
timeline.push(taskinstructions); 
timeline = timeline.concat(timeline_ps)
timeline.push(taskinstructions2); 

//Main task 
for (trial=0; trial<nTrials; trial++) {
    var p_type = random_ps_test[random_ps[trial] - 1]
    var this_trial_in_p = p_retrieved_counter[p_type]
    p_retrieved_counter[p_type] += 1
    var response_trial = response[p_type][this_trial_in_p] 
    var name_trial = list_names[p_type][this_trial_in_p]
    var trial_numbers = random_ps[trial]- 1
    //make sure you can return the correct type of person for each participant
    timeline.push(run_trial(trial_numbers, name_trial, response_trial, image_set)); 
    if (trial == 3) { //at trial 81 provide intervention
        //randomise intervention and control
        /*
            if (Math.random() < 0.5){
                timeline.push(intervention0);
                timeline.push(intervention1); 
                timeline.push(intervention2); 
                timeline.push(intervention3); 
                timeline.push(intervention4); 
            }
            else{
                timeline.push(intervention0); 
                timeline.push(control1); 
                timeline.push(control2); 
                timeline.push(control3); 
                timeline.push(control4); }
                */
            timeline.push(intervention0);
            timeline.push(intervention1); 
            timeline.push(intervention2); 
            timeline.push(intervention3); 
            timeline.push(intervention4); 
            timeline.push(intervention0); 
            timeline.push(control1); 
            timeline.push(control2); 
            timeline.push(control3); 
            timeline.push(control4); 
    }; 
    //ask for happiness rating every once in a while
	if ((trial % introspectiontime)==0 & trial > 0) { 
        timeline.push(mood_feedback);}; 
	if ((trial % writetime)==0 & trial > 0) {efftrial.on_finish = function() {
        console.log('will save the data here in the future');
        //saveTaskData(); saveTaskDataDump();
    }
}
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
