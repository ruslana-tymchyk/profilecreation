// Task

var responses = ['./assets/imgs/yes.png ', './assets/imgs/no.png '];

var run_trial = function(person, name, response_correct) {
    //pass the correct response into this
    var choices = ['f', 'j'];
    var response = choices[response_correct];
    console.log('doing something here');
    console.log(response);
    var ask_question = {
        type: jsPsychCategorizeHtml,
        timing_post_trial: 0,
        choices: ['f', 'j'],
        //prompt: ['<br> press F to respond YES </br> <br> press J to respond NO </br>'],
        key_answer: response,
        correct_text: "<p> <img src=" + responses[0] + "alt='Yes icon' style='width:200px;height:200px;'> <p>",
        incorrect_text: "<p> <img src=" + responses[1] + "alt='No icon' style='width:200px;height:200px;'> <p>",
        feedback_duration: 2000,
        css_classes: "jspsych-middle",
        stimulus: "<div class=\"row\"> "+ 
        "<h1>Did this person like you?</h1>"+ 
        "<p> <img src=" + person + "alt='Person Icon' style='width:200px;height:200px;'> <p>" + 
        "<h2>" + name +"</h2>" + "<div class=\"row\">" + "<br> press F to respond YES </br> <br> press J to respond NO </br>" ,
        on_start: function(){
            document.querySelector('body').style.backgroundColor = '#cce3f0fb';
            //saveStartData()
        }
    }
    return ask_question;
};
//create a variable that saves previous slider response and uses it as the starting value for the next trial
//increases autocorrelation of signal & reduces noise
var previous_answer = 37;
var mood_feedback = { 
    type: jsPsychHtmlSliderResponse,
	stimulus: ["<h1>How do you feel about yourself at the moment?</h1>"],
    labels: ['very bad', 'very good'],
    prompt: ['<p> Please provide response before continuing </p>'],
    button_label: ['Continue'],
    slider_width: 150,
    slider_start: previous_answer, 
    require_movement: true, //must move slider before clicking
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

export {run_trial, mood_feedback};