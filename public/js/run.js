
//To run task without informed consent

firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
			uid = user.uid;
			saveConsent(uid);
			runtask(uid);
			}
		});