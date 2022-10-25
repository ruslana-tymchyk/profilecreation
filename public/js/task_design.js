// Task
import {p_image_orders, female_names} from './randomisation.js';
import {saveTaskData, saveMoodData} from './saveData.js' ;

var responses = ['yes.png ', 'no.png '];
var image_path = './assets/imgs/'

/*
//itterate through the same order of 12 images until they get it right -> IMPROVE
var image_orders = [ 'blue.png', 'yellow.png', 'pink.png', 'purple.png',
                     'blue.png', 'yellow.png', 'pink.png', 'purple.png',
                     'blue.png', 'yellow.png', 'pink.png', 'purple.png'];
var dict = {
    'blue.png' : '1',
    'yellow.png' : '2',
    'purple.png' : '3',
    'pink.png' : '4'
}

var learn_colours = function(trialN){
    //Which category does this person belong to 
    var gender = ['woman_', 'man_'];
    var gender_choice = Math.round(Math.random()); //generate 1 or 0
    2//itterate instead of entering single variable to get different combinations of images
    //var type_trial = [1,2,3,4] //blue, yellow, purple, pink
    var correct_response = image_orders[trialN];
    var learning = {
        type: jsPsychCategorizeHtml,
        timing_post_trial: 0,
        choices: ['1', '2', '3', '4'],
        //prompt: ['<br> press F to respond YES </br> <br> press J to respond NO </br>'],
        key_answer: dict[correct_response],
        correct_text:  "<br> <b> Correct. </b> </br>",
        //"<p> <img src=" + image_path + responses[0] + "alt='Yes icon' style='width:200px;height:200px;'> <p>" + "<br> <b> They liked your profile. </b> </br>",
        incorrect_text: "<br> <b> Incorrect. </b> </br>",
        //"<p> <img src=" + image_path + responses[1] + "alt='No icon' style='width:200px;height:200px;'> <p>" + "<br> <b> They did not like your profile. </b> </br>",
        feedback_duration: 2000,
        data: {
            correct_response_counter: 0
        },
        css_classes: "jspsych-middle",
        stimulus: "<div class=\"row\"> "+ 
        "<h1>What is the ranking of this person?</h1>"+ 
        "<p> <img src= " + image_path + gender[gender_choice] + image_orders[trialN] + " alt='Person Icon' style='width:200px;height:200px;'> <p>" + 
         + "<div class=\"row\">" + "<br> press number that corresponds to person category, where 1 corresponds to profiles who liked most people and 4 to profiles who liked fewest people </br>" ,
        on_start: function(){
            document.querySelector('body').style.backgroundColor = '#cce3f0fb';
            //saveStartData()
        },
        on_finish: function(){
            if (this.type.jsPsych.data.getLastTrialData().trials[0].response == dict[correct_response]) {
                this.type.jsPsych.data.correct_response_counter += 1;
            }
            else{
                this.type.jsPsych.data.correct_response_counter = 0;
        }
        }
    }
    return learning;

};
*/

var run_trial = function(type_trial, name, response_correct, image_set, trialN) {
    //pass the correct response into this
    var name_gender = female_names.includes(name);
    if (name_gender){
      name_gender = 'woman_'; }
    else { 
         name_gender = 'man_';
    } 
    var choices = ['f', 'j']; 
    var response = choices[response_correct - 1];
    var ask_question = {
        type: jsPsychCategorizeHtml,
        timing_post_trial: 0,
        choices: ['f', 'j'],
        //prompt: ['<br> press F to respond YES </br> <br> press J to respond NO </br>'],
        key_answer: response,
        correct_text: "<p> <img src=" + image_path + responses[0] + "alt='Yes icon' style='width:200px;height:200px;'> <p>" + "<br> <b> They liked your profile. </b> </br>",
        incorrect_text: "<p> <img src=" + image_path + responses[1] + "alt='No icon' style='width:200px;height:200px;'> <p>" + "<br> <b> They did not like your profile. </b> </br>",
        feedback_duration: 2000,
        css_classes: "jspsych-middle",
        stimulus: "<div class=\"row\"> "+ 
        "<h1>Did this person like you?</h1>"+ 
        "<p> <img src= " + image_path + name_gender + p_image_orders[image_set][type_trial] + " alt='Person Icon' style='width:200px;height:200px;'> <p>" + 
        "<h2>" + name +"</h2>" + "<div class=\"row\">" + "<br> press F to respond YES </br> <br> press J to respond NO </br>" ,
        on_start: function(){
            document.querySelector('body').style.backgroundColor = '#cce3f0fb';
            //saveStartData()
        },
        on_finish: function(){
        var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
        var rtData = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
        saveTaskData(trialN, respData, rtData)
        }
    }
    return ask_question;
};
//create a variable that saves previous slider response and uses it as the starting value for the next trial
//increases autocorrelation of signal & reduces noise
var mood_feedback_fun = function(trialN){
        var mood_feedback = { 
            type: jsPsychHtmlSliderResponse,
            stimulus: ["<h1>How do you feel about yourself at the moment?</h1>"],
            labels: ['very bad', 'very good'],
            prompt: ['<p> Please provide response before continuing </p>'],
            button_label: ['Continue'],
            slider_width: 500,
            require_movement: true, //must move slider before clicking
            on_start: function(mood_feedback_fun){
                document.querySelector('body').style.backgroundColor = '#cce3f0fb';
                    var slider_responses = this.type.jsPsych.data.get().filter({ trial_type: "html-slider-response" }).select('response').values;
                    var previous_answer = slider_responses[slider_responses.length - 1];
                    if (previous_answer == null){
                        var previous_answer = 50;
                    }
                    document.querySelector('body').style.backgroundColor = '#cce3f0fb';
                    //saveStartData()
                    mood_feedback_fun.slider_start = previous_answer;
            },
            on_finish: function(){
                var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
                var rtData = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
                saveMoodData(trialN, respData, rtData)
                }
            }
    return mood_feedback;
};


export {run_trial, mood_feedback_fun};