import {p_image_orders} from './randomisation.js';
//import {saveTaskData, saveMoodData} from './saveData.js' ;

var learn_colours = function(){
    //Which category does this person belong to 
    //var image_orders = [ 'blue.png', 'yellow.png', 'pink.png', 'purple.png' ];
    var image_path = './assets/imgs/'
    var gender = ['woman_', 'man_'];
    var image_set = 5; //itterate instead of entering single variable to get different combinations of images
    //var type_trial = [1,2,3,4] //blue, yellow, purple, pink
    //Press f to choose 1, press j to choose 2
    //var response = [1];
    var learning = {
        type: jsPsychCategorizeHtml,
        timing_post_trial: 0,
        choices: ['f', 'j'],
        //prompt: ['<br> press F to respond YES </br> <br> press J to respond NO </br>'],
        key_answer: 'j',
        correct_text:  "<br> <b> Correct. </b> </br>",
        //"<p> <img src=" + image_path + responses[0] + "alt='Yes icon' style='width:200px;height:200px;'> <p>" + "<br> <b> They liked your profile. </b> </br>",
        incorrect_text: "<br> <b> Incorrect. </b> </br>",
        //"<p> <img src=" + image_path + responses[1] + "alt='No icon' style='width:200px;height:200px;'> <p>" + "<br> <b> They did not like your profile. </b> </br>",
        feedback_duration: 2000,
        css_classes: "jspsych-middle",
        stimulus: "<div class=\"row\"> "+ 
        "<h1>What is the ranking of this person?</h1>"+ 
        "<p> <img src= " + image_path + gender[1] + p_image_orders[image_set][1] + " alt='Person Icon' style='width:200px;height:200px;'> <p>" + 
         + "<div class=\"row\">" + "<br> press number that corresponds to person category, where 1 corresponds to profiles who liked most people and 4 to profiles who liked fewest people </br>" ,
        on_start: function(){
            document.querySelector('body').style.backgroundColor = '#cce3f0fb';
            //saveStartData()
        }
        //,
        //on_finish: function(){
        //var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
        //var rtData = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
        //saveTaskData(trialN, respData, rtData)
        //}
    }
    return learning;

};

export {learn_colours};