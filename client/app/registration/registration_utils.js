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
