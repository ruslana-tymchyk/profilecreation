
firebase.firestore().enablePersistence()
.catch(function(err) {
  if (err.code == 'failed-precondition') {  // multiple tabs open, persistence can only be enabled in one tab at a a time
  } else if (err.code == 'unimplemented') { // the current browser does not support all of the features required to enable persistence
  }
});

// initialize db
var db = firebase.firestore();
var version = "test1"
// function to save consent 
var saveConsent = function(){
  db.collection(version).doc('mind').collection('minddata').doc(uid).set({
    firebaseUID: uid,             // firebase user ID 
    prolificSubID: subjectID,     // prolific subject ID 
    prolificStudyID: studyID,     // prolific study ID 
    consentObtained: 'yes', 
    consentDate: new Date().toISOString().split('T')[0],
    consentTime: new Date().toLocaleTimeString(),
    participantOS: navigator.userAgent
  }); 
  // initialize data-storage collections
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('own_profile').set({init: 1});
};

var savePreTaskData = function(response){
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('own_profile').update({
    own_profile: response 

  }); 
};

export { saveConsent, savePreTaskData};

