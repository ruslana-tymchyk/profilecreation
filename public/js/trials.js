var response = {
	p20 : [2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    p40 : [2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,1,1,2,2,2,1,2,2,1,2,2,2,1,2,1,1,1,1,2,2,1,2,1,2,1,2,1,2,1,1,1],
    p60 : [1,1,2,1,1,1,2,1,2,2,1,1,2,2,2,2,1,1,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,1,1,2,2,1,2,1,1,1,2,2,1,1],
    p80 : [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,1,1,1,1]
};


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

//generate new ones - make sure random for each set
//this thing below is what would allow you to pick a random trial - either 20/40/60/80
var image_number = {
    p20 : [2,2,3,3,4,4,1,4,1,1,1,2,3,4,3,3,4,1,4,1,1,4,1,2,4,3,2,3,4,3,4,2,3,4,2,3,4,3,4,3,3,1,2,3,3,1],
    p40 : [3,2,1,3,2,2,4,2,3,4,1,2,1,4,4,2,2,4,2,3,2,2,2,1,4,1,2,4,2,3,1,3,1,2,1,3,4,1,4,2,2,2,3,4,1,2],
    p60 : [1,1,3,1,1,2,4,4,1,2,3,3,1,3,2,2,2,2,4,3,3,4,4,1,3,2,2,2,3,1,1,4,4,4,1,2,3,1,1,4,4,2,3,3,3,1],
    p80 : [3,4,1,2,1,2,1,4,1,1,3,1,2,4,4,4,3,4,2,1,2,3,3,3,4,4,1,1,1,4,3,2,4,2,2,3,4,3,4,4,2,3,1,1,1,3]

}

//how do we assign for each participant to have a certain trial number?