// -----------------------------------------------------------------------------
// RUN EXPERIMENT 
// define global variables 
import {full_screen, end_screen, dur_max, initialinstructions_profile, ask_questions_profile, rate_profiles_fun, debrief, test_relative_rank, taskinstructions_rank} from "./instructions.js";
import {run_trial, mood_feedback} from "./task_design.js";
import { intervention, timeline_comprehension_intervention} from "./intervention.js";
import { control, timeline_comprehension_control} from "./control.js";
import {random_ps, response, list_names, image_set, random_ps_test} from './randomisation.js';
import {loop_node, continueText} from "./instructions_quiz.js";

//will have to import SaveTask Data
//on finish saveData
//data.stimulus etc is a jsPysch object
//take jsPsych data.whatever and save it to firebase via save task etc

var writetime = 10; 	// write every x trials 
var introspectiontime = 2; // how often to ask for happiness ratings 
var nTrials = 10;
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
timeline.push(loop_node)
timeline.push(continueText)
var profiles = 2;
for(profile_count = 0; profile_count< profiles; profile_count++){
    timeline.push(rate_profiles_fun(profile_count))
}
timeline.push(taskinstructions_rank)
timeline.push(test_relative_rank)
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
    timeline.push(run_trial(trial_numbers, name_trial, response_trial, image_set)); 
    if (trial == 3) { //at trial 81 provide intervention
        //randomise intervention and control
            if (Math.random() < 0.5){
                timeline.push(intervention);
                timeline = timeline.concat(timeline_comprehension_intervention);
            }
            else{
                timeline.push(control);
                timeline = timeline.concat(timeline_comprehension_control);
             }
    }; 
    //ask for happiness rating every once in a while
    var mood = 0;
	if ((trial % introspectiontime)==0 & trial > 0) { 
        mood++;
        if (mood == 0){
            var previous_answer = 50;
        }
            else{
                var previous_answer = 35;}
        timeline.push(mood_feedback);
        //how to save happiness rating here?
        //also make sure the very first trial is initialised at 0
    }; 
    if ((trial % writetime)==0 & trial > 0) {efftrial.on_finish = function() {
        console.log('will save the data here in the future');
        //saveTaskData(); saveTaskDataDump();
    }
    }
}
//timeline.push(initialinstructions); //questionnaire instructions 
timeline = timeline.concat(timeline_PHQ);
timeline = timeline.concat(timeline_SPIN);
timeline.push(debrief);
timeline.push(end_screen);

var jsPsych = initJsPsych({}
); 

// now call jsPsych.init to run experiment 
export function runTask(uid) {
    //firestore_effort file
	//saveSetup(timeline);
    console.log(timeline);
    jsPsych.run(timeline);
}

export{previous_answer, jsPsych};
