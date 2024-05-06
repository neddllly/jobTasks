
statusButton = true;
document.querySelector('#buttonSubmit').disabled = statusButton;
function submitForm(){
    var email = document.getElementById("InputEmail").value.trim();
    var password = document.getElementById("InputPassword").value.trim();
    if(email!=="" && password!==""){
    statusButton=!statusButton
    document.querySelector('#buttonSubmit').disabled = statusButton;
}
else{
    document.querySelector('#buttonSubmit').disabled = statusButton;
}
}
