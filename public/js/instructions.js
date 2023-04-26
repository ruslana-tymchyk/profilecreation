// -----------------------------------------------------------------------------
// INSTRUCTIONS 
import { jsPsych } from './task.js';
import { savePreTaskData} from './saveData.js';
var image_path = './assets/imgs/'



var female_names = ['OLIVIA', 'AMELIA', 'ISLA', 'AVA', 'MIA', 'IVY', 'LILY', 'ISABELLA', 'ROSIE', 'SOPHIA', 'GRACE', 'FREYA',
    'WILLOW', 'FLORENCE', 'EMILY', 'ELLA', 'POPPY', 'EVIE', 'ELSIE', 'CHARLOTTE', 'EVELYN', 'SIENNA', 'SOFIA', 'DAISY', 'PHOEBE',
    'SOPHIE', 'ALICE', 'HARPER', 'MATILDA', 'RUBY', 'EMILIA', 'MAYA', 'MILLIE', 'ISABELLE', 'EVA', 'LUNA', 'JESSICA', 'ADA',
    'ARIA', 'ARABELLA', 'MAISIE', 'ESME', 'ELIZA', 'PENELOPE', 'BONNIE', 'CHLOE', 'MILA', 'VIOLET', 'HALLIE', 'SCARLETT', 'LAYLA',
    'IMOGEN', 'ELEANOR', 'MOLLY', 'HARRIET', 'ELIZABETH', 'THEA', 'ERIN', 'LOTTIE', 'EMMA', 'ROSE', 'DELILAH', 'BELLA', 'AURORA',
    'LOLA', 'NANCY', 'ELLIE', 'MABEL', 'LUCY', 'AYLA', 'MARIA', 'ORLA', 'ZARA', 'ROBYN', 'HANNAH', 'GRACIE', 'IRIS', 'JASMINE',
    'DARCIE', 'MARGOT', 'HOLLY', 'AMELIE', 'AMBER', 'GEORGIA', 'EDITH', 'MARYAM', 'ABIGAIL', 'MYLA', 'ANNA', 'CLARA', 'LILLY',
    'LYRA','SUMMER', 'MAEVE', 'HEIDI', 'ELODIE', 'LYLA', 'EDEN', 'OLIVE', 'AISHA']


var male_names = ["LUCA", "EDWARD","ARLO","RORY","TOMMY","ELIJAH","YUSUF","RALPH","OLLIE","MOHAMMAD","JENSON","JAMES","OAKLEY","MAX",
                 "ALEXANDER","MOHAMMED","ELLIOTT","THOMAS","ELLIOT","ROWAN","ALBIE","BOBBY","CALEB","MILO","REUBEN","SONNY","ISAAC","LEO",
				"LOGAN","ARCHIE","WILLIAM","TEDDY","LIAM","FELIX","MASON","OLIVER","ROMAN","REGGIE","STANLEY","THEO","JACOB","JACK","MICHAEL",
				"FINN","ARTHUR","SAMUEL","NOAH","HARRISON","MUHAMMAD","THEODORE","CHESTER","LOUIE","JASPER","HARLEY","LUCAS","HARRY","ETHAN",
				"SEBASTIAN","DANIEL","HENRY","JAXON","GEORGE","CHARLES","ALFRED","JOSEPH","JOSHUA","JACKSON","OSCAR","OTIS","HUDSON",
                "LEON","ELLIS","FREDDIE","FINLEY","IBRAHIM","BENJAMIN","ALFIE","ADAM","HARVEY","CHARLIE"]


function getRandomItem(arr, items) {

	var final_array = []

	for (let i = 0; i < items; i++) { 
	// get random index value
	var randomIndex = Math.floor(Math.random() * arr.length);

	// get random item
	var item = arr[randomIndex];
	final_array.push(item)
	}
	return final_array
}

var male_subset = getRandomItem(male_names,5);
var female_subset = getRandomItem(female_names,5);

var name_options = female_subset.concat(male_subset, ["None of these names"]);

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
	"<p>Today, in the Part 1 of an experiment we will only ask you to <b>complete your personal profile. </b>" +
	 "Then, over the next week we will show your profile to dozens of people, who will decide whether they like you or not based on this profile. </p>" + 
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

var pick_name = {
    type: jsPsychSurvey,
    pages: [
      [
        {
          type: 'html',
          prompt: "<b>Since we want to maximise the validity of our study, while ensuring your anonimity, we ask you to choose an alias that will be associated with your personal profile. </b>",
        },
        {
          type: 'drop-down',
          prompt: "Pick one of the names below (male and female names provided): ", 
          name: 'pick_name_list', 
          options: name_options, 
          required: true
        }, 
		{
			type: 'text',
			prompt: "If you picked 'None of these names' above, please type in an alias of your choice: ", 
			name: 'pick_name_own', 
			textbox_rows: 1,
		    textbox_columns: 20,
			required: false,
		  },
      ]
    ],
    show_question_numbers: 'onPage',
    button_label_finish: 'submit',
    on_start: function(){
      document.querySelector('body').style.backgroundColor = '#cce3f0fb';
    },
	on_finish: function(){
		var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
		savePreTaskData(respData);
    }
  };

 

var ask_questions_profile= {
	type: jsPsychSurveyText, 
	preamble: ["<h2>Create a personal profile</h2>"+ 
	"<p>  Please answer each question thoughtfully and honestly. " +
	"Take the time to answer and make sure you write <b>at least 2-3 sentences</b>, for others to get an accurate idea about you. </p> "+
	"<p>  Note: if your answers are not valid, you will not be fully reimbursed for participation. </p> "],
	questions: [
		//{prompt: "<b>Nickname (i.e. name of fictional character, celebrity. DO NOT write your actual name)</b>", name: "OWN_PROF_NAME", required:true}, 
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


var end_screen = {
	type: jsPsychHtmlButtonResponse,
	timing_post_trial: 0,
	choices: ['End Task'],
	is_html: true,
	stimulus: 
	"<div class=\"row\"> "+ 
	" 	<div class=\"col-3\"></div> "+ 
	" 	<div class=\"col-6\"> "+ 
	"<b>You have finished Part 1 of the study. <br>Thank you for your contribution to science. </b>" + 
	"<p> In the next week, we will show yours and other's profiles to dozens of people. "
	+ "Once we have collated their ratings, we will reach out to you about the second part of the study. </p>" + 
	"<br><br><b> PLEASE CLICK END TASK TO SUBMIT THE TASK TO PROLIFIC </b>.<br></br></br>",
	on_start: function(){
		//saveEndData();
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
	on_finish: function(){
		window.location = "https://app.prolific.co/submissions/complete?cc=7B779A64"; 
	}, 
}; 


export {full_screen, end_screen, dur_max, initialinstructions_profile, ask_questions_profile, pick_name};