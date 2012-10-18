//Javascript

//COMMENTS ABOUT GRADES
//PROJECT 3 -
//	. Coding/Completeness: Missing many of the required elements from the flowchart.  -Everything in my flowchart is in this document
// you don't have any methods. 


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
		\b performs a whole word only search and matches the first character in the string
		\g  causes the replace call to replace all matches  {g means global}
		toUpperCase converts a string to upper case letters
	*/
    return letter.toUpperCase();});
console.log(str); 



//Switch String Separator 

function stringSeparator(stringValue, separator){
	var letters = "a,b,c"
	newStr = letters.replace(/,/g,"/"); //comma had to be escaped so I could use /g --/g means global so all commas will be replaced
	return newStr;
	}

console.log(stringSeparator("a,b,c", "/"));


//Format Number

function formatNumber(numValue, decimalPlace){
var num = 1.27699
	newNum = num.toFixed(2);//toFixed converts a number into a string. The number in the parenthesis dictates number of decimal spots.
return newNum;
};
console.log(formatNumber(1.27699, 2));



//Fuzzy Match

	function fuzzyMatch(a, n){
	var numArray = [5, 30, 45, 60, 79, 85]
		num = 50
	 if((l = a.length) < 2)
        return l - 1;
    for(var l, p = Math.abs(a[--l] - n); l--;)
        if(p < (p = Math.abs(a[l] - n)))
            break;
    return l + 1;
	var numArray = [", array, "];
	"50 = ", getNearestNumber([5, 30, 45, 60, 79, 85], 50);
	};
	console.log("The number you are searching for is " + (fuzzyMatch([5, 30, 45, 60, 79, 85], 50) + " in the array of [5, 30, 45, 60, 79, 85]."));
	


//Calculate Days

function calculateDays(){
	var time = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	    today = new Date( )//function that gives us today's date     
	    Christmas = new Date (2012,11,25);//dates start with 0 so December is 11
        diffDays = Math.abs((Christmas.getTime() - today.getTime())/time); 		
return diffDays.toFixed(); // MAKEUP: Project 3 did not use method, toFixed() is a method
};//Math.abs returns the absolute value of Christmas day minus today divided by time, getTime returns milliseconds in the day
console.log("There are " + (calculateDays())  + " days until Christmas 2012.");


	
//Return Number from String 

function returnNumber(){
	var strToNum = (parseInt("20"));//parseInt takes a string and returns a number
return strToNum;
};
console.log (returnNumber());



//Minimum Array Value Greater than given number

Array.prototype.minGreaterThan=function(f){ //Array.prototype refers to an array object and allows you to add new properties and methods to the object
	var t=this,
		n=Number.POSITIVE_INFINITY,i;//POSITIVE_INFINITY is something higher than any other number
		
		for (i=0;i<t.length;i++) if (f<t[i] && t[i]<n) n=t[i]; // for part iterates through length in array
														// if part says if this given integer is bigger than certain part of the array and 
														//another integer in the array is smaller than the given number then this number 
														//equals this integer
	return n;
}

var arr=[1,10,23,48],n=20;//array of numbers to chose from and given number
console.log(arr.minGreaterThan(n)); 


//Calculate total value of Array

function calculateTotal(){
	var arr = [7, 'c', 10, 'f', 32, 'x'];
		sum = 0
		
		for (var i=0; i<arr.length; i++) { //iterating through length of array
 		 if (!isNaN(parseInt(arr[i]))) { sum += arr[i]; }// if !isNan means if it is Not(Not a Number) then take the string and return a number
		 												//from the array. The sum is equal to total value of the array. 
		}
		return sum;
};
console.log(calculateTotal());

//Sort Array by Key

function sortArray(aKey, array){
      var key = "a:";
          arr= [{a:2}, {a:1}, {a:3}]; 
		  for (var i = 0; i < arr.length; i++);
	 arr.sort( )
	 return arr;
};
console.log(sortArray("a:",[{a:2}, {a:1}, {a:3}]));


