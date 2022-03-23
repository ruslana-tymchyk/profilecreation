// -----------------------------------------------------------------------------
// INSTRUCTIONS 

var baseearn = "3.42"; 
var pointtopenny= "0.25"; 
var approxtime = "30"; 
var dur_max = 35000; 

// go into full screen 
console.log('at least im here')
var full_screen = { 
	type: 'fullscreen',
	fullscreen_mode: true
};

// INSTRUCTIONS 
var initialinstructions = {
	type: "instructions", 
	pages: ["<h1>Balloon task</h1></br></br>" + 
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
		document.querySelector('body').style.backgroundColor = '#c8c8c8';
		saveStartData()},
};

// INSTRUCTIONS 
var taskinstructions= {
	type: "instructions", 
	pages: ["<h1>Main experiment</h1></br></br>" + 
	"<p>Great. Thank you for answering the questionnaires. You are now ready to start the main part of the experiment." + 
	"</br></br>You will see two balloons - a red and a blue one. " +
	"</br>On each trial, you will need to choose to 'pop' one of the balloons by pumping it up until it hits the nail at the top.</p>" + 
	"<ul><li>Press 'd' to CHOOSE the LEFT balloon.</li>" +
	"    <li>Press 'f' to CHOOSE the RIGHT ballooon.</li>" +
	"    <li>Press 'j' to PUMP UP the chosen ballooon.</li></ul>" +
	"<p>So on each trial, you first have to choose one of the two balloons (using keys 'd' and 'f'), and then pump it up (using key 'j').</p>" + 
	"<p>Once you have chosen one ballooon you can't change your mind on that trial---you'll have to finish pumping up that ballooon until it pops. " + 
	"</br>You will be able to choose the other ballooon on other trials though.  "+ 
	"<p>Below the balloon, you will see: </p>" + 
	"<ul><li>How many pumps are required to pop the balloon</li>" + 
	"    <li>How many bonus points you get for popping the ballooon.</li></ul>" + 
	"<p>You will earn at least GBP " + baseearn + ". </br>" + 
	"</br>In addition, each point is worth " + pointtopenny + " pence. " ,
	//"<p>Every few trials, we will also ask you to tell us how happy you are in that very moment.</p>" +
	//"<p>This part is very important for the scientific questions we are trying to answer.</p>" + 
	//"<p>Please do your best to truthfully indicate how much (or how little) happiness you experience in that very moment.</p>", 
	"</br>Note: pressing the escape key at any point will terminate the experiment." + 
	"</br></br>[Press j to BEGIN THE TASK]</p>"], 
	show_clickable_nav: true, 
	key_forward: 'j',
	key_backward: 'f',
	button_label_previous: 'press f to go back',
	button_label_next: 'press j to go forward',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#c8c8c8';
		saveStartData()},
};

var takeabreak = {
	type: "instructions", 
	pages: ["<h1>Break</h1><p> You can take a break if you wish.</p></br></br><p> [ Press key 'j' to continue. ] </p>"], 
	key_forward: 'j',
	post_trial_gap: 1000, 
	show_clickable_nav: false, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#c8c8c8';
		saveTaskData(true); 
		saveTaskDataDump();
	},
};

var end_screen = {
	type: 'html-button-response',
	timing_post_trial: 0,
	choices: ['End Task'],
	is_html: true,
	stimulus: 'You have finished the task. <br>Thank you for your contribution to science. <br><br><b> PLEASE CLICK END TASK TO SUBMIT THE TASK TO PROLIFIC </b>.<br></br></br>',
	on_start: function(){
		saveEndData();
		document.querySelector('body').style.backgroundColor = '#c8c8c8';
	},
	on_finish: function(){
		window.location = "https://app.prolific.co/submissions/complete?cc=7B779A64"; 
	}, 
}; 

