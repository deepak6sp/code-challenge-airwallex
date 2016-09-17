export function validate(fullName, email, confirmEmail){
	var errors = {}
    // validate name
    if(fullName == "") {
      	errors.fullName = "Username is required";
    } else if (fullName.length < 3){
    	errors.fullName = "Username should be minimum of 3 characters";
    }

    //validate email
    if(email == "") {
      errors.email = "Email is required";
    } else {
    	var email = email;
    	var checkAt = email.indexOf("@");
    	var checkDot = email.lastIndexOf(".");
    	if (checkAt < 1 || checkDot < checkAt+2 || checkDot+2>=email.length) {
	        errors.email = "Not a valid e-mail address";
		}
    }

    // confirm email
    if(confirmEmail == "") {
      errors.confirmEmail = "Confirm email is required";
    }
    else if (confirmEmail != email){
    	errors.confirmEmail = "Emails does not match";
    }
    return errors;
}

export function addSpinner(){
    var img=document.createElement("img");
    img.src="https://stanfy.com/wp-content/uploads/2015/09/1-V3h-VWthi5lL0QySF6qZPw.gif";
    img.id="picture";
    var spinner = document.getElementById("serverResponse");
    spinner.appendChild(img);
    document.getElementById("button").innerHTML = "Sending. Please wait...";
}


export function addServerError(){
    console.log("i am in addservererror");
    var id = document.getElementById("serverResponse");
    var serverErrorText = document.createTextNode("Server communication error! Resend please");
    id.appendChild(serverErrorText);
}


export function removeServerResponse(){
    document.getElementById("serverResponse").innerHTML = "";
    document.getElementById("button").innerHTML = "Send";
}

