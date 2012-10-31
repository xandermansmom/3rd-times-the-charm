//	Michele Laramore
//	Activity 2
//	Visual Frameworks(VFW)
//	Mobile Development
//	Full Sail University

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementByIdFunction
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	//Create select field and populate with options	
	
	function listOccasions(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "occasion");
		for(var i=0, j=theOccasion.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = theOccasion[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//Variable defaults
	
	var theOccasion = ["--Select an Occasion--", "birthday", "anniversary", "graduation"];
	listOccasions();

});  