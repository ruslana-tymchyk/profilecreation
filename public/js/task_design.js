// Task
import {p_image_orders} from './randomisation.js';

var responses = ['yes.png ', 'no.png '];
var image_path = './assets/imgs/'

var run_trial = function(type_trial, name, response_correct, image_set) {
    //pass the correct response into this
    var choices = ['f', 'j'];
    var response = choices[response_correct];
    console.log(response);
    var ask_question = {
        type: jsPsychCategorizeHtml,
        timing_post_trial: 0,
        choices: ['f', 'j'],
        //prompt: ['<br> press F to respond YES </br> <br> press J to respond NO </br>'],
        key_answer: response,
        correct_text: "<p> <img src=" + image_path + responses[0] + "alt='Yes icon' style='width:200px;height:200px;'> <p>" + "<br> <b> Correct! They liked your profile. </b> </br>",
        incorrect_text: "<p> <img src=" + image_path + responses[1] + "alt='No icon' style='width:200px;height:200px;'> <p>" + "<br> <b> Incorrect! They did not like your profile. </b> </br>",
        feedback_duration: 2000,
        css_classes: "jspsych-middle",
        stimulus: "<div class=\"row\"> "+ 
        "<h1>Did this person like you?</h1>"+ 
        "<p> <img src= " + image_path + p_image_orders[image_set][type_trial] + " alt='Person Icon' style='width:200px;height:200px;'> <p>" + 
        "<h2>" + name +"</h2>" + "<div class=\"row\">" + "<br> press F to respond YES </br> <br> press J to respond NO </br>" ,
        on_start: function(){
            document.querySelector('body').style.backgroundColor = '#cce3f0fb';
            //saveStartData()
        }
    }
    return ask_question;
};
//create a variable that saves previous slider response and uses it as the starting value for the next trial
//increases autocorrelation of signal & reduces noise
var previous_answer = 37;
var mood_feedback = { 
    type: jsPsychHtmlSliderResponse,
	stimulus: ["<h1>How do you feel about yourself at the moment?</h1>"],
    labels: ['very bad', 'very good'],
    prompt: ['<p> Please provide response before continuing </p>'],
    button_label: ['Continue'],
    slider_width: 150,
    slider_start: previous_answer, 
    require_movement: true, //must move slider before clicking
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

var intervention1_feedback = { 
    type: jsPsychHtmlSliderResponse,
	stimulus: ["<h1>How much your thoughts distracted you from breathing?</h1>"],
    labels: ['I did not have thoughts at all', 'I was thinking of something all the time'],
    prompt: ['<p> Please provide response before continuing </p>'],
    button_label: ['Continue'],
    slider_width: 150,
    slider_start: previous_answer, 
    require_movement: true, //must move slider before clicking
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

export {run_trial, mood_feedback};