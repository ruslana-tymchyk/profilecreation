// -----------------------------------------------------------------------------
// RUN EXPERIMENT 
// define global variables 
import {full_screen, end_screen, initialinstructions_profile, ask_questions_profile, pick_name,initialinstructions_rate_profile,rating_trials} from "./instructions.js";

var jsPsych = initJsPsych({}); 

var profile_count;
var dofullscreen = true; 
var timeline = [];  /* list of things to run */

//START OF EXPERIMENTAL TIMELINE
if (dofullscreen==true) {
    timeline.push(full_screen);
}
timeline.push(initialinstructions_profile);
timeline.push(pick_name)
timeline.push(ask_questions_profile)
timeline.push(initialinstructions_rate_profile);
timeline.push(rating_trials);


timeline.push(end_screen);

// now call jsPsych.init to run experiment 
export function runTask() {
    //firestore_effort file
	//saveSetup(timeline);
    //jsPsych.data.addProperties({correct_response_counter: 0});
    jsPsych.run(timeline);
}

export{jsPsych};


