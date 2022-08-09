 
//import {p_image_orders, image_set} from './randomisation.js';
//var image_path = './assets/imgs/'

var timeline_instructions = [];

// INSTRUCTIONS 
var introText = {
  type: jsPsychHtmlButtonResponse,
	button_html: '<button class="jspsych-btn">%choice%</button>',
  choices: ['Continue'],
	margin_vertical: '8px',
	stimulus: 
	////////////////////page one////////////////////
    "<div class=\"row\"></div> "+ 
	" 	<div class=\"col-3\"></div> "+ 
	" 	<div class=\"col-6\"> "+ 
	"<h2>Instructions</h2>" + 
	"<p><b> The AI agent has now generated people's responses to your profile. On each trial we will ask you to try and predict if this person liked you based on your profile. To make a prediction: </b> </p>" +
	"<ul><li>Press 'YES' if you think they liked you.</li>" +
	"    <li>Press 'NO' if you think they did not like you.</li> </ul>" +
  "<b> The only information we will give you about each person is: </b>" +
  "<ul>" +
  "<li> Their relative ranking represented by the size of the slice and colour </li>" +
  "<li> Their gender represented by icon </li>" +
  "<li> Their name </li>" +
  "</ul>" +
	"Every few trials we will also ask you to tell us how you feel about yourself that very moment. "+ 
	"When answering consider how you feel at this very moment and not in general that day. " + 
	"This part is very important for the scientific questions we are trying to answer. " + 
	"Please do your best to truthfully indicate how much (or how little) happiness you experience in that very moment. " +
  "<p></p>We will now test your understanding of the task instructions. <p></p> <b>You will not be able to proceed with an experiment "+
  "and will be returned to this screen until you correctly complete the task understanding quiz. </b>"+ 
  "</br></br>[Press Continue to TEST THE UNDERSTANDING OF TASK INSTRUCTIONS]</p>" 
, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

var quizQuestions = [
    { prompt: "<p><b>1. The point of the study is to...</b></p>"+
              "<p><b>A</b>  Try to get as many people as possible to like me </p>"+
              "<p><b>B</b>  Decide if I like the people shown based on their profiles </p>"+
              "<p><b>C</b>  Try to predict if the person shown liked me or disliked me based on my profile </p>",
      options: ["A", "B", "C"],
      required: true,
      horizontal: false
    },
    { prompt: "<p><b>2. When asking to rate how you feel, we ask you to think about? </b></p>"+
              "<p><b>A</b>  Feelings of happiness in the moment  </p>"+
              "<p><b>B</b>  General mood today </p>"+
              "<p><b>C</b>  How you feel about yourself in general </p>",
      options: ["A", "B", "C"],
      required: true,
      horizontal: false
    },
    { prompt:  "<p><b>3. Each slice next to an icon corresponds to ... </b></p>"+
              "<p><b>A</b>  The exact number of profiles that the person liked </p>"+
              "<p><b>B</b>  The rank order of that person, based on how many profiles they liked </p>"+
              "<p><b>C</b>  How many people liked this person </p>",
      options: ["A", "B", "C"],
      required: true,
      horizontal: false
    },
    { prompt:  "<p><b>4. The smallest size of the slice ... </b></p>"+
              "<p><b>A</b>  Means that this type of person liked most profiles </p>"+
              "<p><b>B</b>  Means that this type of person liked fewest profiles </p>"+
              "<p><b>C</b>  Does not give any information about the person </p>",
      options: ["A", "B", "C"],
      required: true,
      horizontal: false
    }
  ];
  
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
  
  var sorryText = {
    type: jsPsychInstructions,
    allow_backward: false,
    show_clickable_nav: true,
    allow_keys: true,
    button_label_next: "continue",
    pages: ["<p><h2>Sorry, you didn’t get all the answers right this time!</h2></p>"+ 
            "<p>"+
            "To check we have explained everything clearly, please re-read the "+
            "information and try the quiz again."+
            "</p>"]
  };
  
  var if_node = {
    timeline: [sorryText],
    condition_function: function(data) {
      if ( loop_node == false ) {
          return false;
      } else {
          return true;
      }
    }
  }
  
  var loop_node = {
    timeline: [introText, introQuiz],
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

  ///////////////////////////////////////////// CONCAT ////////////////////////////////////////////////////////
  
  //timeline_instructions.push(loop_node);     // loop through instructions and quiz until correct
  //timeline_instructions.push(continueText);     // loop through instructions and quiz until correct
  export { loop_node, continueText };