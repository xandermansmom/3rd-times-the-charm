//Javascript


//Validate Phone Number

var phoneNumber = function (theNumber) {
        var criterion = /^\d{3}-\d{3}-\d{4}$/;
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
console.log("Is the value a phone number? " + phoneNumber("123-456-7890"));



	
//Validate Email Address


var eMail = function (theAddress){
	var requirement = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		/* ^ is beginning, 
		 $ is end 
		[a-z] lower case alphabet
		[A-Z] upper case alphabet
		[0-9] for numbers in address
		\@ is at symbol escaped {must be escaped because used for other reasons in JS}
		_ represents an underscore included in e-mail address
		\. represents escaped period { period is used in JS so it must be escaped}
		{2,4} is the min to max number of letters at the end of email address allowed */


	if (requirement.test(theAddress)){
		return true;
	}else {
		return false;
	}
};
console.log("Is this a valid e-mail address? " + eMail("xandermansmom@aol.com"));


//Validate Web Address

function webAddress(theUrl){
	var urlReqs =/^https?:\/\/[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
	/*  (http|https) matches one or the other
		? means it matches the preceding character 0 or 1 time so it can be either http or https
		\/ is an escaped slash for // in the web address.
		{2,3} is for address that have .co or .com or .net, etc. It can have 2 or 3 characters.
	*/
	if (urlReqs.test(theUrl)){
		return true;
	}else {
		return false;
	}
};
console.log("Is this a valid web address? " + webAddress("http://nettuts.com"));


//Switch Title Case
var str = "This is my house.";
str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
	/* toLowerCase converts a string to all lowercase  (This will become this)
		replace searches a string for a specified value or regex and returns a new string where the specified values are replaced.
		\b performs a whole world only search and matches the first character in the string
		\g  causes the replace call to replace all matches  {g means global}
		toUpperCase converts a string to upper case letters
	*/
    return letter.toUpperCase();});
console.log(str); 



//Switch String Separator 

function stringSeparator(stringValue, separator){
	var letters = "a,b,c"
	newstr = letters.replace(/,/g,"/"); //replace all commas with forward slashes /g means global so all commas will be replaced
	return newstr;
	}

console.log(stringSeparator("a,b,c", "/"));


//Format Number
/*
function formatNumber(){
var num = new Number (1.27699);

};
console.log(num.toFixed(2));
*/
//Fuzzy Match

function fuzzyMatch(nearPercentage){
	//TODO fill in working code here to match number in array to nearest percent.
}

//Calculate Days

function calculateDays(){
	//TODO fill in working code here to calculate number of days between two dates.

//Return Number from String used toFixed

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



}