// Michele Laramore
// Wednesday, October 3, 2012
// Project 2

//My Variables


//Object
var residences = new Array();
residences[0] = "Bellmead";
residences[1] = "Mt. Calm";
residences[2] = "Marble Falls";

for (i=0;i<residences.length;i++)
{
console.log("I live in " + residences[0]+ "<br>");
console.log("Chris lived in " + residences[1] + "<br>");
console.log("Chris is moving to " + residences[2] );
}


for (var key in kin.family) {
	var family = kin.family[key]
};	

    
var handleData = function (json) {
	for (var i = 0; i < kin.family.length; i++){
		var laFamilia = kin.family[i];
		console.log(" Name: "  + laFamilia.name + " , Relationship: " + laFamilia.relationship + " , Age: " + laFamilia.age);
	};
	
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

