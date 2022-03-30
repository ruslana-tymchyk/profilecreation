// INSTRUCTIONS 
var initialinstructions_profile = {
	type: "instructions", 
	pages: ["<h1>Create a personal profile</h1></br></br>" + 
	"<p>You will now create a profile about yourself. </p>" + 
    "<p> You will create your profile via this online platform, so that we can show it to other people taking part in the study. </p>" + 
    "<p> These people are men and women between the ages of 18 and 30. They will be asked what they think about you. They can choose to like or dislike you.</p>"+ 
	"<br> This is how they are asked make their decision: </br>"+ 
    "<br> <span class= 'emphasized'> Do you like this person? Do you think you could you be friends with them in real life? </p>" + 
    "<p> Or do you think this person is boring and are you not interested in getting to know them any better? </p> </br>" + 
    "<br>Press the “like” button, if you think you could be friends with this person in real life. Press the “dislike” button if you are not interested in getting to know them.</br> </span>" + 
    "<p> Your profile will be made up of your answers to 5 personal questions. Together they will give others a good idea about who you are. </p>" + 
    "<p> Please answer each question thoughtfully and honestly in roughly 2-3 sentences. Take the time to answer, because this is the only information that others will have to judge you. </p>"], 
	show_clickable_nav: true, 
	//key_forward: 'j',
	//key_backward: 'f',
	button_label_next: 'Next',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

// INSTRUCTIONS 
var ask_questions_profile= {
	type: "survey-text", 
	questions: [
        {prompt: "<b>If we asked your friends and family about your best qualities, what might they say?</b>", name: "P1", required:true}, 
        {prompt: "<b>And what would they say were your worst qualities?</b>",  name: "P2", required:true},
        {prompt: "<b>What are you most afraid of?</b>", name: "P3", required:true},
        {prompt: "<b>My favorite things in life are:</b>", name: "P4", required:true},
        {prompt: "<b>I really dislike people who (for example people who are lazy, mean to others, or make annoying noises when they eat):</b>", name: "P5", required:true} 
      ],
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

export {initialinstructions_profile, ask_questions_profile};