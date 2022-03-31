// Task
// Need to create variable that is going to contain all images


var responses = ['./assets/imgs/yes.jpg ', './assets/imgs/no.jpeg '];

var run_trial = function(person, name, response_correct) {
    var choices = ['f', 'j'];
    var response_correct = choices[0];
    var ask_question = {
        type: jsPsychCategorizeHtml,
        timing_post_trial: 0,
        choices: ['f', 'j'],
        prompt: ['<br> press F to respond YES </br> <br> press J to respond NO </br>'],
        key_answer: 'f',
        correct_text: "<p> <img src=" + responses[0] + "alt='Yes icon' style='width:125px;height:150px;'> <p>",
        incorrect_text: "<p> <img src=" + responses[1] + "alt='No icon' style='width:125px;height:150px;'> <p>",
        feedback_duration: 2000,
        force_correct_button_press: true,
        css_classes: "jspsych-middle",
        //button_html: ['<button class="jspsych-btn">%choice%</button>', '<button class="jspsych-btn">%choice%</button>'],
        stimulus: "<div class=\"row\"> "+ 
        "<div class=\"col-3\"></div> "+ 
        "<div class=\"col-6\"> "+ "<h1>Did this person like you?</h1>"+ 
        "<p> <img src=" + person + "alt='Naya is so cute' style='width:125px;height:150px;'> <p>" + 
        "<h2>" + name +"</h2>" + "</div>"+ 
        "<div class=\"col-3\"></div>"+ 
        "</div>",
        on_start: function(){
            document.querySelector('body').style.backgroundColor = '#cce3f0fb';
            //saveStartData()
        }
    }
    return ask_question;
};


var mood_feedback = { 
    type: jsPsychHtmlSliderResponse,
	stimulus: ["<h1>How do you feel about yourself at the moment?</h1>"],
    labels: ['very bad', 'very good'],
    prompt: ['<p> Please provide response before continuing </p>'],
    button_label: ['Continue'],
    slider_start: 50,
    require_movement: true, //must move slider before clicking?
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#cce3f0fb';
		//saveStartData()
	},
};

export {run_trial, mood_feedback};