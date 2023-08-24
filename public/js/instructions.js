// -----------------------------------------------------------------------------
// INSTRUCTIONS 
import { jsPsych } from './task.js';
import { savePreTaskData,saveName} from './saveData.js';
var image_path = './assets/imgs/'
var responses = ['yes.png ', 'no.png '];



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

				var q1 = ["They might say that I'm empathetic and positive.",
				"According to others, my best qualities are being a compassionate listener, and being someone who stays proactive and optimistic in life.",
				"I am quite driven, sociable and love being around people. They would probably also say that I am a good cook :)",
				"Opened minded, kind, genuine.",
				"Very funny, I enjoy telling a good joke"
				]
				
				var q2 = ["Disorganised and sometimes too relaxed.",
				"According to others, my worst qualities are not knowing how to keep a work-life balance, and not always knowing when to draw boundaries with others.",
				"Probably that I am easily distracted. Also I sometimes talk too much about things I get excited about.",
				"Like to rush things, attention to details.",
				"I spend too much time playing video games sometimes"
				]
				
				var q3 = ["Becoming someone/acting like someone I thought I wasn't.",
				"I am afraid to lose my sight.",
				"I am afraid I will not be liked by new people that I meet. Also I am afraid of very very steep slides!",
				"Losing control over things, things not going as expected.",
				"My history teacher"
				]
				
				var q4 = ["Being in nature away from a lot of people, playing/listening to music, climbing, reading.", 
				"My favorite things in life are: spending time pursuing my curiosity and creativity, and spending quality time with my loved ones.", 
				"I enjoy spending time with my friends and having banter with them. I love climbing because it gets me to be active and problem solve at the same time. I also really enjoy Japanese food because it is very wholesome.", 
				"Animals, plants, cleaning? (Don’t know if that counts).",
				"Video games of course, and volleyball"
				]
				
				var q5 = ["I dislike people who are unkind, selfish, narcissistic.",
				"I really dislike people who are too scared to communicate their thoughts and feelings, and those who are selfish and egoistic.",
				"I do not like people who are very demanding all the time and can not relax and take things easy sometimes. I also find it hard to deal with people who are  ignorant of others feelings.",
				"Who have two faces (shit talk about you behind your back).",
			    "Very demanding, but don't do anything themselves"]

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
	" 	<div class=\"prof-inst\"> "+ 
	"<h2>Study Overview </h2>" + 
	"<p>Today, in the Part 1 of an experiment we will only ask you to <b>complete your personal profile </b> and <b>rate other people's profiles. </b>" +
	"These people would have completed the profile, just like you. Based on information in their profile, we ask you to tell us if you like each person or not.</p>" +
	 "<p>Then, over the next week we will show your profile to dozens of people, who will decide whether they like you or not based on your profile. " + 
     "Once we have plenty of ratings we will reach out to you and ask you to complete the Part 2 of the experiment. </p>" +
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
          prompt: "<b>Since we want to maximise the validity of our study, while ensuring your anonimity, we ask you to choose an <b> alias </b> that will be associated with your personal profile. </b>",
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
	css_classes: ['mini-margin'],
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
	console.log('Participant responses');
	console.log(respData);
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
	" 	<div class=\"prof\"> "+ 
	"<h2>Rate other profiles</h2>" + 
	"<p>Thank you for completing your profile. We will now ask you to read and rate other people's profiles. </p>"+
	"<p> Click on green 'Thumbs Up' button if you like this person. Click on red 'Thumbs Down' button if you dislike this person.</p>" + 
	"<p> Click <b> Continue </b> to proceed. </p>"
	,
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};


//////RATE PROFILES

// define trial stimuli and choice array for use as a timeline variable 
var nTrials = 5;
var name_order = ['Jay', 'Laura', 'Ruby', 'Bella', 'Gordon']
var events_causes_learning = [];
for ( var i = 0; i < nTrials; i++ ) {
    events_causes_learning[i] = { 
                trialIndex: i,
                name: name_order[i],
				qq1: q1[i],
				qq2: q2[i],
				qq3: q3[i],
				qq4: q4[i],
                qq5: q5[i]};

};
console.log(events_causes_learning)

    var learning_trial = {
        // jsPsych plugin to use
        type: jsPsychHtmlButtonResponse,
        // trial info
        choices: ['They liked me', 'They did not like me'],
        stimulus: function () {
            var stim = "<div class=\"row\"> "+ 
            "<h1>Do you like this person?</h1>"+ 
			"<div class=\"prof-name\"> "+
            "<h2>" + jsPsych.timelineVariable('name') +"</h2>" +
			'</div>'+
			"<div class=\"prof\"> "+
            '<p><b> The best qualities: </b></p>' +
            '<p style = "font-family:Raleway, sans-serif; weight:300">' + jsPsych.timelineVariable('qq1') + '</p>' + 
            '</div>'+
			"<div class=\"prof\"> "+
            '<p><b> The worst qualities: </b></p>' +
            '<p style = "font-family:Raleway, sans-serif; weight:300">' + jsPsych.timelineVariable('qq2') + '</p>' + 
            '</div>'+
            "<div class=\"prof\"> "+
            '<p><b> Afraid of: </b></p>' +
            '<p style = "font-family:Raleway, sans-serif; weight:300">' + jsPsych.timelineVariable('qq3') + '</p>' + 
            '</div>'+
			"<div class=\"prof\"> "+
            '<p><b> Favourite things: </b></p>' +
            '<p style = "font-family:Raleway, sans-serif; weight:300">' + jsPsych.timelineVariable('qq4') + '</p>' + 
            '</div>'+
			"<div class=\"prof\"> "+
            '<p><b> Dislikes people who: </b></p>' +
            '<p style = "font-family:Raleway, sans-serif; weight:300">' + jsPsych.timelineVariable('qq5') + '</p>' + 
            '</div>'
            return stim;
        },
        prompt: null,  
        save_trial_parameters: {
            choices: true
        },
        // trial timing
        stimulus_duration: null,                // stim text remains on screen indefinitely
        response_ends_trial: true,              // trial ends only when response entered
        time_after_choice: 750,                 // time in ms to leave trial info on screen following choice
        post_trial_gap: 0,                     
        // styling
        margin_vertical: '0px',                 // vertical margin of the button (px)
        margin_horizontal: '20px',              // horizontal margin of the button (px)
		button_html: ["<button class='jspsych-btn-img'><img src='./assets/imgs/yes.png' width='100' height = '100' >%choice%</button>",
		"<button class='jspsych-btn-img'><img src='./assets/imgs/no.png' width='100' height = '100' >%choice%</button>"],  // button without background to insert image
        // at end of each trial
    on_finish: function() {

    }

};


    // if trial timed out, loop trial and feedback again until participant responds
var learning_trial_node = {
    timeline: [ learning_trial],
    loop_function: function () {
        var prev_trial_to = jsPsych.data.getLastTimelineData().trials[0].timedout;
        if ( prev_trial_to == true ) {
            return true; 
        } else {
            return false; 
        }
    }
};


///////////////////////////////////////////// CONCAT ////////////////////////////////////////////////////////

var rating_trials = {
    timeline: [learning_trial_node],
    timeline_variables: events_causes_learning         
};



var end_screen = {
	type: jsPsychHtmlButtonResponse,
	timing_post_trial: 0,
	choices: ['End Task'],
	is_html: true,
	stimulus: 
	"<div class=\"row\"> "+ 
	" 	<div class=\"col-3\"></div> "+ 
	" 	<div class=\"prof-inst\"> "+ 
	"<p><b>You have finished Part 1 of the study. </b></p> <p><b>Thank you for your contribution to science. </b></p>" + 
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


export {full_screen, end_screen, dur_max, initialinstructions_profile, ask_questions_profile, pick_name,initialinstructions_rate_profile,rating_trials};