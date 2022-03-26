// Task
// Need to create variable that is going to contain all images
var image = './assets/imgs/naya.jpeg ';
var ask_question = {
    type: 'html-button-response',
	timing_post_trial: 0,
	choices: ['Yes', 'No'],
	is_html: true,
	stimulus: "<h1>Did this person like you?</h1>"+ 
    "<p> <img src=" + image + "alt='Naya is so cute' style='width:125px;height:150px;'> <p>" + 
    "<p>Lily?</p>",
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#c8c8c8';
        var response = true;
		//saveStartData()
    }
};
// here image
//var yes_response = './assets/imgs/yes.png ';
//var give_response = { 
//    type: "html-button-response",
//	pages: ["<h1>Did this person like you?</h1>"+ 
 //   "<p> <img src=" + yes_response + "alt='Yes icon' style='width:125px;height:150px;'> <p>"],
//	on_start: function(){
//		document.querySelector('body').style.backgroundColor = '#c8c8c8';
//		//saveStartData()
//	},
//};

var mood_feedback = { 
    type: "html-slider-response",
	stimulus: ["<h1>How do you feel about yourself at the moment?</h1>"],
    labels: ['very bad', 'very good'],
    button_label: ['Continue'],
    slider_start: 50,
    require_movement: true, //must move slider before clicking?
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#c8c8c8';
		//saveStartData()
	},
};

export {ask_question, mood_feedback};