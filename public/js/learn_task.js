import {p_image_orders, female_names} from './randomisation.js';
import {saveTaskData, saveMoodData} from './saveData.js' ;

var responses = ['yes.png ', 'no.png '];
var image_path = './assets/imgs/'

//itterate through the same order of 12 images until they get it right -> IMPROVE
var image_orders = [ 'yellow.png','blue.png', 'pink.png', 'orange.png'];
var dict = {
    'blue.png' : '1',
    'orange.png' : '2',
    'pink.png' : '3',
    'yellow.png' : '4'
}

var likedislike = {
  'blue.png' : "<p> They liked <b>most</b> profiles they rated </p>",
  'orange.png' : '',
  'pink.png' : '',
  'yellow.png' : "<p> They liked <b>least</b> profiles they rated </p>"
}

    //Which category does this person belong to 
    var gender = ['woman_', 'man_'];
     //generate 1 or 0
    //itterate instead of entering single variable to get different combinations of images

var nCorrect = 0;
var nWrong = 0;

function generate_timeline(gender, dict, image_orders,likedislike){
  var tm = []
  for (var i =0; i< 4 ;i++) {
    var gender_choice = Math.round(Math.random());
    var one_set = {
      key_answer: dict[image_orders[i]],
      stimulus: "<div class=\"row\"> "+ 
      "<h1>What is the ranking of this person?</h1>"+ 
      "<p> <img src= " + image_path + gender[gender_choice] + image_orders[i] + 
      " alt='Person Icon' style='width:200px;height:200px;'> <p>" ,
      correct_text: "<br> <b> Correct. </b> </br> " + 
                    "<p> This person is ranked  <b>" + dict[image_orders[i]] + "</b>"  +
                    likedislike[image_orders[i]]
    }
  tm.push(one_set)
  }
  return tm
}
var tm = generate_timeline(gender,dict, image_orders,likedislike);
console.log(tm)

var learn_colours = {
        type: jsPsychCategorizeHtml,
        timing_post_trial: 0,
        prompt: [ "<br> Press number that corresponds to person category, where <br/>" + 
        "<br> 1 corresponds to profiles who liked most people and <br/>" + 
        "<br> 4 to profiles who liked fewest people </br>"],
        timeline: tm,
        //correct_text:  "<br> <b> Correct. </b> </br>",
        //"<p> <img src=" + image_path + responses[0] + "alt='Yes icon' style='width:200px;height:200px;'> <p>" + "<br> <b> They liked your profile. </b> </br>",
        incorrect_text: "<br> <b> Incorrect. </b> </br>",
        //"<p> <img src=" + image_path + responses[1] + "alt='No icon' style='width:200px;height:200px;'> <p>" + "<br> <b> They did not like your profile. </b> </br>",
        feedback_duration: 3000,
        css_classes: "jspsych-middle",
         on_start: function(){
            document.querySelector('body').style.backgroundColor = '#cce3f0fb';
            //saveStartData()
        },
        on_finish: function(){
           // compare answers to correct answers
           } 
          }
//      ]
// };

var continueText= {
  type: jsPsychInstructions,
  allow_backward: false,
  show_clickable_nav: true,
  allow_keys: true,
  //button_label_previous: "back",
  button_label_next: "continue",
  pages: ["<div class=\"row\"> "+ 
" 	<div class=\"col-3\"></div> "+ 
" 	<div class=\"col-6\"> "+ 
"<h2>Main experiment</h2>" + 
"</br>You have correctly completed the quiz and are ready to start the main experiment! " +
"Below is the reminder of the task instructions." +
"<p><b> On each trial we will ask you to try and predict if this person liked you based on your profile. To make a prediction: </b> </p>" +
"<ul><li>Press 'YES' if you think they liked you.</li>" +
"    <li>Press 'NO' if you think they did not like you.</li> </ul>" +
"<p> The only information we will give you about each person is: </p>" +
"<ul>" +
"<li> Their relative ranking represented by the number of stars and colour </li>" +
"<li> Their gender represented by icon </li>" +
"<li> Their nickname </li>" +
"</ul>" +
"Every few trials we will also ask you to tell us how you feel about yourself that very moment. "+ 
"When answering consider <b>how you feel at this very moment</b> and not in general that day. " + 
"This part is very important for the scientific questions we are trying to answer. " + 
"Please do your best to truthfully indicate how much (or how little) happiness you experience in that very moment. " +
"</br><b>Note: pressing the escape key at any point will terminate the experiment. </b>" + 
"</br></br>[Press Continue to BEGIN THE TASK]</p>" 
          ]
};

//If nodes/loops

  var loop_node_learn = {
    timeline: [learn_colours],
    loop_function: function(data) {
      console.log(data)
      for (var i =0; i< data.trials.length ;i++) {
        if (data.trials[i].correct == true) {
          nCorrect++;
        }
     }
      if (nCorrect >= 4) {
        return false;
    } else {
      return true;
    }
    }
  };
  


  export { loop_node_learn};