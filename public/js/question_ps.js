var options = ["15%", "30%", "70%", "85%"];

var ps = {
  type: jsPsychSurveyLikert,
   preamble: ' <img src="./assets/imgs/blue.png"></img> <p max-width="500px"></br></br></br>What percentage of likes does this image correspond to?</p>',  
  questions: [
    {prompt: "<b>Choose one option</b>",         name: "PHQ9_1", labels: options, required:true}
    
  ],
  on_finish:function(){
    console.log('save data');
    //saveQuestionnaireData()
  },
};

var timeline_ps = [];
timeline_ps.push(ps);

export {timeline_ps};