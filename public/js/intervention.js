// -----------------------------------------------------------------------------
// INTERVENTION
var intervention1 = {
	type: jsPsychSurveyText, 
	questions: [{prompt: "<p>If possible, find somewhere quiet and take a seat. Get yourself as comfortable </p>" +
    "<p> as possible. Now, close your eyes and focus on your breath. Let&apos;s check in with the things </p>" +
    "<p> going on in your mind and body at this moment. <br> There&apos;s no need to try to change anything... </p>" + 
    "<p> simply notice what is there, in your mind, for you in this moment. </p>" +
    "<p> </br><br> Take a comfortable breath in and count how long it takes you to do so. Most </p>" +
    "<p> people reach a count of 3, 4 or 5. Keep in mind that the number isn&apos;t important, so long </p>" +
    "<p> as it is comfortable for you. Whatever number you reached on your inhale, match that </p>" +
    "<p> number when you exhale. </br><br> While you do this, your mind may wander and </p>" +
    "<p> that&apos;s okay. It&apos;s what minds like to do. Every time you notice that your mind has moved </p>" +
    "<p> away from the breath, acknowledge where it has gone to. Is there a thought or feeling </p>" +
    "<p> you are having? And when you&apos;re ready re-focus on counting your breath. </br> </p>"}], 
	preamble: "<h1>Intervention</h1>", 
	button_label: 'Next',
    button_html: '<button class="jspsych-btn">%choice%</button>',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

export {intervention1};