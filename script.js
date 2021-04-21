/*******w***********

    Project 3
    Name: Mariah Correa
    Date: April 21, 2021
    Description: Project 3 Website Development & Deployment

*******************/

document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("formid").addEventListener("submit", validate);
}

function validate(e){
	
	hideAllErrors();

	if(formHasErrors()){
		e.preventDefault();
		return false;
	}

	return true;
}

function formHasErrors(){

	let errorFlag = false;

	let requiredFields = ["name", "email","message"];

	for(let i=0; i<requiredFields.length; i++){
		let textField = document.getElementById(requiredFields[i]);

		if(!formFieldHasInput(textField)){
			document.getElementById(requiredFields[i] + "_error").style.display = "block";

			if(!errorFlag)
			{
				textField.focus();
				textField.select();
			}
			errorFlag=true;
		}

	return errorFlag;
}

function hideAllErrors(){
	let errorFields = document.getElementsByClassName("error");

	for(let i = 0; i<errorFields.length; i++){
		errorFields[i].style.display = "none";
	}
}

function trim(str){
	return str.replace(/^\s+|$/g, "");
}

function formFieldHasInput(fieldElement){
	if( fieldElement.value == null || trim(fieldElement.value) == "" )
	{	
		return false;
	}

	return true;
}
