window.addEventListener("load", function () {

    let form= document.querySelector("#form");
    let buttonSub = document.querySelector("#buttonSubmit");
    let inpEmail = document.querySelector("#email");
    let emailError = document.querySelector("#emailError");
    let inpPassword = document.querySelector("#password");
    let passwordError = document.querySelector("#passwordError");


    buttonSub.addEventListener('click', function (event) {
        
        event.preventDefault();
        var regex =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(inpEmail.value==""){
            emailError.innerText="Este campo es obligatorio"
        }else if(!regex.test(inpEmail.value)){
            emailError.innerText= "Ingrese un email valido"
        }else{
            emailError.innerText="";
        }
        if(inpPassword.value==""){
            inpPassword.focus();
            passwordError.innerText= "Este campo es obligatorio"
        }else{
            form.submit();
        }


    })






})