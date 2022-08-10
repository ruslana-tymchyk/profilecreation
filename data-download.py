import firebase_admin
from firebase_admin import credentials, firestore, db
import json
import sys
import pandas as pd
pd.set_option("display.max_rows", None, "display.max_columns", None)

# set up firebase credentials
## !you will need to update these with your project-specific credentials, you can get these
## by following the steps described here: https://firebase.google.com/docs/admin/setup#initialize-sdk
try: 
    cred = credentials.Certificate('lanamind-firebase-adminsdk-u222b-ef3b647d58.json') 
    default_app = firebase_admin.initialize_app(cred)
except: 
    print('Seems certificate already loaded')

# set up task name and version to download
## !you will need to edit the below lines to point to your task name (what you have saved data under in your firestore
## I uses lines 21 and 22 so this script can be called with version number as a argument, you could also just hard-code everything 
## as a single string if you won't be using multiple versions (e.g., version = 'lana-mind1')
taskname = 'minddata'
versionN = 'prolific1.1'  
version = taskname+versionN

# get all current data
client = firestore.client()

docs = client.collection(versionN).document('mind').collection(taskname).stream()

# for doc in docs:
#     print(f'{doc.id} => {doc.to_dict()}')


# collection(version).doc('mind').collection('minddata').doc(uid).collection('pre_task_data').doc('rank_profiles').
# loop across all current participants
for sub in client.collection(versionN).document('mind').collection(taskname).stream():
    # grab prolific and firebase ID info
    idinfo = sub.to_dict()
    subid = str(idinfo['prolificSubID'])
    fsid = str(idinfo['firebaseUID'])

    # if this participant at least started the task, get their data
    if 'consentObtained' in idinfo:
    
        # get practice task data, main task data, and post-task ratings data
        #pre_task
        pre_rank_profiles = client.collection(versionN).document('mind').collection(taskname).document(fsid).collection('pre_task_data').document('rank_profiles').get().to_dict()
        pre_own_profile = client.collection(versionN).document('mind').collection(taskname).document(fsid).collection('pre_task_data').document('own_profile').get().to_dict()
        #main_task
        main_task = client.collection(versionN).document('mind').collection(taskname).document(fsid).collection('task_data').document('main_task').get().to_dict()
        mood_rating = client.collection(versionN).document('mind').collection(taskname).document(fsid).collection('task_data').document('mood_rating').get().to_dict()
        viewing_time = client.collection(versionN).document('mind').collection(taskname).document(fsid).collection('task_data').document('viewing_time').get().to_dict()
        #post_task
        post_questionnaires = client.collection(versionN).document('mind').collection(taskname).document(fsid).collection('post_task_data').document('questionnaires').get().to_dict()

        # write data
        with open('data/'+version+'-'+subid+'-'+fsid+'-pre_task_data.txt','w') as f:
            f.write(json.dumps({ **idinfo, **pre_rank_profiles, **pre_own_profile}))
        with open('data/'+version+'-'+subid+'-'+fsid+'-main_task.txt','w') as f:
           f.write(json.dumps({ **idinfo, **main_task, **mood_rating, **viewing_time}))    
        with open('data/'+version+'-'+subid+'-'+fsid+'-post_task.txt','w') as f:
           f.write(json.dumps({ **idinfo, **main_task, **mood_rating, **viewing_time}))  
        print(subid+' '+version+' data downloaded!')

        # # also try downloading the whole exp data backup file
        # try: 
        #     datadump = client.document('tasks/'+taskname+'/'+version+'/{0}/task-data/data-backup'.format(sub.id)).get().to_dict()
            
        #     with open('../data/'+version+'-'+subid+'-'+fsid+'-data-backup.txt','w') as f: 
        #         f.write(json.dumps(datadump))
        #     print(subid+' '+version+' data backup downloaded!')
        
        # except: 
        #     print('*** '+subid+' '+version+' data backup failed ***')


