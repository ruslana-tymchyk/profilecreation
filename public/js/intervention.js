// -----------------------------------------------------------------------------
// INTERVENTION
var page1 = {
	type: "survey-text", 
	questions: [{prompt: "<b>Read some decentering material and tell us what you think</b>"}], 
	preamble: "Intervention", 
	button_label: 'Next',
	post_trial_gap: 1000, 
	on_start: function(){
		document.querySelector('body').style.backgroundColor = '#c8c8c8';
		//saveStartData()
	},
};

export {page1};