import {p_image_orders, female_names} from './randomisation.js';
import {saveTaskData, saveMoodData} from './saveData.js' ;

var responses = ['yes.png ', 'no.png '];
var image_path = './assets/imgs/'

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
            correct_answers: ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4']
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
           // compare answers to correct answers
                nCorrect = 0;
                for (var i=0; i < data.correct_answers.length; i++) {
                var questID = "Q"+i;
                if (data.response[questID] == data.correct_answers[i]) {
                    nCorrect++;
                }
                }
                data.nCorrect = nCorrect;
           }
    }
    return learning;

};

//If nodes/loops

var nCorrect = 0;
var introQuiz = {
  type: jsPsychSurveyMultiChoice,
  questions: quizQuestions,
  data: {
    correct_answers: ["C", "A", "B", "A"]
  },
  randomize_question_order: false,
  button_label: "check answers", 
  on_finish: function (data) {
    // compare answers to correct answers
    nCorrect = 0;
    for (var i=0; i < data.correct_answers.length; i++) {
      var questID = "Q"+i;
      if (data.response[questID] == data.correct_answers[i]) {
        nCorrect++;
      }
    }
    data.nCorrect = nCorrect;
  }
};

  
  var loop_node = {
    timeline: [introQuiz],
    loop_function: function(data) {
      if ( nCorrect >= 3 ) {
          return false;
      } else {
          return true;
      }
    }
  };
  
  var continueText= {
    type: jsPsychInstructions,
    allow_backward: false,
    show_clickable_nav: true,
    allow_keys: true,
    //button_label_previous: "back",
    button_label_next: "continue",
    pages: ["<div class=\"row\"> "+ 
	" 	<div class=\"col-3\"></div> "+ 
	" 	<div class=\"col-6\"> "+ 
	"<h2>Main experiment</h2>" + 
	"</br>You have correctly completed the quiz and are ready to start the main experiment! " +
  "Below is the reminder of the task instructions." +
  "<p><b> On each trial we will ask you to try and predict if this person liked you based on your profile. To make a prediction: </b> </p>" +
	"<ul><li>Press 'YES' if you think they liked you.</li>" +
	"    <li>Press 'NO' if you think they did not like you.</li> </ul>" +
  "<p> The only information we will give you about each person is: </p>" +
  "<ul>" +
  "<li> Their relative ranking represented by the size of the slice and colour </li>" +
  "<li> Their gender represented by icon </li>" +
  "<li> Their name </li>" +
  "</ul>" +
	"Every few trials we will also ask you to tell us how you feel about yourself that very moment. "+ 
	"When answering consider <b>how you feel at this very moment</b> and not in general that day. " + 
	"This part is very important for the scientific questions we are trying to answer. " + 
	"Please do your best to truthfully indicate how much (or how little) happiness you experience in that very moment. " +
	"</br><b>Note: pressing the escape key at any point will terminate the experiment. </b>" + 
	"</br></br>[Press Continue to BEGIN THE TASK]</p>" 
            ]
  };

  export { loop_node, continueText };