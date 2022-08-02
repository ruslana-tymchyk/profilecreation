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
var saveConsent = function(uid){
  db.collection('tasks').doc('mind').collection('minddata').doc('uid').set({
    firebaseUID: uid,             // firebase user ID 
    //prolificSubID: subjectID,     // prolific subject ID 
    //prolificStudyID: studyID,     // prolific study ID 
    consentObtained: 'yes', 
    consentDate: new Date().toISOString().split('T')[0],
    consentTime: new Date().toLocaleTimeString(),
    participantOS: navigator.userAgent
  }); 
};

var savePreTaskData = function(response){
  console.log('at least I am here');
  db.collection('tasks').doc('mind').collection('minddata').doc('uid').collection('pre_task_data').doc('pre_task_fields').set({
    own_profile: response
             

  }); 
};

//profile_ratings: ,
//rank_test: ,
//task_understanding_quiz: ,
//condition_task:   



export { saveConsent, savePreTaskData}

