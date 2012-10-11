// Michele Laramore
// Wednesday, October 3, 2012
// Project 2

//My Variables


//Object
var family = {
    "Michele": [
		"age": 43,
		"relation": "Mom"
		],
	"Chris": [
		"age" : 39,
		"relation": "Dad"
		],
	"Tristan": [
		"age": 17,
		"relation" : "child"
		],
	"Xander": [
		"age": 9,
		"relation": "child"
		],
	"Willow": [
		"age": 8
		"relation": "child"
		],
		
ar handleData = function (json) {
	for (var i = 0; i < json.family.length; i++){
		var laFamilia = json.family[i];
		console.log(" Name: "  + laFamilia.name + " , Relationship: " + laFamilia.relationship + " , Age: " + laFamilia.age);
	};
	
};
		
		
joinFamilies: function(marriage){}
};


//Procedure
var money = function marriage(timing) {
    if (!timing) {
        // Code that runs if true
        console.log("We will have to wait until we have money to get married.");
    } else {
        // Code that runs if false
        console.log("We can get married.");
    }
};

money(true);



//Boolean Function   
var inLove = function(together, forever) {       

	if (true && !false){
        //If it is true there is love and false there is no love then this code runs
       console.log("We will stay together.");
	} else {
        //If it is false there is love and true there is no love then this code runs
        console.log("We will break up.");
     }
};

inLove(true);

//Number Function
function savings() {
	var moneyForWedding = 0;
	while (moneyForWedding < 30000) {
		console.log("We only have " + moneyForWedding + " dollars for our wedding.");
        moneyForWedding = moneyForWedding + 1000;//Adding money by $1000 increments 	
	}console.log("We have enough money to get married!");
};

savings();

//String Function
function vow() {
	   fiance = family[1]
		me = family[2]
		becoming = " to be my lawfully wedded husband",
		doWhat = " to have and to hold,",
		fromWhen = " from this day forward",
		forWhat = " for better, for worse, for richer, for poorer,",
		untilWhen = " in sickness and in health, until death do us part";
	console.log("I, " + me + "  take you, " + fiance + doWhat + fromWhen + forWhat + untilWhen + ".");
}
vow();



//Array Function
function children() {
	var names = family[2, 3, 4 ]
	    age = sonAge + [ 8, 17]; 		
for (var i = 0; i < names.length; i++)  //lists childrens names in order incrementally
	console.log(names[i] + " is " + age[i] + " years old. ");
	console.log("We have a total of " + names.length + " children together.");
   }
	
children();

