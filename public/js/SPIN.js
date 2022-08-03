//SPIN
import { saveQuestData } from "./saveData.js";

//define likert scale
  var scale = ["not at all", "a little bit", "somewhat", "very much", "extremely"];

  var SPIN = {
      type: jsPsychSurveyLikert,
	 	preamble: '<p ></br></br>Please read each statement and indicate how much each statement applied to you over the past week.</p>',  
      questions: [
        {prompt: "<b>Fear of embarrassment causes me to avoid doing things or speaking to people</b>", name: "SPIN1",  labels: scale, required: true}, 
        {prompt: "<b>I avoid activities in which I am the center of attention</b>", name: "SPIN2", labels: scale, required: true},
        {prompt: "<b>Being embarrassed or looking stupid are among my worst fears</b>", name: "SPIN3", labels: scale, required: true}
      ],
    on_finish:function(){
      var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
      var respRT = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
      saveQuestData("SPIN", respData, respRT);
    },

  };

  var timeline_SPIN = [];
  timeline_SPIN.push(SPIN);

  export {timeline_SPIN};
