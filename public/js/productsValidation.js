window.addEventListener("load", function () {

    let form= document.querySelector("#frm1");
    let btn = document.querySelector("#button");
    let inpCode = document.querySelector("#code");
    let errorCode = document.querySelector("#codeError");
    let inpName = document.querySelector("#name");
    let errorName = document.querySelector("#nameError");
    let inpDescription = document.querySelector("#description");
    let errorDescription = document.querySelector("#descriptionError")
    let inpImg = document.querySelector("#imgProduct");
    let inpImgDB=document.querySelector("#imgdb");
    let errorImagen = document.querySelector("#imgProductError");
    let selectorCategory= document.querySelector("#category");
    let errorCategory = document.querySelector("#categoryError");
    let selectorClothing= document.querySelector("select#clothing_brand");
    let errorClothing= document.querySelector("#clothing_brandError");
    let inpPrice=document.querySelector("#sale_price");
    let errorPrice= document.querySelector("#sale_priceError");
    let inpStock=document.querySelector("#stock");
    let errorStock= document.querySelector("#stockError");
    let selectorSize= document.querySelector("#size");
    let errorSelectSize= document.querySelector("#sizeError");
    let inpColor= document.querySelector("#color");
    let errorColor= document.querySelector("#colorError");

    btn.addEventListener('click', function (event) {
        event.preventDefault();
        let error = {};
        /* input codigo */
        if (inpCode.value == "") {
            /* errorCode.innerText="Ingrese el codigo del Producto" */
            inpCode.focus();
            error.code = "Ingrese el codigo del Producto2"
        } else if (inpCode.value.length < 8) {
            /* errorCode.innerText="Debe de contener minimo 8 caracteres"; */
            error.code = "Debe de contener minimo 8 caracteres"
        }
         /* input Nombre */
        if (inpName.value == "") {
            error.name = "Ingrese su Nombre"
        } else if (inpName.value.length < 2) {
            error.name = "Debe de ser mayor a 2 caracteres"
        }
        if (inpDescription.value == "") {
            error.description = "Ingrese una descripción"
        } else if (inpDescription.value.length < 20) {
            error.description = "Debe de ser mayor a 20 caracteres"
        }
         /* input imagen producto */
        if(inpImgDB.value==""){
        if (inpImg.value != "") {
            let files = inpImg.files[0];
            if (!(/\.(jpg|png|gif)$/i).test(files.name)) {
                error.image = "El archivo a adjuntar no es una imagen"
                /* alert('El archivo a adjuntar no es una imagen'); */
            } else if (files.size > 204800) {
               /*  console.log(files.size) */
                error.image = "El peso de la imagen no puede exceder los 200kb"
                /* alert('El peso de la imagen no puede exceder los 200kb') */
            }
        } else {
            error.image = "No se adjunto imagen"
        }}
         /* select categoria */
         if (selectorCategory.value == "") {
            error.category = "Seleccione una categoria"
        } 
         /* select clothing */
         if (selectorClothing.value == "") {
            error.clothing = "Seleccione una marca de ropa"
        } 
        /* inp precio*/
        if (inpPrice.value == "") {
            error.price = "Coloca el costo de venta"
        } 
        /* inp stock*/
        if (inpStock.value == "") {
            error.stock = "Coloca el stock de venta"
        } 
        /* inp stock*/
        if (selectorSize.value == "") {
            error.size = "Coloca el tamaño"
        } 
        /* inp stock*/
        if (inpColor.value == "") {
            error.color = "Coloca el color"
        } 


         /* imprimir errores */
        if (Object.keys(error).length >= 1) {
            errorCode.innerText = (error.code) ? error.code : "";
            errorName.innerText = (error.name) ? error.name : "";
            errorDescription.innerText = (error.description) ? error.description : "";
            errorImagen.innerText= (error.image)? error.image:"";
            errorCategory.innerText=(error.category)? error.category:"";
            errorClothing.innerText=(error.clothing)? error.clothing:"";
            errorPrice.innerText=(error.price)? error.price: "";
            errorStock.innerText=(error.stock)? error.stock: "";
            errorSelectSize.innerText=(error.size)? error.size: "";
            errorColor.innerText=(error.color)? error.color: "";
        } else {
            /* errorCode.innerText = "sigue" */
            form.submit();
        }

    })
    /* 
    
    
    */

})