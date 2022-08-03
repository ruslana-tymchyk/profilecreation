// -----------------------------------------------------------------------------
// INTERVENTION

import { saveViewTime, saveQuestData } from "./saveData.js";

var control = {
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
			"<div class=\"col-6\">" + "<b> Please take your time to read each sentence slowly and carefully in your mind. After you read each paragraph, pause for a minute to imagine the scene. </b> <br></br>",
			/////////////////////page three////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" +
			"<p>The island of Singapore, though not grand or imposing, still has its peculiar beauties. It is a park traversed by pleasant roads." +
			"A well-appointed carriage took Phileas Fogg and Aouda through palm-groves and clove-plantations, various tropical plants perfumed the air, while troops of monkeys gambolled in the trees;" +
			" the woods, also, were not innocent of tigers, and to those travellers who were astonished to learn why these terrible animals were not destroyed in such a small island, the reply would be that they swam across from the mainland.</p>" +
			"<div class=\"row\">",
			/////////////////////page four////////////////////////
			"<div class=\"row-top\"></div> "+ 
            "<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" +
			"After a couple of hours' drive, Mr. Fogg and Aouda returned to the town and went on board ship again, all the time followed by the detective. Passe-partout was awaiting them on deck; the brave fellow had purchased some beautiful mangoes," +
			"and was enabled to offer them to Mrs. Aouda, who received them gracefully.</p>" +
			"<div class=\"row\">",
            /////////////////////page five////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" +
			"<p>At eleven o'clock the Rangoon resumed her voyage and a few hours later Malacca had sunk below the horizon. They had about thirteen hundred miles to traverse to reach Hong Kong, and Phileas Fogg hoped to get there in six days," +
			"so as to be able to catch the steamer for Yokohama on the 6th of November.</p> " +
			"<div class=\"row\">",
			/////////////////////page six////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" 
			+ "<p>The weather, which had hitherto been very fine, changed with the last quarter of the moon. There was a high wind, fortunately favourable, and a very heavy sea. </p>" + 
			 "<div class=\"row\">",
            /////////////////////page seven////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" 
			+ "The captain set the sails at every opportunity, and the Rangoon, under these circumstances, made rapid progress. " +
			 "But in very rough weather extra precautions were necessary, and steam had to be reduced. " + 
			 "This delay did not appear to affect Phileas Fogg in the least, but it worried Passe-partout tremendously." +
			  "He swore at the captain, the engineers, and the company, and consigned all concerned to a warmer climate than Hong Kong." +
			  " Perhaps the thought of the gas that was still burning in his room in London may have had something to do with his impatience." + 
			 "<div class=\"row\">",
            /////////////////////page eight////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" 
			+ "<p>'You seem in a great hurry to reach Hong Kong,' said Fix to him one day. </p>"+
			"<p>'I am,' replied Passe-partout. 'You think Mr. Fogg is anxious to catch the steamer for Yokohama?' </p>"+
			"<p>'Very anxious indeed.' </p>"+
			"<p>'You believe in this journey round the world, then?' </p>"+
			"<p>'Most decidedly; dont you?' </p>"+
			"<p>'Not a bit of it.' </p>"+
			"<p>'You are a sly one,' replied Passe-partout with a wink. </p>"+
			"<div class=\"row\">",
			/////////////////////page nine////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p>This remark rather disturbed Fix, without his knowing why. " +
			" Could the Frenchman have discovered who he was? He did not know what to do. " +
			" But how could Passe-partout have found out his real object? " +
			" And yet in speaking as he did, Passe-partout must certainly have had some ulterior motive. </p>" + 
			 "<div class=\"row\">",
			/////////////////////page ten////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p> On a subsequent occasion the valet went still further, and said, half maliciously: </p>"+
			"<p> 'Well, Mr. Fix, shall we be so unfortunate as to lose the pleasure of your society at Hong Kong?' </p>"+
			"<p>'Well,' replied Fix, somewhat embarrassed, 'I am not quite sure. You see—' </p>"+
			"<p>'Ah,' said Passe-partout, 'if you would only come with us I should be </p>"+
			"<p>so delighted. An agent of the company cannot stop halfway, you know. </p>"+
			"<p>You were only going to Bombay, and here you are almost in China. </p>"+
			"<p>America is not far off, and from America to Europe is but a step.' </p>"+
			"<div class=\"row\">",
			/////////////////////page eleven////////////////////////
			"<div class=\"row-top\"></div> "+ 	
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"<p>Fix looked very hard at his companion, whose face was perfectly innocent, and laughed too. But Passe-partout was in the humour for quizzing, and asked him if he made much by his present business. </p>"+
			"<p>'Yes and no,' replied Fix, without flinching. 'We have our good and bad times, but of course I do not travel at my own expense.' </p>"+
			"<p>'Of that I am quite sure,' said Passe-partout, laughing. </p>"
			+  "<div class=\"row\">",
			/////////////////////page twelve////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"How did you feel? </p>" +
			"Fix then returned to his cabin, where he remained deep in thought. " +
			" Somehow or another the Frenchman had found him out, but had he told his master? Was he his accomplice or not? And must the whole thing be given up? " +
			" The detective passed many hours considering the matter in all its bearings, and was as undecided at the end as he had been at the beginning. "+
			" But he retained his presence of mind, and resolved at length to deal frankly with Passe-partout, if he could not arrest Fogg at Hong Kong." + 
			"Either the servant was an accomplice, knowing everything, and he would fail; or the servant knew nothing, and then his interest would be to quit the service of the criminal. " + 
			 "<div class=\"row\">",
			/////////////////////page thirteen////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + " Such was the state of affairs, and meantime Phileas Fogg appeared perfectly indifferent to everything. " +
			"But nevertheless there was a disturbing cause not far off, which might be able to produce an influence on his heart; but no, Mrs. Aouda's charms had no effect, to the great surprise of Passe-partout. </p>"+
			"<div class=\"row\">",
           /////////////////////page fourteen////////////////////////
		   "<div class=\"row-top\"></div> "+ 
		   "<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + "Yes, it certainly was a matter of astonishment to that worthy man, who every day read the lady's gratitude to his master in Mrs. Aouda's eyes." +
			"Phileas Fogg must certainly be heartless; brave he was no doubt, but sympathetic, no. There was no proof that the incidents of the journey had wakened any feelings in his breast, while Passe-partout was continually indulging in reverie. "+
			"<div class=\"row\">",
			/////////////////////page fifteen////////////////////////
			"<div class=\"row-top\"></div> "+ 
			"<div class=\"row\"> "+ 
			"<div class=\"col-3\"></div> "+ 
			"<div class=\"col-6\">" + 
			"One day he was contemplating the working of the machinery, when a pitch of the vessel threw the screw out of the water." +
			 "The steam roared through the valves, and Passe-partout exclaimed, indignantly: 'The escape valves are not sufficiently charged! We make no way!" + 
			 "That is English all over. Ah! if this were only an American ship—we might blow up, perhaps, but at any rate we should go quicker meantime.' " +
			"<div class=\"row\">"
			],
	on_start: function() {
	  document.querySelector('body').style.backgroundColor = '#cce3f0fb';
	}
	,
	on_finish: function(){
		console.log('here is the data: ' + JSON.stringify(this.type.jsPsych.data.getLastTrialData().trials[0]));
		var view = this.type.jsPsych.data.get().view_history;
		var rt = this.type.jsPsych.data.get().rt;
		saveViewTime(view, rt, 'control')
	}
  };


var comprehension_control = {
	preamble: '<p ></br></br><b>Comprehension Quiz</b></br></br>Each question asks you about some aspect of the material you have just read. </br></br> Please provide ONE response for each.</p>',  
	type: jsPsychSurveyMultiChoice,
	questions: [
		{
		  prompt: "Where did the heroes of the story travel to?", 
		  name: 'TaskActivity', 
		  options: ['Singapore', 'Seichel', 'Japan'],
		  required: true
		}, 
		{
		  prompt: "What was the name of the ship?", 
		  name: 'ThinkAbout', 
		  options: ['Repasse', 'Rangoon', 'Reform'], 
		  required: true
		},
		{
			prompt: "What is Fix's occupation?", 
			name: 'AskedTo', 
			options: ['A captain', 'A detective', 'Marine labourer'], 
			required: true
		  }
	  ],
  on_finish:function(){
	var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
	var respRT = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
	saveQuestData("condition_comprehension", respData, respRT);
  },

};

var timeline_comprehension_control = [];
timeline_comprehension_control.push(comprehension_control);



export {control, timeline_comprehension_control};