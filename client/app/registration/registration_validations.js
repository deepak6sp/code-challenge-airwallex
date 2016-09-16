export function validate(fullName, email, confirmEmail){
	var errors = {}
    if(fullName == "") {
      	errors.fullName = "Username is required";
    } else if (fullName.length < 3){
    	errors.fullName = "Username should be minimum of 3 characters";
    }
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
    if(confirmEmail == "") {
      errors.confirmEmail = "Confirm email is required";
    }
    else if (confirmEmail != email){
    	errors.confirmEmail = "Emails does not match";
    }
    return errors;
}