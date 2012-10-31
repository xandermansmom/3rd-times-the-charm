//	Michele Laramore
//	Activity 2
//	Visual Frameworks(VFW)
//	Mobile Development
//	Full Sail University

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
	alert(localStorage.value(0));
	
	//getElementByIdFunction
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	//Dynamically create select field, create an array and populate select field with array
	/* function listStates(){
		 var createTag = getElementsByTagName("form"),
		 	pickLi = $('choose'),
			createSelect = document.createElement('choose');
			createSelect = set.Attribute("id", "states");
		for(var i=0, j=theStates.length; i<j; i++){
			var createOption = document.createElement('option');
			var optContent = theStates[i];
			makeOption.setAttribute("value", optContent);
			makeOption.innerHTML = optContent;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect); 
	}
	*/
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
	
	//Find value of selected radio button
	function getSelectedRadio(){
		var radios = document.forms[0].sex;
		for(var i=0; i<radios.length; i++);{
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	
	}
	function saveData(){
		var id 				= Math.floor(Math.random()*100000001);
		//Gather form field values and store in an object
		//Object properties contain an array with the form label and input value
			item.fname			= ["First Name", $('fname').value ];
			item.lname			= [ "Last Name", $('lname').value ];
			item.email			= [ "Email", $('email').value];
			item.telephone		= [ "Telephone", $('telephone').value];
			item.address		= [ "Address", $('address').value];
			item.city			= ["City" , $('city').value];
			item.state			= ["State", $('state').value];
			item.zip			= [ "Zip", $('zip').value];
			item.occasion		= ["Occasion", $('occasion').value];
			item.date			= ["Date", $('date').value];
			item.sex			= ["Sex", sexValue];
			item.spend			= ["Spend", spendValue];
			item.comments		= ["Comments", $('comments').value];				
		//Save data into local storage. Use stringify to convert objects into strings.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Special Occasion is saved!");		
	}
	
	//Variable defaults
	
	/*var theStates = new Array("Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia",
							"Florida", "Georgia", "Hawaii","Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", 	"Maryland",
								"Massachusetts","Michigan", "Minnesota", "Mississippi","Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
								"New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma","Oregon", "Pennsylvania", 	
								"Rhode Island", "South Carolina", "South Dakota", "Tennessee","Texas", "Utah", "Vermont", "Virginia", "Washington", 
								"West Virginia", "Wisconsin", "Wyoming");
	listStates();
*/	
	var theOccasion = ["--Select an Occasion--", "birthday", "anniversary", "graduation"],
		sexValue;
	listOccasions();

  

//Set Link and Submit Click Events

	/*	var displayLink = $('displayLink');
		displayLink.addEventListener("click", getData);
		var clearLink = $('clear');
		displayLink.addEventListener("click", clearData); */
		var save = $('submit');
		displayLink.addEventListener("click", saveData);
});
