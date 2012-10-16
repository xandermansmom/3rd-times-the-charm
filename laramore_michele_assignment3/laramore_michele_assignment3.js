// Michele Laramore
// Wednesday, October 3, 2012
// Project 2

//My Variables

for (var key in kin.family) {
	var family = kin.family[key]
};	


var handleData = function (kin) {
	for (var i = 0; i < kin.family.length; i++) {
		var laFamilia = kin.family[1];
		console.log("Name: " + family.name + ", Relationship: " + family.relationship + ", Age: " + family.age);
	};
};


//Object
var residences = new Array();
residences[0] = "Bellmead, Texas";
residences[1] = "Mt. Calm, Texas";
residences[2] = "Marble Falls, Texas";



{
console.log(name[1] + "lives in " + residences[0]);
console.log(  +" lived in " + residences[1] );
console.log(  +" is moving to " + residences[2] );
}




//Boolean Function   
var inLove = function(together, forever) {       

	if (forever && !together){
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
	   fiance = [1];
		me = [0];
		becoming = " to be my lawfully wedded husband",
		doWhat = " to have and to hold,",
		fromWhen = " from this day forward",
		forWhat = " for better, for worse, for richer, for poorer,",
		untilWhen = " in sickness and in health, until death do us part";
	console.log("I, " + me + "  take you, " + fiance + doWhat + fromWhen + forWhat + untilWhen + ".");
}
vow();



//Array Function
function children(laFamilia) {
	var names =[4] [3] [2];
	    age =[ 9, 8, 17]; 		
for (var i = 0; i < names.length; i++)  //lists childrens names in order incrementally
	console.log(names[i] + " is " + age[i] + " years old. ");
	console.log("We have a total of " + names.length + " children together.");
   }
	
children();

