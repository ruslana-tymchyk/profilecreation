// -----------------------------------------------------------------------------
// INSTRUCTIONS 

var baseearn = "3.42"; 
var pointtopenny= "0.25"; 
var approxtime = "30"; 
var dur_max = 35000; 

// go into full screen
var full_screen = { 
	type: jsPsychFullscreen,
	fullscreen_mode: true
};


// INSTRUCTIONS 
var initialinstructions = {
	type: jsPsychInstructions, 
	pages: ["<h1>Mindfulness task</h1></br></br>" + 
	"<p>Welcome to the scientific experiment on happiness.</p>"+ 
	"<p>Before the main part of the experiment, we need to ask you three sets of questions about your mood and how you feel.</p>" + 
	"<p>Please answer these as truthfully as possible. It is critical for the scientific questions we are trying to answer.</p>"+
	"<p>We will tell you more details about the main experiment after you have answered these questions.</p>"+
	"</br>Note: pressing the escape key at any point will terminate the experiment." + 
	"</br></br>[Press j to start the questionnaires.]</p>"], 
	show_clickable_nav: true, 
	key_forward: 'j',
	key_backward: 'f',
	button_label_previous: 'press f to go back',
	button_label_next: 'press j to go forward',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

// INSTRUCTIONS 
var taskinstructions= {
	type: jsPsychInstructions, 
	pages: ["<h1>Main experiment</h1></br></br>" + 
	"<p>Great. Thank you for answering the questionnaires. You are now ready to start the main part of the experiment." + 
	"</br></br>In this experiment you will see an icon identifying the person." +
	"</br>On each trial, you will need to decide if you think this person liked you based on your profile or not.</p>" + 
	"<p> <img src='./assets/imgs/naya.jpeg' alt='Naya is so cute' style='width:250px;height:300px;'> <p>" +
	"<ul><li>Press 'YES' if you think they liked you.</li>" +
	"    <li>Press 'NO' if you think they did not like you.</li>" +
	"<p>Once you have chosen one ballooon you can't change your mind on that trial and will move on to the next trial " + 
	"</br>Every few trials we will also ask you to tell us how you feel about yourself that very moment"+ 
	"<p>When answering consider how you feel at this very moment and not in general that day </p>" + 
	"<p>This part is very important for the scientific questions we are trying to answer.</p>" + 
	"<p>Please do your best to truthfully indicate how much (or how little) happiness you experience in that very moment.</p>" + 
	"<p>You will earn at least GBP " + baseearn + ". </br>" + 
	"</br>In addition, each point is worth " + pointtopenny + " pence. " ,
	"</br>Note: pressing the escape key at any point will terminate the experiment." + 
	"</br></br>[Press j to BEGIN THE TASK]</p>"], 
	show_clickable_nav: true, 
	key_forward: 'j',
	key_backward: 'f',
	button_label_previous: 'press f to go back',
	button_label_next: 'press j to go forward',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

var takeabreak = {
	type: jsPsychInstructions, 
	pages: ["<h1>Break</h1><p> You can take a break if you wish.</p></br></br><p> [ Press key 'j' to continue. ] </p>"], 
	key_forward: 'j',
	post_trial_gap: 1000, 
	show_clickable_nav: false, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		saveTaskData(true); 
		saveTaskDataDump();
	},
};

var end_screen = {
	type: jsPsychHtmlButtonResponse,
	timing_post_trial: 0,
	choices: ['End Task'],
	is_html: true,
	stimulus: 'You have finished the task. <br>Thank you for your contribution to science. <br><br><b> PLEASE CLICK END TASK TO SUBMIT THE TASK TO PROLIFIC </b>.<br></br></br>',
	on_start: function(){
		saveEndData();
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
	on_finish: function(){
		window.location = "https://app.prolific.co/submissions/complete?cc=7B779A64"; 
	}, 
}; 

export {full_screen, initialinstructions, taskinstructions, takeabreak, end_screen, dur_max};

