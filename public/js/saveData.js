
firebase.firestore().enablePersistence()
.catch(function(err) {
  if (err.code == 'failed-precondition') {  // multiple tabs open, persistence can only be enabled in one tab at a a time
  } else if (err.code == 'unimplemented') { // the current browser does not support all of the features required to enable persistence
  }
});

// initialize db
var db = firebase.firestore();
var version = "test2.0"
// function to save consent 
var saveConsent = function(){
  db.collection(version).doc('mind').collection('minddata').doc(uid).set({
    firebaseUID: uid,             // firebase user ID 
    //prolificSubID: subjectID,     // prolific subject ID 
    //prolificStudyID: studyID,     // prolific study ID 
    consentObtained: 'yes', 
    consentDate: new Date().toISOString().split('T')[0],
    consentTime: new Date().toLocaleTimeString(),
    participantOS: navigator.userAgent
  }); 
  // initialize data-storage collections
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('own_profile').set({init: 1});
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('rank_profiles').set({init: 1});
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('task_data').doc('main_task').set({init: 1});
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('task_data').doc('mood_rating').set({init: 1});
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('task_data').doc('viewing_time').set({init: 1});
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('post_task_data').doc('questionnaires').set({init: 1});
};

var savePreTaskData = function(response){
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('own_profile').update({
    own_profile: response,
    //own_profile_rt: rt, -maybe add this       

  }); 
};

var saveProfileRatingsData = function(profile_count, respData, respRT){
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('rank_profiles').update(
    {[profile_count]: respData,
      rt: respRT}  

  ); 
};

var saveTaskData = function(trialN, response){
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('task_data').doc('main_task').update(
    {[trialN]: response}  

  ); 
};

var saveMoodData = function(trialN, response){
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('task_data').doc('mood_rating').update(
    {[trialN]: response}  

  ); 
};

var saveQuestData = function(questionnaire, dataToSave, completionRT) {
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('post_task_data').doc('questionnaires').update({
    [questionnaire]: dataToSave,
    [questionnaire+'_RT']: completionRT
  });
};



var saveViewTime = function(view_history, rt, condition){
  db.collection(version).doc('mind').collection('minddata').doc(uid).collection('task_data').doc('viewing_time').update(
    {view: view_history,
    rt: rt,
    condition: condition
  }  
  ); 
};

/*

var getMoodRating = function(){

        var docRef = db.collection(version).doc('mind').collection('minddata').doc(uid).collection('task_data').doc('mood_rating');

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                return doc.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                return 1;
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
  }

*/

export { saveConsent, savePreTaskData, saveProfileRatingsData, saveTaskData, saveMoodData, saveQuestData, saveViewTime};

