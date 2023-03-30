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
	"<h2>Study Overview </h2>" + 
	"<p>In the Part 1 of an experiment we will only ask you to <b>complete your own personal profile.</b>" +
	 "Then, over the next week we will ask other participants to view your profile and decide whether they like you or not based on this profile. </p>" + 
     "<p> Once we have plenty of ratings we will reach out to you and ask you to complete the Part 2 of the experiment. </p>" +
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
	"<p> In the next week, we will show yours and other's profiles to multiple raters. "
	+ "Once we have collated the ratings, we will reach out to you about the second part of the study. </p>" + 
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
	"Take the time to answer and make sure you write <b>at least 2-3 sentences</b>, for others to get an accurate idea about you. </p> "+
	"<p>  Note: if your answers are not valid, you will not be fully reimbursed for participation. </p> "],
	questions: [
		{prompt: "<b>Nickname (i.e. name of fictional character, celebrity. DO NOT write your actual name)</b>", name: "OWN_PROF_NAME", required:true}, 
        {prompt: "<b>If we asked your friends and family about your best qualities, what might they say?</b>", name: "OWN_PROF_1", required:true}, 
        {prompt: "<b>And what would they say were your worst qualities?</b>",  name: "OWN_PROF_2", required:true},
        {prompt: "<b>What are you most afraid of?</b>", name: "OWN_PROF_3", required:true},
        {prompt: "<b>My favorite things in life are:</b>", name: "OWN_PROF_4", required:true},
        {prompt: "<b>I really dislike people who (for example people who are lazy, mean to others, or make annoying noises when they eat):</b>", name: "OWN_PROF_5", required:true} 
      ],
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
	on_finish: function(){
	var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
    savePreTaskData(respData);
	}
};


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
	"<p>Thank you for creating a personal profile! You are now ready to start the main part of the experiment. In the last week, we asked people to rate multiple profiles and we" + 
	"<p> found that certain people tend to either like or dislike more profiles. Hence we ranked people based on how many profiles they liked. People with 4 stars " +
    " liked the greatest number of profiles, people with 1 star liked fewest profiles. So the more stars, the more profiles these people tend to like!" +
	"</br></br><b>Below are the icons you will see and their ranking: </b> " +
	"<p> " + images[0] + "   " + images2[0] + "</p>" +
	"<p> " + images[1] + "   " + images2[1] + "</p>" +
	"<p> " + images[2]+ "   " + images2[2] +"</p>" +
	"<p> " + images[3] + "   " + images2[3] + "</p>" +
    "<p> Just like number of stars, each colour corresponds to one category." +
	"You don't need to worry about colours of the icons, simply " + 
	"remember that more stars means this person liked more profiles. " + 
    "In an experiment you will see icons above. They can either be male or female. </p>" +
    "<p></p>[Press Continue to TEST UNDERSTANDING OF CATEGORIES]</p>" ], 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};


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
		  name: 'DEBRIEF_1', 
		  options: ['yes', 'no'], 
		  required: true
		}, 
		{
			type: 'text',
			prompt: "If yes - explain how", 
			name: 'DEBRIEF_2', 
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
			"viewed and rated the same profiles. </p> <p> Furthermore, the feedback that you have been given has been randomly generated " + 
			"by the computer. Hence this feedback does not tell you anything about what others think of your personal profile. </p>" +
			"<p>In fact, everyone who has participated in this study has received the exact same feedback in the same order. This has been done to ensure " + 
			"that we can precisely measure how social feedback affects self-esteem. Since, if some people received more positive than negative feedback, " +
			"their self-esteem would have likely been higher. This would make it harder for us to measure to which extent the intervention improves self-esteem.</p>" +
			"<p>Your participation in this research is very valuable to us. Therefore, if learning that the purpose of the study is different to what you initially " + 
			"thought it was reduces your satisfaction or raises any questions - please let us know. We hope though that you have enjoyed the study and are happy " + 
			"for us to use your data for the research purposes. If for any reason you do not want us to keep your data - it is completely understandable.</p>" +
			"<p> If for any reason some elements of our tasks have caused you significant distress, feel free to reach out to appropriate helplines: " +
			" 		</p>  " +
			"		<ul>  " +
			"		<p><li><a href=\"http://mind.org.uk\" target=”_blank”>Mind Charity</a></li></p>"+
			"		<p><li><a href=\"https://www.samaritans.org\" target=”_blank”>The Samaritans</a></li></p>"+
			"		<p><li><a href=\"https://www.nhs.uk/mental-health\" target=”_blank”>NHS Choices mental health page</a></li></p>"+
			"		</ul>  " +
			" 		<p>  " 
		  },
		{
		  type: 'text',
		  prompt: "Is there any feedback you would like to give us about "+
				  "any aspect of the study (including the task and questionnaires) please type it in below.", 
		  name: 'DEBRIEF_3', 
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
	"<p>Thank you for completing the main task </p>"+
	"<p>Before completing the study, we will ask you to fill in some questionnaires. </p>" + 
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
	stimulus: 'You have finished the study. <br>Thank you for your contribution to science. <br><br><b> PLEASE CLICK END TASK TO SUBMIT THE TASK TO PROLIFIC </b>.<br></br></br>',
	on_start: function(){
		//saveEndData();
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
	on_finish: function(){
		window.location = "https://app.prolific.co/submissions/complete?cc=7B779A64"; 
	}, 
}; 


export {full_screen, end_screen, dur_max, initialinstructions_profile, ask_questions_profile, debrief, initialinstructions_rate_profile, taskinstructions_rank,questionnaire_instructions};