//TEPS

//define likert scale
  var scale = ["very false</br>for me", "mostly false</br>for me", "somewhat false</br>for me", "somewhat true</br>for me", "mostly true</br>for me", "very true</br>for me"];

  var TEPS = {
      type: jsPsychSurveyLikert,
	 	preamble: '<p ></br></br></br>Below is a list of items with an event and an attitude.</br> Please indicate how true you find each item by selecting the option that suits you the best.</p>',  
      questions: [
        {prompt: "<b>When something exciting is coming up in my life, I really look forward to it</b>", name: "TEPS1",  labels: scale, required: true}, 
        {prompt: "<b>The sound of crackling wood in the fireplace is very relaxing</b>", name: "TEPS2", labels: scale, required: true},
        {prompt: "<b>When I think about eating my favourite food, I can almost taste how good it is</b>", name: "TEPS3", labels: scale, required: true}, 
        {prompt: "<b>I love the sound of rain on the windows when I'm lying in my warm bed</b>", name: "TEPS4", labels: scale, required: true}, 
        {prompt: "<b>The smell of freshly cut grass is enjoyable to me</b>", name: "TEPS5", labels: scale, required: true}, 
        {prompt: "<b>I enjoy taking a deep breath of fresh air when I walk outside</b>", name: "TEPS6", labels: scale, required: true}, 
        {prompt: "<b>I don't look forward to things like eating out at restaurants</b>", name: "TEPS7", labels: scale, required: true},   
        {prompt: "<b>A hot cup of coffee or tea on a cold morning is very satisfying to me</b>", name: "TEPS8", labels: scale, required: true}, 
        {prompt: "<b>I love it when people play with my hair</b>", name: "TEPS9", labels: scale, required: true}, 
        {prompt: "<b>I really enjoy the feeling of a good yawn</b>", name: "TEPS10", labels: scale, required: true}, 
        {prompt: "<b>When I'm on my way to an amusement park, I can hardly wait to ride the roller coasters</b>", name: "TEPS11", labels: scale, required: true}, 
        {prompt: "<b>I get so excited the night before a major holiday I can hardly sleep</b>", name: "TEPS12", labels: scale, required: true}, 
        {prompt: "<b>I appreciate the beauty of a fresh snowfall</b>", name: "TEPS13", labels: scale, required: true}, 
        {prompt: "<b>When I think of something tasty, like a chocolate chip cookie, I have to have one</b>", name: "TEPS14", labels: scale, required: true}, 
        {prompt: "<b>Looking forward to a pleasurable experience is in itself pleasurable</b>", name: "TEPS15", labels: scale, required: true}, 
        {prompt: "<b>I look forward to a lot of things in my life</b>", name: "TEPS16", labels: scale, required: true}, 
        {prompt: "<b>When ordering something on the menu, I imagine how good it will taste</b>", name: "TEPS17", labels: scale, required: true}, 
        {prompt: "<b>When I hear about a new movie starring my favourite actor, I can't wait to see it</b>", name: "TEPS18", labels: scale, required: true}, 
     
      ],
    on_finish:function(){
      console.log('save data');
      //saveQuestionnaireData()
    },

  };

  var timeline_TEPS = [];
  timeline_TEPS.push(TEPS);
