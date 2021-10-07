window.addEventListener("load", function () {
    let form= document.querySelector("#form");
    let buttonSub = document.querySelector("#buttonSubmit");
    let inpImg = document.querySelector("#avatar");
    let imgError = document.querySelector("#avatarError");
    let inpName = document.querySelector("#name");
    let nameError = document.querySelector("#nameError");
    let inplastName = document.querySelector("#last_name");
    let lastNameError = document.querySelector("#last_nameError");
    let inpTelephone = document.querySelector("#telephone");
    let telephoneError = document.querySelector("#telephoneError")
    let inpEmail = document.querySelector("#email");
    let emailError = document.querySelector("#emailError");
    let inpPassword = document.querySelector("#password");
    let passwordError = document.querySelector("#passwordError")

    buttonSub.addEventListener('click', function (event) {

        event.preventDefault();
        let error = {}
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        var regex =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (inpImg.value != "") {
            let files = inpImg.files[0];
            if (!(/\.(jpg|png|gif)$/i).test(files.name)) {
                error.avatar = "El archivo a adjuntar no es una imagen"
                /* alert('El archivo a adjuntar no es una imagen'); */
            } else if (files.size > 20000) {
                error.avatar = "El peso de la imagen no puede exceder los 200kb"
                /* alert('El peso de la imagen no puede exceder los 200kb') */
            }
        } 
        /* input name */
        if(inpName.value==""){
            error.name="Este campo es obligatorio"
        }else if(inpName.value.length<2){
            error.name="El nombre es muy corto"
        }

        /* last name */
        if(inplastName.value==""){
            error.lastName="Este campo es obligatorio"
        }else if(inplastName.value.length<2){
            error.lastName="El nombre es muy corto"
        }
        /* telefono */
        if(inpTelephone.value==""){
            error.telephone="Este campo es obligatorio"
        }else if(inpTelephone.value.length<10){
            error.telephone="No cumple con el estandar"
        }
         /* email */
         if(inpEmail.value==""){
            error.email="Este campo es obligatorio"
        }else if(!regex.test(inpEmail.value)){
            error.email = "Ingrese un email valido"
        }
         /* password */
         if(inpPassword.value==""){
            error.password="Este campo es obligatorio"
        }else if(inpPassword.value.length<8){
            error.password="Debe de ser minimo 8 caracteres"
        } else if(!regularExpression.test(inpPassword.value)){
            error.password= "Faltan caracteres espesiales ejemplo: -jai12GH#$- "
        }


        /* imprimir errores */
        if (Object.keys(error).length >= 1) {
            imgError.innerText = (error.avatar) ? error.avatar : "";
            nameError.innerText = (error.name) ? error.name : "";
            lastNameError.innerText = (error.lastName) ? error.lastName : "";
            telephoneError.innerText= (error.telephone)? error.telephone:"";
            emailError.innerText=(error.email)? error.email:"";
            passwordError.innerText=(error.password)? error.password:"";
           /*  errorPrice.innerText=(error.price)? error.price: "";
            errorStock.innerText=(error.stock)? error.stock: "";
            errorSelectSize.innerText=(error.size)? error.size: "";
            errorColor.innerText=(error.color)? error.color: ""; */
        } else {
            /* errorCode.innerText = "sigue" */
            form.submit();
        }


    })
})