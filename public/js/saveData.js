// enable persistence 
firebase.firestore().enablePersistence()
.catch(function(err) {
  if (err.code == 'failed-precondition') {  // multiple tabs open, persistence can only be enabled in one tab at a a time
  } else if (err.code == 'unimplemented') { // the current browser does not support all of the features required to enable persistence
  }
});

// initialize db
var minddata = 'mindata';
var db = firebase.firestore();

// function to save consent 
var saveConsent = function(){
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).set({
    firebaseUID: uid,             // firebase user ID 
    prolificSubID: subjectID,     // prolific subject ID 
    prolificStudyID: studyID,     // prolific study ID 
    consentObtained: 'yes', 
    consentDate: new Date().toISOString().split('T')[0],
    consentTime: new Date().toLocaleTimeString(),
    participantOS: navigator.userAgent
  }); 
};

// function to save initial data
var saveStartData = function(startTime){
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).update({
    taskStartTimePhaser: startTime, 
    expCompleted: 0
  });
  // initialize data-storage collections
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).collection('practice-data').doc('data').set({init: 1});
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).collection('task-data').doc('data').set({init: 1});
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).collection('task-data').doc('data-backup').set({init: 1});
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).collection('post-task-data').doc('data').set({init: 1});
  //db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).collection('quest-data').doc('data').set({init: 1}); 
};

// function to save the practice task data
var savePracTaskData = function(trialN, dataToSave) {
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).collection('practice-data').doc('data').update({[trialN]: dataToSave});
};

// function to save the main task data
var saveTaskData = function(trialN, dataToSave) {
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).collection('task-data').doc('data').update({[trialN]: dataToSave});
};

// function to save the post-task questions data
var savePostTaskData = function(questN, dataToSave) {
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).collection('post-task-data').doc('data').update({[questN]: dataToSave});
};

// // function to save questionnaire data
// var saveQuestData = function () {
//   var dataToSave = {
//     responses : JSON.stringify(jsPsych.data.get().select('responses').values), 
//     trial_type: jsPsych.data.get().select('trial_type').values,
//     rt        : jsPsych.data.get().select('rt').values,
//     question_order: jsPsych.data.get().select('question_order').values,
//   }
//   db.collection('tasks').doc('effort').collection(minddata).doc(uid).collection('quest-data').udoc('data').pdate(dataToSave);
// };

// function to save final data 
var saveEndData = function(endTime, dataBackup){
  // save end time info
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).update({
    taskEndTimePhaser: endTime,
    endTimeDB: new Date().toLocaleTimeString(),
    expCompleted: 1
  });
  // data-dumpn in case of any issues
  db.collection('tasks').doc('rew-eff').collection(minddata).doc(uid).collection('task-data').doc('data-backup').update(dataBackup);
};

// // helper function for parsing per trial data [for Pavlovia deployment]
// var saveTrialDataPav = function(payload = {}) {
//   // Read through input as key/value pairs flat
//   Object.getOwnPropertyNames(payload).forEach((key) => {
//     const value = payload[key];
//     // Add to current trial
//     window.psychoJS.experiment.addData(key, value);
//   });
//   // Add to experiment ahead of next trial
//   window.psychoJS.experiment.nextEntry();
// }

export { saveConsent, saveStartData, savePracTaskData, saveTaskData, savePostTaskData, saveEndData }

