// -----------------------------------------------------------------------------
// INSTRUCTIONS 
import { jsPsych } from './task.js';
import { savePreTaskData,saveName, saveProfileRatingsData} from './saveData.js';
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
	"<p>Today, in the Part 1 of an experiment we will only ask you to <b>complete your personal profile </b> and <b>rate other people's profiles. </b>" +
	"These people would have completed the profile, just like you. Based on information in their profile, we ask you to tell us if you like each person or not." +
	 "Then, over the next week we will show your profile to dozens of people, who will decide whether they like you or not based on this profile. </p>" + 
     "<p> Once we have plenty of ratings we will reach out to you and ask you to complete the Part 2 of the experiment. </p>" +
	"<br> Click <b> Continue </b> to complete your personal profile. </br>"
	,

	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};



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
		saveName(respData);
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
	"<p> We will now ask you to read and rate other people's profiles. </p>" + 
	"<br> Click <b> Continue </b> to proceed. </br>"
	,
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

var questions = [" ", 
    "The best qualities (according to friends and family): ", 
    "The worst qualities (according to friends and family): ",
    "Afraid of: ",
    "Favourite things: ",
    "Dislike people who: "
    ]
	var responses = [["<div class='prof'><h1>Jay </h1></div>", 
	"They might say that I'm empathetic and positive.",  
	"Disorganised and sometimes too relaxed.",
	"Becoming someone/acting like someone I thought I wasn't.",
	"Being in nature away from a lot of people, playing/listening to music, climbing, reading.", 
	"I dislike people who are unkind, selfish, narcissistic."
	], //Ori
    ["<div class='prof'><h1>Laura </h1></div>",
	"According to others, my best qualities are being a compassionate listener, and being someone who stays proactive and optimistic in life.",  
    "According to others, my worst qualities are not knowing how to keep a work-life balance, and not always knowing when to draw boundaries with others.",
    "I am afraid to lose my sight.",
    "My favorite things in life are: spending time pursuing my curiosity and creativity, and spending quality time with my loved ones.", 
    "I really dislike people who are too scared to communicate their thoughts and feelings, and those who are selfish and egoistic."
    ],//Heema
	["<div class='prof'><h1>Ruby </h1></div>",
	"I am quite driven, sociable and love being around people. They would probably also say that I am a good cook :)",
    "Probably that I am easily distracted. Also I sometimes talk too much about things I get excited about.",
    "I am afraid I will not be liked by new people that I meet. Also I am afraid of very very steep slides!",
    "I enjoy spending time with my friends and having banter with them. I love climbing because it gets me to be active and problem solve at the same time. I also really enjoy Japanese food because it is very wholesome.", 
    "I do not like people who are very demanding all the time and can not relax and take things easy sometimes. I also find it hard to deal with people who are  ignorant of others feelings."
    ],//Lana
	["<div class='prof'><h1>Bella </h1></div>",
	"Opened minded, kind, genuine.",
	"Like to rush things, attention to details.",
	"Losing control over things, things not going as expected.",
	"Animals, plants, cleaning? (Don’t know if that counts).",
	"Who have two faces (shit talk about you behind your back)."] //Lily
]

var rate_profiles_fun = function(profile_count) {
	var rate_profiles = {
		type: jsPsychHtmlButtonResponseCA,
		time_after_choice: 2000,
		choices: ['f', 'j'], //0,1
		//prompt: ['<br> press F to respond YES </br> <br> press J to respond NO </br>'],
		key_answer: '0',
		correct_text: " ",
		incorrect_text: " ",
		//feedback_duration: 0,
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
		"<p><b>" + questions[5] + "</b><br>" + responses[profile_count][5] + "</br>" +  "</p>" +
		 "<div class=\"row\">" ,
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
	"We will also use your feedback to tell others if people liked their profile or not." +
	"<br><br><b> PLEASE CLICK END TASK TO SUBMIT THE TASK TO PROLIFIC </b>.<br></br></br>",
	on_start: function(){
		//saveEndData();
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
	on_finish: function(){
		window.location = "https://app.prolific.co/submissions/complete?cc=7B779A64"; 
	}, 
}; 


export {full_screen, end_screen, dur_max, initialinstructions_profile, ask_questions_profile, pick_name,initialinstructions_rate_profile,rate_profiles_fun};