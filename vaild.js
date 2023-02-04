var UserName = document.forms['form']['UserName'];
var Password = document.forms['form']['Password'];

var UserName =document.getElementById('UserName_error');
var Password =document.getElementById('Password_error');

UserName.addEventListener('textInput',UserName_error);
Password.addEventListener('textInput',Password_error);

function validated(){
    if(UserName.value.legth<10){
        UserName.style.border="1px soild red";
        UserName_error.style.display="black";
        UserName.focus();
        return false;
    }
     if(Password.value.legth<6){
        Password.style.border="1px soild red";
        Password_error.style.display="black";
        UserName.focus();
        return false;
    }
}

function UserName_Verify(){
    if(UserName.value.legth >=8){
       UserName.style.border="1px soild silver";
       UserName_error.style.display="none";
       return true;
    }
    if(Password.value.legth >=8){
        Password.style.border="1px soild silver";
        Password_error.style.display="none";
        return true;
     }

}