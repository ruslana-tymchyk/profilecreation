// -----------------------------------------------------------------------------
// INSTRUCTIONS 
import { jsPsych } from './task.js';
import {p_image_orders, image_set} from './randomisation.js';
import { savePreTaskData, saveProfileRatingsData, saveQuestData } from './saveData.js';
var image_path = './assets/imgs/'


var dur_max = 35000; 

// go into full screen
var full_screen = { 
	type: jsPsychFullscreen,
	fullscreen_mode: true
};

var initialinstructions_profile = {
	type: jsPsychHtmlButtonResponse,
	button_html: '<button class="jspsych-btn">%choice%</button>',
    choices: ['Continue'],
	margin_vertical: '8px',
	stimulus: 
	"<div class=\"row\"> "+ 
	" 	<div class=\"col-3\"></div> "+ 
	" 	<div class=\"col-6\"> "+ 
	"<h2>Artificial Intelligence (AI) Agent </h2>" + 
	"<p>Our lab specializes in social psychology research and together with the researchers at the Computer Science Department we have developed " +
	 "an AI agent that can predict whether or not a person with a certain personal profile likes another person based on their personal profile. </p>" +
     "<p> This AI agent has been trained on thousands of people’s responses to other people’s profiles. We have found that this algorithm is <b>95% accurate</b> " +
	 "in predicting the response of the actual person who owns the profile. </p> <p> In the first part of an experiment we will ask you to <b>complete your own personal profile.</b>" +
	 " We will then feed your profile to our AI agent, which will tell us how people would have responded to your profile. </p>" + 
     "<p> While the AI agent is generating responses, we will ask you to <b>rate other people’s profiles</b>, so we can use this information to improve the accuracy of an algorithm. </p>" +
	"<br> Click <b> Continue </b> to complete your personal profile. </br>"
	,

	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

/*
var initialinstructions_profile = {
	type: jsPsychHtmlButtonResponse,
	button_html: '<button class="jspsych-btn">%choice%</button>',
    choices: ['Continue'],
	margin_vertical: '8px',
	stimulus: 
	"<div class=\"row\"> "+ 
	" 	<div class=\"col-3\"></div> "+ 
	" 	<div class=\"col-6\"> "+ 
	"<h2>Create a personal profile</h2>" + 
	"<p>We will first ask you to create a personal profile by answering a few questions about yourself </p>" + 
	"<p> Your profile will be made up of your answers to 5 personal questions. Together they will give others a good idea about who you are. </p>" + 
    "<p> We will then ask you to rate other people's profiles. While you are rating these profiles we will show your profile to other people taking part in the study. </p>" + 
    "<p> These people are men and women between the ages of 18 and 65. They will be asked what they think about you. They can choose to like or dislike you.</p>"+ 
	"<br> <b> When people are rating the profi asked to think about the following when making a decision: </b> </br>"+ 
    "<br> <span class= 'emphasized'> Do you like this person? Do you think you could be friends with them in real life? </p>" + 
    "<p> Or do you think this person is boring and are you not interested in getting to know them any better? </p>" + 
	"<br> <b> They will also be given the following instructions: </b> </br>"+ 
    "Press the “like” button, if you think you could be friends with this person in real life. Press the “dislike” button if you are not interested in getting to know them. </br> </span>" + 
	"<br> Click <b> Continue </b> to complete your personal profile. </br>"
	,

	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};
*/

var initialinstructions_rate_profile = {
	type: jsPsychHtmlButtonResponse,
	button_html: '<button class="jspsych-btn">%choice%</button>',
    choices: ['Continue'],
	margin_vertical: '8px',
	stimulus: 
	"<div class=\"row\"> "+ 
	" 	<div class=\"col-3\"></div> "+ 
	" 	<div class=\"col-6\"> "+ 
	"<h2>Rate other profiles</h2>" + 
	"<p>Thank you for completing your profile. </p>"+
	"<p> We will now ask you to read and rate other people's profile while the algortithm is generating the ratings for your profile. </p>" + 
	"<br> Click <b> Continue </b> to proceed. </br>"
	,
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

var ask_questions_profile= {
	type: jsPsychSurveyText, 
	preamble: ["<h2>Create a personal profile</h2>"+ 
	"<p>  Please answer each question thoughtfully and honestly. " +
	"Take the time to answer and make sure you write <b>at least 2-3 sentences</b>, for an algorithm to have enough information to generate the feedback. </p> "+
	"<p>  Note: if your answers are not valid, you will not be fully reimbursed for participation. </p> "],
	questions: [
        {prompt: "<b>If we asked your friends and family about your best qualities, what might they say?</b>", name: "P1", required:true}, 
        {prompt: "<b>And what would they say were your worst qualities?</b>",  name: "P2", required:true},
        {prompt: "<b>What are you most afraid of?</b>", name: "P3", required:true},
        {prompt: "<b>My favorite things in life are:</b>", name: "P4", required:true},
        {prompt: "<b>I really dislike people who (for example people who are lazy, mean to others, or make annoying noises when they eat):</b>", name: "P5", required:true} 
      ],
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
	on_finish: function(){
	var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
	//var respRT = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
    savePreTaskData(respData);
	}
};


var questions = ["1. If we asked your friends and family about your best qualities, what might they say?", 
    "2. And what would they say were your worst qualities?",
    "3. What are you most afraid of?",
    "4. My favorite things in life are:",
    "5. I really dislike people who (for example people who are lazy, mean to others, or make annoying noises when they eat):"
    ]
	var responses = [["They might say that I'm empathetic and positive.",  
	"Disorganised and sometimes too relaxed.",
	"Becoming someone/acting like someone I thought I wasn't.",
	"Being in nature away from a lot of people, playing/listening to music, climbing, reading.", 
	"I dislike people who are unkind, selfish, narcissistic."
	], //Ori
    ["According to others, my best qualities are being a compassionate listener, and being someone who stays proactive and optimistic in life.",  
    "According to others, my worst qualities are not knowing how to keep a work-life balance, and not always knowing when to draw boundaries with others.",
    "I am afraid to lose my sight.",
    "My favorite things in life are: spending time pursuing my curiosity and creativity, and spending quality time with my loved ones.", 
    "I really dislike people who are too scared to communicate their thoughts and feelings, and those who are selfish and egoistic."
    ],//Heema
	["I am quite driven, sociable and love being around people. They would probably also say that I am a good cook :)",
    "Probably that I am easily distracted. Also I sometimes talk too much about things I get excited about.",
    "I am afraid I will not be liked by new people that I meet. Also I am afraid of very very steep slides!",
    "I enjoy spending time with my friends and having banter with them. I love climbing because it gets me to be active and problem solve at the same time. I also really enjoy Japanese food because it is very wholesome.", 
    "I do not like people who are very demanding all the time and can not relax and take things easy sometimes. I also find it hard to deal with people who are  ignorant of others feelings."
    ],//Lana
	["Opened minded, kind, genuine.",
	"Like to rush things, attention to details.",
	"Losing control over things, things not going as expected.",
	"Animals, plants, cleaning? (Don’t know if that counts).",
	"Who have two faces (shit talk about you behind your back)."] //Lily
]

var rate_profiles_fun = function(profile_count) {
	var rate_profiles = {
		type: jsPsychCategorizeHtml,
		timing_post_trial: 0,
		choices: ['f', 'j'],
		//prompt: ['<br> press F to respond YES </br> <br> press J to respond NO </br>'],
		key_answer: 'f',
		correct_text: " ",
		incorrect_text: " ",
		feedback_duration: 0,
		css_classes: "jspsych-middle",
		stimulus: "<div class=\"row\"> "+ 
		" 	<div class=\"col-3\"></div> "+ 
		" 	<div class=\"col-6\"> "+ 
		"<h2><p> Do you like this person based on their profile " +
		"description? </p></h2>"+ 
		"<p><b>" + questions[0] + "</b><br>" + responses[profile_count][0] + "</br>" +  "</p>" +
		"<p><b>" + questions[1] + "</b><br>" + responses[profile_count][1] + "</br>" +  "</p>" +
		"<p><b>" + questions[2] + "</b><br>" + responses[profile_count][2] + "</br>" +  "</p>" +
		"<p><b>" + questions[3] + "</b><br>" + responses[profile_count][3] + "</br>" +  "</p>" +
		"<p><b>" + questions[4] + "</b><br>" + responses[profile_count][4] + "</br>" +  "</p>" +
		 "<div class=\"row\">" + "<br> press F to respond YES </br> <br> press J to respond NO </br>" ,
		on_start: function(){
			document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	
		},
		on_finish: function(){
			var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
			var respRT = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
			saveProfileRatingsData(profile_count, respData, respRT);
			}
	}
	return rate_profiles;
}

// INSTRUCTIONS 
var images = [["<img src= "+ image_path + "woman_" + p_image_orders[image_set][0] + " alt='Icon' style='width:50px;height:50px;' align='center' >"], 
			  ["<img src= "+ image_path + "woman_" + p_image_orders[image_set][1] + " alt='Icon' style='width:50px;height:50px;' align='center'>"],
			  ["<img src= "+ image_path + "woman_" + p_image_orders[image_set][2] + " alt='Icon' style='width:50px;height:50px;' align='center'>"],
			  ["<img src= "+ image_path + "woman_" + p_image_orders[image_set][3] + " alt='Icon' style='width:50px;height:50px;' align='center'>"]]

var images2 = [["<img src= "+ image_path + "man_" + p_image_orders[image_set][0] + " alt='Icon' style='width:50px;height:50px;' align='center' >"], 
			  ["<img src= "+ image_path + "man_" + p_image_orders[image_set][1] + " alt='Icon' style='width:50px;height:50px;' align='center'>"],
			  ["<img src= "+ image_path + "man_" + p_image_orders[image_set][2] + " alt='Icon' style='width:50px;height:50px;' align='center'>"],
			  ["<img src= "+ image_path + "man_" + p_image_orders[image_set][3] + " alt='Icon' style='width:50px;height:50px;' align='center'>"]]

var taskinstructions_rank= {
	type: jsPsychHtmlButtonResponse,
	button_html: '<button class="jspsych-btn">%choice%</button>',
    choices: ['Continue'],
	margin_vertical: '8px',
	stimulus: [	"<div class=\"row\"> "+ 
	" 	<div class=\"col-3\"></div> "+ 
	" 	<div class=\"col-6\"> "+ 
	"<h2>Main experiment </h2>" + 
	"<p>Thank you for providing your profile and rating other's profiles. You are now ready to start the main part of the experiment." + 
	"<p> We found that certain people tend to either like or dislike more profiles, hence we ranked people based on how many profiles they liked. Each colour corresponds to a category. " +
    "People in the top category (1) liked the greatest number of profiles that they rated, people in the lowest category (4) liked fewest profiles. " +
	"</br></br><b>Below are the icons you will see and their ranking: </b> " +
	"<p> <h1> 1 </h1>" + images[0] + "   " + images2[0] + "</p>" +
	"<p> <h1> 2 </h1>" + images[1] + "   " + images2[1] + "</p>" +
	"<p> <h1> 3 </h1>" + images[2]+ "   " + images2[2] +"</p>" +
	"<p> <h1> 4 </h1>" + images[3] + "   " + images2[3] + "</p>" +
    "<p><b> It is important for the next part of the experiment that you understand the ranking of the images. </b> </p>" +
    "<p> In an experiment you will see icons above. They can either be male or female. Size of the slice in the right corner represents the ranking of the person, with largest slice representing people who liked most profiles and smallest slice representing people who liked fewest profiles. </p>"  +
	"<p> Each colour corresponds to one size of the slice, so if it is easier for you, you can memorise how each colour relates to ranking instead. </p>"
    + "<p></p>[Press Continue to START AN EXPERIMENT]</p>" ], 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

/*
var random_order = [0,1,2,3]

var nCorrect = 0;
var test_relative_rank = {
	preamble: '<p ></br></br><b>Image Rank Order Quiz</b></br></br>Please select the relative rank for each of the colours below. Each number can only be used once. You will be returned to the previous screen until you learn the correct ranking order. </br></br> <b> Please provide ONE response for each. </b> </p>',  
	type: jsPsychSurveyMultiChoice,
	questions: [
		{
		  prompt: 
          "<p>" + images[random_order[0]] + "</p>" , 
		  options: ['1', '2', '3', '4'],
		  required: true,
		  horizontal: true
		}, 
		{
		  prompt: 
          "<p>" + images[random_order[1]] + " </p>" , 
		  options: ['1', '2', '3', '4'], 
		  required: true,
		  horizontal: true
		},
		{
			prompt: 
            "<p>" + images[random_order[2]] + "</p>" , 
			options: ['1', '2', '3', '4'], 
			required: true,
			horizontal: true
		  },
          {
			prompt: 
            "<p>" + images[random_order[3]] + "</p>" , 
			options: ['1', '2', '3', '4'], 
			required: true,
			horizontal: true
		  }
	  ],
      data: {
        correct_answers: ['1', '2', '3', '4']
      },
	  randomize_question_order: false,
      button_label: "check answers", 
	  on_finish: function (data) {
		// compare answers to correct answers
		nCorrect = 0;
		for (var i=0; i < data.correct_answers.length; i++) {
			console.log('answers ' + data.correct_answers);
		  var questID = "Q"+i;
		  if (data.response[questID] == data.correct_answers[i]) {
			nCorrect++;
		  }
		}
		data.nCorrect = nCorrect;
	  }
	};

var loop_node_rank = {
    timeline: [taskinstructions_rank, test_relative_rank],
    loop_function: function(data) {
      if ( nCorrect >= 3 ) {
          return false;
      } else {
          return true;
      }
    }
  };

  */

var debrief = {
	type: jsPsychSurvey,
	pages: [
	  [
		{
		  type: 'html',
		  prompt: "<h2>Study Debrief</h2>"+ 
		  "<p>  Thank you for taking part in our study! Before proceeding we want to get your general impression about this study. " +
		  "Particularly since there are elements of this study that we have not yet told you about. " + 
		  "In psychological research we sometimes have to omit information or deceive participants in order to make our measurements more valid. </p>"
		},
		{
		  type: 'drop-down',
		  prompt: "Did you suspect that we were not honest with you at any point of this study?", 
		  name: 'honest', 
		  options: ['yes', 'no'], 
		  required: true
		}, 
		{
			type: 'text',
			prompt: "If yes - explain how", 
			name: 'how_honest', 
			textbox_rows: 4,
		  textbox_columns: 60,
			required: false,
		  },
		  {
			type: 'html',
			prompt: "<p>We can now share the goals of this research with you. " +
			"In this study we were investigating if mindfulness can reduce fluctuations in self-esteem in response to social feedback. " +
			"For example, when someone tells you that they dislike you, can mindfulness reduce your emotional reaction to such events. " +
			"Conversely, if you receive a lot of positive feedback, does being mindful mean you will not get overly excited about it. " +
			"This is important since past research has found that in individuals with depression, negative feedback reduces self-esteem much more. </p>" +
			"<p>The goal of this study is to find out if we could use mindfulness-based interventions to reduce the effect of social feedback on self-esteem " +
			"in individuals with depression. To be completely sure that it is the mindfulness that makes people less reactive to social feedback - half of " +
			"participants received a mindfulness intervention and the other half were asked to read a book chapter. We expect that only mindfulness intervention " +
			"will reduce the effect of social feedback on self-esteem. </p>" +
			"<p>We have asked you in the experiment to rate the profiles of other people and to provide your own profile for people to rate. " + "In fact, other participants " +
			"were not providing their profiles for you to rate, instead we had a fixed set of profiles generated by our research group and all participants, including you, " +
			"viewed and rated the same profiles. </p> <p> Furthermore, we never used any AI agent to predict people's responses. The feedback that you have been given has been randomly generated " + 
			"by the computer. Hence the feedback that you have received does not tell you anything about what others think of your personal profile. </p>" +
			"<p>In fact, everyone who has participated in this study has received the exact same feedback in the same order. This has been done to ensure " + 
			"that we can precisely measure how social feedback affects self-esteem. Since, if some people received more positive than negative feedback, " +
			"their self-esteem would have likely been higher. This would make it harder for us to measure to which extent the intervention improves self-esteem.</p>" +
			"<p>Your participation in this research is very valuable to us. Therefore, if learning that the purpose of the study is different to what you initially " + 
			"thought it was reduces your satisfaction or raises any questions - please let us know. We hope though that you have enjoyed the study and are happy " + 
			"for us to use your data for the research purposes. If for any reason you do not want us to keep your data - it is completely understandable.</p>"
		  },
		{
		  type: 'text',
		  prompt: "Is there any feedback you would like to give us about "+
				  "any aspect of the study (including the task and questionnaires) please type it in below.", 
		  name: 'study_feedback', 
		  textbox_rows: 4,
		  textbox_columns: 60,
		  required: false
		},
	  ]
	],
	show_question_numbers: 'onPage',
	button_label_finish: 'submit',
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
	on_finish: function() {
	var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
	var respRT = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
	saveQuestData("study_debrief", respData, respRT);
	}
  };

  /*
var debrief = {
	type: jsPsychSurveyText,
	preamble: ["<h2>Study Debrief</h2>"+ 
	"<p>  Thank you for taking part in our study! Before proceeding we want to get your general impression about this study. " +
	"Particularly since there are elements of this study that we have not yet told you about. " + 
	"In psychological research we sometimes have to omit information or deceive participants in order to make our measurements more valid. </p>"
	],
	questions: [
		{prompt: " <b>Did you suspect that we were not honest with you at any point of this study? </b>", name: "P1", required:true},
        {prompt: "<p>We can now share the goals of this research with you. " +
		"In this study we were investigating if mindfulness can reduce fluctuations in self-esteem in response to social feedback. " +
		"For example, when someone tells you that they dislike you, can mindfulness reduce your emotional reaction to such events. " +
		"Conversely, if you receive a lot of positive feedback, does being mindful mean you will not get overly excited about it. " +
		 +
		"This is important since past research has found that in individuals with depression, negative feedback reduces self-esteem much more. </p>" +
		"<p>The goal of this study is to find out if we could use mindfulness-based interventions to reduce the effect of social feedback on self-esteem " +
		"in individuals with depression. To be completely sure that it is the mindfulness that makes people less reactive to social feedback - half of " +
		"participants received a mindfulness intervention and the other half were asked to read a book chapter. We expect that only mindfulness intervention " +
		"will reduce the effect of social feedback on self-esteem. </p>" +
		"<p>We have asked you in the experiment to rate the profiles of other people and to provide your own profile for people to rate. " + "In fact, other participants " +
		"were not providing their profiles for you to rate, instead we had a fixed set of profiles generated by our research group and all participants, including you, " +
		"viewed and rated the same profiles. </p> <p> Furthermore, we never shared your personal profile with anyone and the feedback that you have been given has been generated " + 
		"by the computer. Hence the feedback that you have received does not tell you anything about what others think of your personal profile. </p>" +
        "<p>In fact, everyone who has participated in this study has received the exact same feedback in the same order. This has been done to ensure " + 
		"that we can precisely measure how social feedback affects self-esteem. Since, if some people received more positive than negative feedback, " +
		"their self-esteem would have likely been higher. This would make it harder for us to measure to which extent the intervention improves self-esteem.</p>" +
        "<p>Your participation in this research is very valuable to us. Therefore, if learning that the purpose of the study is different to what you initially " + 
		"thought it was reduces your satisfaction or raises any questions - please let us know. We hope though that you have enjoyed the study and are happy " + 
		"for us to use your data for the research purposes. If for any reason you do not want us to keep your data - it is completely understandable.</p>" +
		"<b>Do you agree with us using your data for research purposes?</b>", name: "P2", required:true}, 
        {prompt: "<p> We hope you enjoyed the experience of participating in this research. </p>" + "<b>Do you have any questions?</b>", name: "P3", required:true}
      ],
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
	on_finish: function(){
		var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
		var respRT = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
		saveQuestData("study_debrief", respData, respRT);
	}
}; 
*/

var questionnaire_instructions = {
	type: jsPsychHtmlButtonResponse,
	button_html: '<button class="jspsych-btn">%choice%</button>',
    choices: ['Continue'],
	margin_vertical: '8px',
	stimulus: 
	"<div class=\"row\"> "+ 
	" 	<div class=\"col-3\"></div> "+ 
	" 	<div class=\"col-6\"> "+ 
	"<h2>Complete the questionnaires</h2>" + 
	"<p>Thank you for completing the main part of a study </p>"+
	"<p>Before completing the research study, we will ask you to complete some questionnaires. </p>" + 
	"<br> Click <b> Continue </b> to proceed. </br>"
	,
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

var end_screen = {
	type: jsPsychHtmlButtonResponse,
	timing_post_trial: 0,
	choices: ['End Task'],
	is_html: true,
	stimulus: 'You have finished the task. <br>Thank you for your contribution to science. <br><br><b> PLEASE CLICK END TASK TO SUBMIT THE TASK TO PROLIFIC </b>.<br></br></br>',
	on_start: function(){
		//saveEndData();
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
	on_finish: function(){
		window.location = "https://app.prolific.co/submissions/complete?cc=7B779A64"; 
	}, 
}; 


export {full_screen, end_screen, dur_max, initialinstructions_profile, ask_questions_profile, rate_profiles_fun, debrief, initialinstructions_rate_profile, taskinstructions_rank,questionnaire_instructions};