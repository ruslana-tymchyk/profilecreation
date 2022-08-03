// -----------------------------------------------------------------------------
// INTERVENTION
import { saveViewTime, saveQuestData } from "./saveData.js";

var intervention = {
	type: jsPsychInstructions,
	allow_backward: true,
	show_clickable_nav: true,
	allow_keys: true,
	button_label_previous: "back",
	button_label_next: "next",
	pages: [ /////////////////////page one////////////////////////
	        "<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" +'<p>Before you proceed with the rest of the task - we will ask you to read some material.<p>'
				+'<p> Please make sure you pay attention and answer the questions provided. <p>' +  "<div class=\"row\">",
			/////////////////////page two////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + "<p> Please take your time to read each sentence <b> slowly and carefully in your mind </b>. After you read each part, <b> pause for a little </b> to do what has been suggested. </p> <br></br>",
			/////////////////////page three////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" 
			+ "If possible, find somewhere quiet and take a seat. Get yourself as comfortable as possible. " 
			+  "<div class=\"row\">",
			/////////////////////page four////////////////////////
			"<div class=\"row-top\"></div> "+ 
            "<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" 
			+ "Now, focus on your breath." 
			+  "<div class=\"row\">",
            /////////////////////page five////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" 
			+ "Let&apos;s check in with the things " +
			"going on in your mind and body at this moment. There&apos;s no need to try to change anything... " + 
			"simply notice what is there, in your mind, for you in this moment. " 
			+  "<div class=\"row\">",
			/////////////////////page six////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" 
			+ "Take a comfortable breath in and count how long it takes you to do so." 
			+  "<div class=\"row\">",
            /////////////////////page seven////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" 
			+ "Keep in mind that the number isn&apos;t important, so long " +
			"as it is comfortable for you. Whatever number you reached on your inhale, match that " +
			"number when you exhale." 
			+  "<div class=\"row\">",
            /////////////////////page eight////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" 
			+ "Every time you notice that your mind has moved " +
			"away from the breath, acknowledge where it has gone to. Is there a thought or feeling " +
			"you are having? And when you&apos;re ready re-focus on counting your breath. </br>" + 
			"<br></br> Now, spend one or two minutes with your breath." ////NEXT PAGE
			+  "<div class=\"row\">",
			/////////////////////page nine////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + "We will now ask you to think about memories of difficult situations. " +
			"Could you pick one out now?" +
			"<div class=\"row\">",
			/////////////////////page ten////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p> Is there a memory from the past week which is particularly difficult or uncomfortable to remember? " +
			"If you can’t, maybe think back a little further. " +
			"What was the last difficult or negative situation you found yourself in?</p>"
			+  "<div class=\"row\">",
			/////////////////////page eleven////////////////////////
			"<div class=\"row-top\"></div> "+ 	
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p>Take a moment to talk through that memory to yourself. " +
			"Try to create as much detail as possible, and picture yourself there again in that moment. " +
			"You might even notice the thoughts and feelings from that time coming back to you as you do this. " +
			"That’s okay - just notice what these sensations are and try to recall that moment. "
			+  "<div class=\"row\">",
			/////////////////////page twelve////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"How did you feel? </p>" +
			"<p>How uncomfortable was it? What thoughts came with the situation? Were you able to manage your thoughts and feelings in that difficult situation? " +
			"Focus on the situation, with yourself at the center. </p>" + 
			 "<div class=\"row\">",
			/////////////////////page thirteen////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + "<b> Continue pausing after each sentence to reflect and answer the questions in your mind. </b>" + 
			"<div class=\"row\">",
           /////////////////////page fourteen////////////////////////
		   "<div class=\"row-top\"></div> "+ 
		   "<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + "<p> Now, as you recall the event, try to shift your perspective. Try to see it from the point of view of a non-involved observer - " +
			"as if you were bystander who just happened to be passing by at the time. Try to change your point of view on this situation and see it from this new neutral place. </p>" +
			"<div class=\"row\">",
			/////////////////////page fifteen////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p> Notice it for what it is, a situation that happened, that is observable by people outside the situation. " +
			///NEW
			"When you take a step back and see the situation as if you were a neutral observer, maybe you can notice new features that weren’t so obvious before? " +
			//NEW
			"What features of the situation would this person see? Take a moment and describe the situation from this neutral perspective. </p>" +
			"<div class=\"row\">",
			/////////////////////page sixteen////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"Can you see yourself, and how you were reacting or behaving in that situation? " +
			////NEW
			"Can you see any other individuals who were involved? How are they behaving? " +
			///NEW
			" Do you notice anything different about your, or their behavior, as you look at the situation from this place? " +
            "<div class=\"row\">",
            /////////////////////page seventeen////////////////////////
			"<div class=\"row-top\"></div> "+ 
            "<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"Does it feel different as you look at it through the eyes of an observer? " +
			"Can you see anything different from this perspective? " + 
			//NEW
			"How does seeing it from this neutral perspective affect how you feel about it now?" +
			"Perhaps you feel further away from the situation than you did before? " + "<div class=\"row\">",
			/////////////////////page eighteen////////////////////////
			"<div class=\"row-top\"></div> "+ 
            "<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p> How does this difficult moment feel as you look at it from a new perspective? </p>" +
			///NEW
			"<p> Can you see how you can notice what happened and think about it, but consider it from another place. This distant and neutral observer is always with you, and is a part of you. " +
			"We just don’t always notice it because we tend to remember things from as if we are right there, living them and seeing through our own eyes. </p>" +
			"<div class=\"row\">",
            /////////////////////page nineteen////////////////////////
			"<div class=\"row-top\"></div> "+ 
            "<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p> You can always take a step back and see things from a new perspective: as a neutral observer. You may find over the coming weeks, and after, that you experience situations that are difficult or uncomfortable. " +
			"Experiencing difficult things is a key part of the human experience. " +
			"Perhaps next time this happens, you can imagine yourself walking past the situation, and noticing it as a neutral observer. </p>" +
			"<div class=\"row\">",
			/////////////////////page twenty////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p> Now allow your awareness to come back to your body. Notice how each part feels, starting in your feet, up into your legs, to your hips, up into your torso and then your arms, and then your face. " +
			"Notice your body as a whole, gently holding your experience in each moment. Notice the sensations that come to you as you come back in touch with your body. </p>" +
            "<div class=\"row\">",
			/////////////////////page twentyone////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p> Now, open up your awareness to your surroundings. Allow yourself to step back into the world, and gently take three deep breaths, as you reconnect to the rest of your day. </p>" + 
			"<div class=\"row\">"
			],
	on_start: function() {
	  document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	},
	on_finish: function() {
		var view = this.type.jsPsych.data.getLastTrialData().trials[0].view_history;
		var rt = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
		saveViewTime(view, rt, 'intervention')
	}
  };


var comprehension_intervention = {
	preamble: '<p ></br></br><b>Comprehension Quiz</b></br></br>Each question asks you about some aspect of the material you have just read. </br></br> Please provide ONE response for each.</p>',  
	type: jsPsychSurveyMultiChoice,
	questions: [
		{
		  prompt: "This task involved:", 
		  name: 'TaskActivity', 
		  options: ['Breathing in and out', 'Tapping your fingers to a count', 'Moving your eyes side to side'],
		  required: true
		}, 
		{
		  prompt: "You were asked to think about:", 
		  name: 'ThinkAbout', 
		  options: ['Memory of a difficult event', 'Memory of a happy moment in life', 'Memory of the time with friends'], 
		  required: true
		},
		{
			prompt: "You were asked to:", 
			name: 'AskedTo', 
			options: ['Look at the situation from a different perspective', ' Get distracted from a memory', 'Ignore the images of the memory '], 
			required: true
		  }
	  ],
  on_finish:function(){
	// get response and RT data
	var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
	var respRT = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
	saveQuestData("condition_comprehension", respData, respRT);
  },

};

var timeline_comprehension_intervention = [];
timeline_comprehension_intervention.push(comprehension_intervention);


export {intervention, timeline_comprehension_intervention};