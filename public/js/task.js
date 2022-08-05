// -----------------------------------------------------------------------------
// RUN EXPERIMENT 
// define global variables 
import {full_screen, end_screen, dur_max, initialinstructions_profile, initialinstructions_rate_profile, ask_questions_profile, rate_profiles_fun, debrief, loop_node_rank} from "./instructions.js";
import {run_trial, mood_feedback_fun} from "./task_design.js";
import { intervention, timeline_comprehension_intervention} from "./intervention.js";
import { control, timeline_comprehension_control, condition_complete} from "./control.js";
import {random_ps, response, list_names, image_set, random_ps_test} from './randomisation.js';
import {loop_node, continueText} from "./instructions_quiz.js";
import {timeline_PHQ} from './PHQ_9.js' ;
import {timeline_SPIN} from './SPIN.js' ;
//import {getMoodRating } from "./saveData.js";

var jsPsych = initJsPsych({}
    ); 

//will have to import SaveTask Data
//on finish saveData
//data.stimulus etc is a jsPysch object
//take jsPsych data.whatever and save it to firebase via save task etc
var writetime = 10; 	// write every x trials 
var introspectiontime = 2; // how often to ask for happiness ratings 
var nTrials = 20; //160
var trial;
var profile_count;
var p_retrieved_counter = {
        p15: 0,
        p30: 0,
        p70: 0,
        p85: 0
    }
var dofullscreen = true; 
var timeline = [];  /* list of things to run */

//START OF EXPERIMENTAL TIMELINE
if (dofullscreen==true) {
    timeline.push(full_screen);
}
timeline.push(initialinstructions_profile);
timeline.push(ask_questions_profile)
timeline.push(initialinstructions_rate_profile);
var profiles = 4;
for(profile_count = 0; profile_count< profiles; profile_count++){
    timeline.push(rate_profiles_fun(profile_count))
}
timeline.push(loop_node_rank)
timeline.push(loop_node)
timeline.push(continueText)
//add task instructions comprehension
//Main task 
for (trial=0; trial<nTrials; trial++) {
    var p_type = random_ps_test[random_ps[trial] - 1]
    var this_trial_in_p = p_retrieved_counter[p_type]
    p_retrieved_counter[p_type] += 1
    var response_trial = response[p_type][this_trial_in_p] 
    var name_trial = list_names[p_type][this_trial_in_p]
    var trial_numbers = random_ps[trial]- 1
    //make sure you can return the correct type of person for each participant
    timeline.push(run_trial(trial_numbers, name_trial, response_trial, image_set, trial)); 
    if (trial == 10) { //at trial 80 provide intervention
        //randomise intervention and control
            if (Math.random() < 0.5){
                timeline.push(intervention);
                timeline = timeline.concat(timeline_comprehension_intervention);
                timeline.push(condition_complete);
            }
            else{
                timeline.push(control);
                timeline = timeline.concat(timeline_comprehension_control);
                timeline.push(condition_complete);
             }
    }; 
    //ask for happiness rating every once in a while
	if ((trial % introspectiontime)==0 & trial > 0) { 
        timeline.push(mood_feedback_fun(trial));
        //var answer = getMoodRating();
        //how to save happiness rating here?
        //also make sure the very first trial is initialised at 0
    }; 
}
//timeline.push(initialinstructions); //questionnaire instructions 
timeline = timeline.concat(timeline_PHQ);
timeline = timeline.concat(timeline_SPIN);

timeline.push(debrief);
timeline.push(end_screen);

// now call jsPsych.init to run experiment 
export function runTask(uid) {
    //firestore_effort file
	//saveSetup(timeline);
    console.log(timeline);
    jsPsych.run(timeline);
}

export{jsPsych};


