// -----------------------------------------------------------------------------
// RUN EXPERIMENT 
// define global variables 
import { full_screen, initialinstructions, taskinstructions, end_screen, initialinstructions_profile, ask_questions_profile} from "./instructions.js";
import {run_trial, mood_feedback} from "./task_design.js";
import { intervention0, intervention1, intervention2, intervention3, intervention4 } from "./intervention.js";
import { control1, control2, control3, control4 } from "./control.js";

var list_names = {
    p20 : ['LUCA','EDWARD','ADA','ARLO','EVELYN','RORY','TOMMY','LUNA','PHOEBE','ELIJAH','YUSUF','RALPH','FLORENCE','OLLIE','ELSIE','MOHAMMAD','IVY','JENSON','ALICE',
        'JAMES','EMMA','ISLA','OAKLEY','MAX','ISABELLE','MARGOT','EMILY','ALEXANDER','ELIZA','MOHAMMED','ELLIOTT','THOMAS','ELLA','ERIN','ELLIOT','ROWAN','ELLIE',
        'ALBIE','BOBBY','POPPY'],
    p40 : ['AYLA','CALEB','LUCY','DARCIE','EMILIA','JESSICA','ZARA','AMELIA','JASMINE','WILLOW','MILO','REUBEN','ROSE','SONNY','ISABELLA','ISAAC',
        'LEO','SOPHIA','PENELOPE','LOGAN','ARCHIE','WILLIAM','TEDDY','LIAM','FELIX','ORLA','MARIA','MASON','OLIVER','ROMAN','REGGIE','STANLEY','AVA','THEO','JACOB',
        'JACK','LAYLA','BELLA','FREYA','MIA'],
    p60 : ['MICHAEL','FINN','ARTHUR','SAMUEL','MILA','NOAH','HALLIE','DAISY','ELEANOR','IRIS','HARRISON','MUHAMMAD','THEODORE',
        'MAYA','IMOGEN','LOLA','CHESTER','EVA','LOUIE','JASPER','DELILAH','ROSIE','MABEL','HARLEY','LUCAS','VIOLET','BONNIE','HARRY','NANCY','ETHAN','SEBASTIAN',
        'EVIE','DANIEL','HENRY','JAXON','GEORGE','CHARLOTTE','CHARLES','ALFRED','JOSEPH'],
    p80 : ['ROBYN','JOSHUA','THEA','JACKSON','OSCAR','CHLOE','OTIS','MOLLY','HUDSON',
        'AURORA','SOFIA','LILY','LEON','ELLIS','ARIA','FREDDIE','FINLEY','IBRAHIM','MAISIE','ESME','LOTTIE','SCARLETT','OLIVIA','HARRIET','SOPHIE','HARPER','GRACE',
        'BENJAMIN','RUBY','ALFIE','MILLIE','ARABELLA','ADAM','SIENNA','ELIZABETH','MATILDA','HARVEY','HANNAH','GRACIE','CHARLIE']
}

var writetime = 10; 	// write every x trials 
var introspectiontime = 2; // how often to ask for happiness ratings 
var nTrials = 6;
var dofullscreen = true; 

//Generating experimental stimuli
var timeline = [];  /* list of things to run */
var people = ['./assets/imgs/85.png ', './assets/imgs/70.png ', './assets/imgs/30.png ', './assets/imgs/15.png '];
var names = ['Tomoa', 'Adam', 'Janja', 'Brooke'];
//probability of being liked by each person
var probabilities = {
    'Tomoa': 0.85,
    'Brooke': 0.7,
    'Adam': 0.3,
    'Janja': 0.15
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
timeline.push(intervention0); 
timeline.push(intervention1); 
timeline.push(intervention2); 
timeline.push(intervention3); 
timeline.push(intervention4); 
timeline.push(control1); 
timeline.push(control2); 
timeline.push(control3); 
timeline.push(control4); 
//timeline.push(initialinstructions_profile);
//timeline.push(ask_questions_profile);
//timeline.push(initialinstructions); 
//timeline = timeline.concat(timeline_PHQ);
//timeline = timeline.concat(timeline_TEPS);
//timeline.push(taskinstructions); 

//Main task 
var trial;
for (trial=0; trial<nTrials; trial++) {
    //we want to minimise the noise 
    //best to pseudo-randomise
    //each person will see the same sequence of stimuli with the same correct responses
    //randomise the assignment of colour items to different people
    //intervention/control - randomise with javascript
    //for person 1, blue icon is 80%, for next person blue icon is 20%
    //in excel or matlab generate trials with probability, and then add JSON with this info 
    var response_correct = Math.floor(Math.random() * 2);
    var person = Math.floor(Math.random() * 4);
    var name_trial = list_names.p20[trial];
    var response_correct = trial_response(name_trial,probabilities);
    timeline.push(run_trial(people[person], name_trial, response_correct)); 
    //ask for happiness rating every once in a while
	if ((trial % introspectiontime)==0 & trial > 0) { 
        timeline.push(mood_feedback);}; 
	if ((trial % writetime)==0 & trial > 0) {efftrial.on_finish = function() {
        console.log('will save the data here in the future');
        //saveTaskData(); saveTaskDataDump();
    }
}
};
//randomise intervention and control
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
    timeline.push(control4); 
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




