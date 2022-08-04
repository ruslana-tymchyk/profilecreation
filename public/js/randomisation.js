
var random_ps_test = ['p15', 'p30', 'p70', 'p85']

//var image_set = Math.floor((Math.random() * 25));
var image_set = 4;

var random_ps = [1,3,1,4,4,4,2,1,2,2,3,2,3,3,2,1,1,2,3,1,2,4,3,1,4,4,2,4,4,2,1,3,4,4,1,4,3,1,3,4,4,
    3,2,4,3,4,2,1,3,1,1,1,3,2,3,4,2,2,4,1,3,1,4,2,3,3,3,4,1,3,3,3,2,1,2,2,1,1,4,2,1,3,3,4,1,1,1,4,4,2,2,
    2,2,1,3,2,2,3,1,3,3,4,1,3,2,1,2,1,3,3,3,3,4,4,4,3,2,2,1,4,1,1,2,2,2,2,4,4,2,1,4,2,2,4,4,4,1,4,1,3,2,
    2,3,3,1,3,1,1,2,3,4,3,2,4,4,3,4,1,4,1]

var response = {
    p15 : [2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
    p30 : [1,2,2,2,2,2,2,1,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1,1,2,2,1,2,1,2,1,1,1,2],
    p70 : [1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,2,2,2,2,1,1,1,1,1,2,1,1,2,1,2,2,1],
    p85 : [2,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1]
}
    
var list_names = {
    p15 : ['LUCA','EDWARD','ADA','ARLO','EVELYN','RORY','TOMMY','LUNA','PHOEBE','ELIJAH','YUSUF','RALPH','FLORENCE','OLLIE','ELSIE','MOHAMMAD','IVY','JENSON','ALICE',
        'JAMES','EMMA','ISLA','OAKLEY','MAX','ISABELLE','MARGOT','EMILY','ALEXANDER','ELIZA','MOHAMMED','ELLIOTT','THOMAS','ELLA','ERIN','ELLIOT','ROWAN','ELLIE',
        'ALBIE','BOBBY','POPPY'],
    p30 : ['AYLA','CALEB','LUCY','DARCIE','EMILIA','JESSICA','ZARA','AMELIA','JASMINE','WILLOW','MILO','REUBEN','ROSE','SONNY','ISABELLA','ISAAC',
        'LEO','SOPHIA','PENELOPE','LOGAN','ARCHIE','WILLIAM','TEDDY','LIAM','FELIX','ORLA','MARIA','MASON','OLIVER','ROMAN','REGGIE','STANLEY','AVA','THEO','JACOB',
        'JACK','LAYLA','BELLA','FREYA','MIA'],
    p70 : ['MICHAEL','FINN','ARTHUR','SAMUEL','MILA','NOAH','HALLIE','DAISY','ELEANOR','IRIS','HARRISON','MUHAMMAD','THEODORE',
        'MAYA','IMOGEN','LOLA','CHESTER','EVA','LOUIE','JASPER','DELILAH','ROSIE','MABEL','HARLEY','LUCAS','VIOLET','BONNIE','HARRY','NANCY','ETHAN','SEBASTIAN',
        'EVIE','DANIEL','HENRY','JAXON','GEORGE','CHARLOTTE','CHARLES','ALFRED','JOSEPH'],
    p85 : ['ROBYN','JOSHUA','THEA','JACKSON','OSCAR','CHLOE','OTIS','MOLLY','HUDSON',
        'AURORA','SOFIA','LILY','LEON','ELLIS','ARIA','FREDDIE','FINLEY','IBRAHIM','MAISIE','ESME','LOTTIE','SCARLETT','OLIVIA','HARRIET','SOPHIE','HARPER','GRACE',
        'BENJAMIN','RUBY','ALFIE','MILLIE','ARABELLA','ADAM','SIENNA','ELIZABETH','MATILDA','HARVEY','HANNAH','GRACIE','CHARLIE']
}

var female_names = ['OLIVIA', 'AMELIA', 'ISLA', 'AVA', 'MIA', 'IVY', 'LILY', 'ISABELLA', 'ROSIE', 'SOPHIA', 'GRACE', 'FREYA',
    'WILLOW', 'FLORENCE', 'EMILY', 'ELLA', 'POPPY', 'EVIE', 'ELSIE', 'CHARLOTTE', 'EVELYN', 'SIENNA', 'SOFIA', 'DAISY', 'PHOEBE',
    'SOPHIE', 'ALICE', 'HARPER', 'MATILDA', 'RUBY', 'EMILIA', 'MAYA', 'MILLIE', 'ISABELLE', 'EVA', 'LUNA', 'JESSICA', 'ADA',
    'ARIA', 'ARABELLA', 'MAISIE', 'ESME', 'ELIZA', 'PENELOPE', 'BONNIE', 'CHLOE', 'MILA', 'VIOLET', 'HALLIE', 'SCARLETT', 'LAYLA',
    'IMOGEN', 'ELEANOR', 'MOLLY', 'HARRIET', 'ELIZABETH', 'THEA', 'ERIN', 'LOTTIE', 'EMMA', 'ROSE', 'DELILAH', 'BELLA', 'AURORA',
    'LOLA', 'NANCY', 'ELLIE', 'MABEL', 'LUCY', 'AYLA', 'MARIA', 'ORLA', 'ZARA', 'ROBYN', 'HANNAH', 'GRACIE', 'IRIS', 'JASMINE',
    'DARCIE', 'MARGOT', 'HOLLY', 'AMELIE', 'AMBER', 'GEORGIA', 'EDITH', 'MARYAM', 'ABIGAIL', 'MYLA', 'ANNA', 'CLARA', 'LILLY',
    'LYRA','SUMMER', 'MAEVE', 'HEIDI', 'ELODIE', 'LYLA', 'EDEN', 'OLIVE', 'AISHA']

var p_image_orders = [
    [ 'blue.png', 'yellow.png', 'lighty.png', 'lightb.png' ],
    [ 'blue.png', 'yellow.png', 'lightb.png', 'lighty.png' ],
    [ 'blue.png', 'lighty.png', 'yellow.png', 'lightb.png' ],
    [ 'blue.png', 'lighty.png', 'lightb.png', 'yellow.png' ],
    [ 'blue.png', 'lightb.png', 'yellow.png', 'lighty.png' ],
    [ 'blue.png', 'lightb.png', 'lighty.png', 'yellow.png' ],
    [ 'yellow.png', 'blue.png', 'lighty.png', 'lightb.png' ],
    [ 'yellow.png', 'blue.png', 'lightb.png', 'lighty.png' ],
    [ 'yellow.png', 'lighty.png', 'blue.png', 'lightb.png' ],
    [ 'yellow.png', 'lighty.png', 'lightb.png', 'blue.png' ],
    [ 'yellow.png', 'lightb.png', 'blue.png', 'lighty.png' ],
    [ 'yellow.png', 'lightb.png', 'lighty.png', 'blue.png' ],
    [ 'lighty.png', 'blue.png', 'yellow.png', 'lightb.png' ],
    [ 'lighty.png', 'blue.png', 'lightb.png', 'yellow.png' ],
    [ 'lighty.png', 'yellow.png', 'blue.png', 'lightb.png' ],
    [ 'lighty.png', 'yellow.png', 'lightb.png', 'blue.png' ],
    [ 'lighty.png', 'lightb.png', 'blue.png', 'yellow.png' ],
    [ 'lighty.png', 'lightb.png', 'yellow.png', 'blue.png' ],
    [ 'lightb.png', 'blue.png', 'yellow.png', 'lighty.png' ],
    [ 'lightb.png', 'blue.png', 'lighty.png', 'yellow.png' ],
    [ 'lightb.png', 'yellow.png', 'blue.png', 'lighty.png' ],
    [ 'lightb.png', 'yellow.png', 'lighty.png', 'blue.png' ],
    [ 'lightb.png', 'lighty.png', 'blue.png', 'yellow.png' ],
    [ 'lightb.png', 'lighty.png', 'yellow.png', 'blue.png' ]
  ]
/*
  var image_number = {
    p15 : [2,2,3,3,4,4,1,4,1,1,1,2,3,4,3,3,4,1,4,1,1,4,1,2,4,3,2,3,4,3,4,2,3,4,2,3,4,3,4,3,3,1,2,3,3,1],
    p30 : [3,2,1,3,2,2,4,2,3,4,1,2,1,4,4,2,2,4,2,3,2,2,2,1,4,1,2,4,2,3,1,3,1,2,1,3,4,1,4,2,2,2,3,4,1,2],
    p70 : [1,1,3,1,1,2,4,4,1,2,3,3,1,3,2,2,2,2,4,3,3,4,4,1,3,2,2,2,3,1,1,4,4,4,1,2,3,1,1,4,4,2,3,3,3,1],
    p85 : [3,4,1,2,1,2,1,4,1,1,3,1,2,4,4,4,3,4,2,1,2,3,3,3,4,4,1,1,1,4,3,2,4,2,2,3,4,3,4,4,2,3,1,1,1,3]

}
*/

export{random_ps_test, random_ps, response, list_names, image_set, p_image_orders, female_names}