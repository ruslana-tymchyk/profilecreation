//use version number to separate itterations of experiment
//the only commands - set or update -> need to set it first, then update
//collecton -> document -> collection ->document
//update and set documents but not collections
//two collections - one for task and one for questionnaires 
//by setting you create a collection in the first place - then put whatever you want in it
//write data after every trial -> does not slow down the experiment
//everything is stored in key/value format
//savetask data takes index and data to save 
// enable persistence 
firebase.firestore().enablePersistence()
.catch(function(err) {
  if (err.code == 'failed-precondition') {  // multiple tabs open, persistence can only be enabled in one tab at a a time
  } else if (err.code == 'unimplemented') { // the current browser does not support all of the features required to enable persistence
  }
});

// initialize db
var db = firebase.firestore();
// function to save consent 
var saveConsent = function(){
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).set({
    firebaseUID: uid,             // firebase user ID 
    //prolificSubID: subjectID,     // prolific subject ID 
    //prolificStudyID: studyID,     // prolific study ID 
    consentObtained: 'yes', 
    consentDate: new Date().toISOString().split('T')[0],
    consentTime: new Date().toLocaleTimeString(),
    participantOS: navigator.userAgent
  }); 
  // initialize data-storage collections
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('own_profile').set({init: 1});
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('condition').set({init: 1});
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('rank_profiles').set({init: 1});
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('task_data').doc('main_task').set({init: 1});
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('task_data').doc('mood_rating').set({init: 1});
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('task_data').doc('viewing_time').set({init: 1});
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('task_data').doc('questionnaires').set({init: 1});
};

var savePreTaskData = function(response){
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('own_profile').update({
    own_profile: response,
    //own_profile_rt: rt, -maybe add this       

  }); 
};

var saveProfileRatingsData = function(profile_count, respData){
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('rank_profiles').update(
    {[profile_count]: respData}  

  ); 
};

//Still dunno if I actually need this thing
/*
var saveRankTestData = function(rank_test){
  console.log('at least I am here');
  db.collection('tasks').doc('mind').collection('minddata').doc('uid').collection('pre_task_data').doc('rank_test').set({
    rank_test_data: rank_test 
  }); 
};
*/
var saveConditionCode = function(cond){
  console.log('in a condition code saving function');
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('condition').update({
    condition_code: cond 
  }); 
};
/*
var savePilotRun = function(cond){
  db.collection('tasks').doc('mind').collection('minddata').doc('uid').collection('pre_task_data').doc('condition').set({
    condition_code: cond 
  }); 
};
*/

var saveTaskData = function(trialN, response){
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('task_data').doc('main_task').update(
    {[trialN]: response}  

  ); 
};

var saveMoodData = function(trialN, response){
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('task_data').doc('mood_rating').update(
    {[trialN]: response}  

  ); 
};
/*
var saveQuestData = function(questionnaire, dataToSave, completionRT) {
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('task_data').doc('questionnaires').update({
    [questionnaire]: dataToSave,
    [questionnaire+'_RT']: completionRT
  });
};
*/

/*
var saveViewTime = function(view_history, rt, condition){
  db.collection('tasks').doc('mind').collection('minddata').doc(uid).collection('task_data').doc('viewing_time').update(
    {view: view_history,
    rteaction: rt,
    cond: condition
  }  
  ); 
};
*/


export { saveConsent, savePreTaskData, saveProfileRatingsData, saveConditionCode, saveTaskData, saveMoodData}

