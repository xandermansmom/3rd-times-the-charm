//	Michele Laramore
//	Activity 2
//	Visual Framweworks(VFW)
//	Mobile Development
//	Full Sail University

// JavaScript Document

//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function (){

	//getElementByIDFunction
	function $(x){
		var theElement = document.getElementByID(x);
		return theElement;
	}
	
	//Create select field element and populate with options
	/*function listStates(){
		var formTag = getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect = set.Attribute("id", "states");
		for(var i=0, j=theStates.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = theStates[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect); 
	}; */
	
	function listOccasions(){
		var formTag = getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect = set.Attribute("id", "occasion");
		for(var i=0, j=theOccasion.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = theOccasion[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	};
	
	
	
	//Variable Defaults
	/*var theStates = new Array("Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia",
						 "Florida", "Georgia", "Hawaii","Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
						 "Michigan", "Minnesota", "Mississippi","Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
						 "North Carolina", "North Dakota", "Ohio", "Oklahoma","Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
						 "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming");
	makeList();  */
	var theOccasion = ["--Select an Occasion--", "birthday", "anniversary", "graduation"];
	makeList();
	
	//Set Link and Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	displayLink.addEventListner("click", clearData);
	var save = $('submit');
	displayLink.addEventListener("click", saveData);
});











