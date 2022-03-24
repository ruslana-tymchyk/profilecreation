// set up variables describing this specific task version


// task version
var version = "rew-eff9";			    // experiment version (used to create data collection in firestore)
var infoSheet = "../assets/approved-participant-information-sheet-211012-rew-eff-1.pdf";  
var briefStudyDescr = "For this particular study, we will only ask you complete a single game, and will not "+
					  "ask you to fill out any questionnaires.";

// time and payment info for this task version
var approxTime = 17;   			 		// approx time to complete this version of the experiment (minutes)
var hourlyRate = 7.5;					// 7.50 hourly rate (GBP)
var baseEarn = ((approxTime/60)*hourlyRate);   
var bonusRate = 0.35;			 	 	// additional bonus per task coin collected (GBPpence)
const maxCoins = 266;
var maxBonus = (maxCoins*bonusRate)/100;
let allowDevices = false;                // allow participants to access this task on mobile devices?

// set effort-related task variables
//var effortTime = 5000;					   // time participant will have to try and exert effort (ms)
//var effortTime = 6000;					   // time participant will have to try and exert effort (ms)
var effortTime = 10000;					   // time participant will have to try and exert effort (ms)
//var effortTime = 12000;						   // time participant will have to try and exert effort (ms)

//var pracTrialEfforts = [28, 24, 26, 34, 29]; // array of efforts ppts will be asked to perform in effortTime during practice
//var pracTrialEfforts = [34, 29, 31, 41, 35]; // array of efforts ppts will be asked to perform in effortTime during practice
var pracTrialEfforts = [56, 26, 52, 68, 53];   // array of efforts ppts will be asked to perform in effortTime during practice
//var pracTrialEfforts = [67, 31, 62, 82, 64];   // array of efforts ppts will be asked to perform in effortTime during practice

//var minPressMax = 24;        				 // set a minimum on max press count to avoid gaming the practice trials
var minPressMax = 55;        				 // set a minimum on max press count to avoid gaming the practice trials
//var minPressMax = 66;        				 // set a minimum on max press count to avoid gaming the practice trials

var nBlocks = 4;

export { version, infoSheet, briefStudyDescr, approxTime, hourlyRate, baseEarn, bonusRate, maxBonus, allowDevices, 
	     effortTime, pracTrialEfforts, minPressMax, nBlocks };