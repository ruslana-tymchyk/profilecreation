// -----------------------------------------------------------------------------
// INTERVENTION

var intervention0 = {
	type: jsPsychHtmlButtonResponse,
	timing_post_trial: 0,
	choices: ['Start'],
	is_html: true,
	stimulus: "<div class=\"row\"> "+ 
	"<div class=\"col-3\"></div> "+ 
	"<div class=\"col-6\">" +'<p>Before you proceed with the rest of the task - we will ask you to read some material.<p>'
     +'<p> Please make sure you pay attention and answer the questions provided. <p>' +  "<div class=\"row\">",
	on_start: function(){
		//saveEndData();
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
};  
var intervention1 = {
	type: jsPsychSurveyText, 
	questions: [{prompt: 
    "<div class=\"row\"> "+ 
	"<div class=\"col-3\"></div> "+ 
	"<div class=\"col-6\">" + "If possible, find somewhere quiet and take a seat. Get yourself as comfortable " +
    "as possible. Now, close your eyes and focus on your breath. Let&apos;s check in with the things " +
    "going on in your mind and body at this moment. There&apos;s no need to try to change anything... " + 
    "simply notice what is there, in your mind, for you in this moment. " +
    "</br><br> Take a comfortable breath in and count how long it takes you to do so. Most " +
    "people reach a count of 3, 4 or 5. Keep in mind that the number isn&apos;t important, so long " +
    "as it is comfortable for you. Whatever number you reached on your inhale, match that " +
    "number when you exhale. </br><br> While you do this, your mind may wander and" +
    "that&apos;s okay. It&apos;s what minds like to do. Every time you notice that your mind has moved " +
    "away from the breath, acknowledge where it has gone to. Is there a thought or feeling " +
    "you are having? And when you&apos;re ready re-focus on counting your breath." +  "<div class=\"row\">"}], 
	preamble: "<h1>Intervention</h1>", 
	button_label: 'Next',
    button_html: '<button class="jspsych-btn">%choice%</button>',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

var intervention2 = {
	type: jsPsychSurveyText, 
	questions: [{prompt: "<div class=\"row\"> "+ 
	"<div class=\"col-3\"></div> "+ 
	"<div class=\"col-6\">" + "<p>This week, we’ve been asking you to think about memories of difficult situations.</p>" +
    "<p> You’ve had some time to consider some of these memories. Could you pick one out now? </p>" +
    "<p> Is there a memory from the past week which is particularly difficult or uncomfortable to remember? [Pause]. </p>" +
    "<p> If you can’t, maybe think back a little further. </p>" +
    "<p>What was the last difficult or negative situation you found yourself in? [Pause] </p>" +
    "<p>Take a moment to talk through that memory to yourself. </p>" +
    "<p>Try to create as much detail as possible, and picture yourself there again in that moment. </p>" +
    "<p> You might even notice the thoughts and feelings from that time coming back to you as you do this. </p>" +
    "<p> That’s okay - just notice what these sensations are and try to recall that moment. How did you feel? </p>" +
    "<p>How uncomfortable was it? What thoughts came with the situation? Were you able to manage your thoughts and feelings in that difficult situation? </p>" +
    "<p> Did the situation stay with you for the rest of your day? Focus on the situation, with yourself at the center. </p>" +  "<div class=\"row\">"
        }], 
	preamble: "<h1>Intervention</h1>", 
	button_label: 'Next',
    button_html: '<button class="jspsych-btn">%choice%</button>',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

var intervention3 = {
	type: jsPsychSurveyText, 
	questions: [{prompt: "<div class=\"row\"> "+ 
	"<div class=\"col-3\"></div> "+ 
	"<div class=\"col-6\">" + "<p> Now, as you recall the event, try to shift your perspective. Try to see it from the point of view of a non-involved observer - </p>" +
    "<p> as if you were bystander who just happened to be passing by at the time. Try to change your point of view on this situation and see it from this new neutral place. </p>" +
    "<p> Notice it for what it is, a situation that happened, that is observable by people outside the situation. </p>" +
    "<p> When you take a step back and see the situation as if you were a neutral observer, maybe you can notice new features that weren’t so obvious before? </p>" +
    "<p> What features of the situation would this person see? Take a moment and describe the situation from this neutral perspective. [Pause] </p>" +
    "<p> Can you see yourself, and how you were reacting or behaving in that situation? Can you see any other individuals who were involved? How are they behaving? </p>" +
    "<p> Do you notice anything different about your, or their behavior, as you look at the situation from this place? [pause] </p>" +
    "<p> Does it feel different as you look at it through the eyes of an observer? </p>" +
    "<p> Can you see anything different from this perspective? How does seeing it from this neutral perspective affect how you feel about it now? </p>" +
    "<p> Perhaps you feel further away from the situation than you did before? </p>" +  "<div class=\"row\">"
        }], 
	preamble: "<h1>Intervention</h1>", 
	button_label: 'Next',
    button_html: '<button class="jspsych-btn">%choice%</button>',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

var intervention4 = {
	type: jsPsychSurveyText, 
	questions: [{prompt: "<div class=\"row\"> "+ 
	"<div class=\"col-3\"></div> "+ 
	"<div class=\"col-6\">" + "<p> How does this difficult moment feel as you look at it from a new perspective? </p>" +
    "<p> Can you see how you can notice what happened and think about it, but consider it from another place. This distant and neutral observer is always with you, and is a part of you. </p>" +
    "<p> We just don’t always notice it because we tend to remember things from as if we are right there, living them and seeing through our own eyes. </p>" +
    "<p> You can always take a step back and see things from a new perspective: as a neutral observer. You may find over the coming weeks, and after, that you experience situations that are difficult or uncomfortable. </p>" +
    "<p> Experiencing difficult things is a key part of the human experience. </p>" +
    "<p> Perhaps next time this happens, you can imagine yourself walking past the situation, and noticing it as a neutral observer. </p>" +
    "<p> Now allow your awareness to come back to your body. Notice how each part feels, starting in your feet, up into your legs, to your hips, up into your torso and then your arms, and then your face. </p>" +
    "<p> Notice your body as a whole, gently holding your experience in each moment. Notice the sensations that come to you as you come back in touch with your body. </p>" +
    "<p> Now, open up your awareness to your surroundings. Allow yourself to step back into the world, and gently take three deep breaths, as you reconnect to the rest of your day.</p>" +  "<div class=\"row\">"
        }], 
	preamble: "<h1>Intervention</h1>", 
	button_label: 'Next',
    button_html: '<button class="jspsych-btn">%choice%</button>',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

export {intervention0, intervention1, intervention2, intervention3, intervention4};