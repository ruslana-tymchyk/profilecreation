// -----------------------------------------------------------------------------
// RUN EXPERIMENT 
// define global variables 
import {full_screen, end_screen, initialinstructions_profile, initialinstructions_rate_profile, ask_questions_profile, pick_name} from "./instructions.js";

var jsPsych = initJsPsych({}); 

var dofullscreen = true; 
var timeline = [];  /* list of things to run */

//START OF EXPERIMENTAL TIMELINE
if (dofullscreen==true) {
    timeline.push(full_screen);
}
timeline.push(initialinstructions_profile);
timeline.push(pick_name)
timeline.push(ask_questions_profile)
timeline.push(initialinstructions_rate_profile)
timeline.push(end_screen);

// now call jsPsych.init to run experiment 
export function runTask() {
    //firestore_effort file
	//saveSetup(timeline);
    //jsPsych.data.addProperties({correct_response_counter: 0});
    jsPsych.run(timeline);
}

export{jsPsych};


