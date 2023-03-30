//////////////////////////// DEMOGS ///////////////////////
//age in years, gender identity, income bracket, employment status, housing status

import { saveQuestData } from "./saveData.js";

var demogs = {
    type: jsPsychSurvey,
    pages: [
      [
        {
          type: 'html',
          prompt: "<b>Finally, we would like to ask you some questions about yourself "+
                  "and your personal circumstances.</b>",
        },
        {
          type: 'text',
          prompt: "How old are you (in years)?", 
          name: 'demogs_age', 
          textbox_columns: 5,
          required: true,
          validation: "^[18-100]$"  // doesn't seem to work currently
        },
        {
          type: 'drop-down',
          prompt: "What is your gender identity?", 
          name: 'demogs_gender', 
          options: ['man', 'woman', 'non-binary', 'other', 'prefer not to say'], 
          required: true
        }, 
        {
          type: 'drop-down',
          prompt: "Which of the options below best describes your current employment status?", 
          name: 'demogs_employment', 
          options: ['employed (including full-time and part-time employment)', 
                    'unemployed (job seekers and those unemployed owing to ill health)',
                    'not seeking employment (stay-at-home parents, students, and retirees)'
                    ], 
          required: true
        },
        {
          type: 'multi-select',
          prompt: "Do you consider yourself to have a disability or form of neurodivergence that affects "+
                  "your ability to do any of the below? Please select all that apply",
          name: 'demogs_disability',
          options: ['concentrate for extended periods of time',
                    'perform physically effortful activites',
                    'read, write, or do maths',
                    'deal with people you do not know',
                    'other form of impact not listed above',
                    'none of the above',
                    'prefer not to say'],
          required: true
        },
      ]
    ],
    show_question_numbers: 'onPage',
    button_label_finish: 'submit',
    on_start: function(){
      document.querySelector('body').style.backgroundColor = '#cce3f0fb';
    },
    on_finish: function() {
        console.log('finish');
      // get response and RT data
      var respData = this.type.jsPsych.data.getLastTrialData().trials[0].response;
      var respRT = this.type.jsPsych.data.getLastTrialData().trials[0].rt;
      saveQuestData("demogs", respData, respRT);
      // all self-report data backup
    }
  };

 
export {demogs};