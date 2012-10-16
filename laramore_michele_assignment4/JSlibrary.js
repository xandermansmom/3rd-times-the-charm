//Javascript


//Validate Phone Number

var phoneNumber = function (theNumber) {
        var criterion = /^[1-9]\d{3}-[0-9]\d{3}-[0-9]\d{4}$/;
       /* ^ is beginning, 
	   $ is end
	   \d represents [0-9]
	   numbers in curly brackets represents number of digits */
	   
 if (criterion.test(theNumber)) {
		    return true;
	    }else {
	    return false;
    }
};
console.log("Is the value a phone number?" + phoneNumber("123-456-7890"));



	
//Validate Email Address


var eMail = function (elementValue){
	var criterion = /^\[a-zA-Z0-9_\.-] + @ [a-zA-Z0-9_\.-] +\ . [a-zA-Z0-\9_.-]{2,5} $/;
	/* ^ is beginning, 
	   $ is end *
	   [a-z] lower case alphabet
	   [A-Z] upper case alphabet
	  \d represents [0-9]
	  _ represents an underscore included in e-mail address */
	  
return criterion(elementValue);
	
};


//Validate Web Address

function validateWebAddress(elementValue){
	//TODO Fill in working code here that validates web address;
//return 
};


//Switch Title Case

function createTitleCase(wordCase){
	//TODO Fill in working code here to capitalize the first letter of every word;
//return 
};

//Switch String Separator

function stringSeparator(switchSeparator){
	//ToDo Fill in working code here to switch one separator with another;
//return
};

//Format Number

function formatNumber(placeDecimal){
	//ToDo Fill in working code here to specify number of decimal places
//return
};


//Fuzzy Match

function fuzzyMatch(nearPercentage){
	//TODO Fill in working code here to match a number to the nearest percentage
	//return
};


//Calculate Days

function calculateDays(findNumber){
	//TODO fill in working code here to calculate the number of days between two separate dates
	//return
};

//Return Number from String

function returnNumber(translateString){
	//TODO fill in working code here to return a number from a string
	//return
};


//Minimum Array Value Greater than given number

function minGreaterThan(givenValue){
	//TODO fill in working code here to return smallest in array larger than given number
	//return
};

//Calculate total value of Array

function calculateTotal(arrayValue){
	//TODO fill in working code here to calculate the total value of numbers in array
	//return
};


//Sort Array by Key

function sortArray(findKey){
	//TODO fill in working code here to sort an array by key
	//return
};



