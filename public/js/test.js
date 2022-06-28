var random_ps_test = ['p20', 'p40', 'p60', 'p80']

var random_ps = [1,3,1,4,4,4,2,1,2,2,3,2,3,3,2,1,1,2,3,1,2,4,3,1,4,4,2,4,4,2,1,3,4,4,1,4,3,1,3,4,4,
    3,2,4,3,4,2,1,3,1,1,1,3,2,3,4,2,2,4,1,3,1,4,2,3,3,3,4,1,3,3,3,2,1,2,2,1,1,4,2,1,3,3,4,1,1,1,4,4,2,2,
    2,2,1,3,2,2,3,1,3,3,4,1,3,2,1,2,1,3,3,3,3,4,4,4,3,2,2,1,4,1,1,2,2,2,2,4,4,2,1,4,2,2,4,4,4,1,4,1,3,2,
    2,3,3,1,3,1,1,2,3,4,3,2,4,4,3,4,1,4,1]

var response = {
    p20 : [2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    p40 : [2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,1,1,2,2,2,1,2,2,1,2,2,2,1,2,1,1,1,1,2,2,1,2,1,2,1,2,1,2,1,1,1],
    p60 : [1,1,2,1,1,1,2,1,2,2,1,1,2,2,2,2,1,1,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,1,1,2,2,1,2,1,1,1,2,2,1,1],
    p80 : [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,1,1,1,1]
}
    
var list_names = {
    p20 : ['LUCA','EDWARD','ADA','ARLO','EVELYN','RORY','TOMMY','LUNA','PHOEBE','ELIJAH','YUSUF','RALPH','FLORENCE','OLLIE','ELSIE','MOHAMMAD','IVY','JENSON','ALICE',
        'JAMES','EMMA','ISLA','OAKLEY','MAX','ISABELLE','MARGOT','EMILY','ALEXANDER','ELIZA','MOHAMMED','ELLIOTT','THOMAS','ELLA','ERIN','ELLIOT','ROWAN','ELLIE',
        'ALBIE','BOBBY','POPPY'],
    p40 : ['AYLA','CALEB','LUCY','DARCIE','EMILIA','JESSICA','ZARA','AMELIA','JASMINE','WILLOW','MILO','REUBEN','ROSE','SONNY','ISABELLA','ISAAC',
        'LEO','SOPHIA','PENELOPE','LOGAN','ARCHIE','WILLIAM','TEDDY','LIAM','FELIX','ORLA','MARIA','MASON','OLIVER','ROMAN','REGGIE','STANLEY','AVA','THEO','JACOB',
        'JACK','LAYLA','BELLA','FREYA','MIA'],
    p60 : ['MICHAEL','FINN','ARTHUR','SAMUEL','MILA','NOAH','HALLIE','DAISY','ELEANOR','IRIS','HARRISON','MUHAMMAD','THEODORE',
        'MAYA','IMOGEN','LOLA','CHESTER','EVA','LOUIE','JASPER','DELILAH','ROSIE','MABEL','HARLEY','LUCAS','VIOLET','BONNIE','HARRY','NANCY','ETHAN','SEBASTIAN',
        'EVIE','DANIEL','HENRY','JAXON','GEORGE','CHARLOTTE','CHARLES','ALFRED','JOSEPH'],
    p80 : ['ROBYN','JOSHUA','THEA','JACKSON','OSCAR','CHLOE','OTIS','MOLLY','HUDSON',
        'AURORA','SOFIA','LILY','LEON','ELLIS','ARIA','FREDDIE','FINLEY','IBRAHIM','MAISIE','ESME','LOTTIE','SCARLETT','OLIVIA','HARRIET','SOPHIE','HARPER','GRACE',
        'BENJAMIN','RUBY','ALFIE','MILLIE','ARABELLA','ADAM','SIENNA','ELIZABETH','MATILDA','HARVEY','HANNAH','GRACIE','CHARLIE']
}

//loop time 
var trial;
var nTrials = 160;
var p_retrieved_counter = {
    p20: 0,
    p40: 0,
    p60: 0,
    p80: 0
}
for (trial=0; trial<nTrials; trial++) {
    var p_type = random_ps_test[random_ps[trial] - 1]
    var this_trial_in_p = p_retrieved_counter[p_type]
    p_retrieved_counter[p_type] += 1
    var this_response = response[p_type][this_trial_in_p] 
    var this_name = list_names[p_type][this_trial_in_p]
    //var this_image_number = image_number[p_type][this_trial_in_p]
    console.log(p_type,this_trial_in_p, this_response, this_name)
}
//so it is just random_ps that is the problem, because not the same number of values for each

console.log(p_retrieved_counter)
//write a function to transform these into ps

//okay so lets say we have trial number 1
//var trialN = 0
//what happens is trialN = 0

//we then go into random_ps and find that trialN=O is 2, which maps to p40
//var p_type = random_ps_test[random_ps[trialN] - 1]
//console.log(p_type) //p40

/* var p_retrieved_counter = {
    p20: 0,
    p40: 0,
    p60: 0,
    p80: 0
}

var this_trial_in_p = p_retrieved_counter[p_type]
console.log(this_trial_in_p) //0

//then in a p_retrieved variable we record the fact that we are taking this value
p_retrieved_counter[p_type] += 1
console.log(p_retrieved_counter) //added 1

//we then get value 0 from p40 for response, image_number and list_names
var this_response = response[p_type][this_trial_in_p]
console.log(this_response)
var this_name = list_names[p_type][this_trial_in_p]
console.log(this_name)

//then on next itteration say we get trial 2
//so then trialN = 1
//we then go into random_ps and find that trialN=1 is 2, which maps to p40
//when then look into our p_retrieved variable and find that p40 = 1, which means that it has been taken once
//which means that we get value 1 from p40 for response, image_number and list_names
//then in a p_retrieved variable we record the fact that we have added this value

*/

const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
  }


  console.log(permutator(['blue.png', 'yellow.png', 'orange.png', 'pink.png']))

