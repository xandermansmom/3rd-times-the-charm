function validate(e){
		//Define the elements we want to check
		var getFname 		= $('fname');
		var getLname	 	= $('lname');
		var getEmail 		= $('email');
		var getTelephone 	= $('telephone');
		var getState        = $('states');
		var getZip   		= $('zip');
		var getOccasion     = $('occasions');
		var getCalDay		= $('date');
}


//not including other validations here for brevity

//Date Validation
		var date =/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)$/;
		if(!(date.exec(getCalDay.value))){
			var dateError = "Please enter a valid date in the following format: Jan/dd/yy";
			getCalDay.style.border = "1px solid red";
			messageAry.push(dateError);
		}
		
		
//If there were errors, display them on the screen
		if(messageAry.length >=1){
			for(var i = 0, j=messageAry.length; i<j; i++){
				var txt = document.createElement('li');
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);			
		}	
		e.preventDefault();
		return false;				
	}else{
		//If all is good, save the data! Save the key value (which came from our editData function ).
		//This key value was passed through the editSubmit eventListener as a property.
		saveData(this.key);	
	}
}
