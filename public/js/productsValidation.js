window.addEventListener("load", function(){
    
let form= document.querySelector("#frm1");
let btn=document.querySelector("#button");
let errorCode=document.querySelector("#codeError");
let inpCode= document.querySelector("#code");

btn.addEventListener('click',function(event){
    event.preventDefault();
    let error={};
    if(inpCode.value==""){
        /* errorCode.innerText="Ingrese el codigo del Producto" */
        error.code="campo de codigo"
    }else if(inpCode.value.length<8){
        /* errorCode.innerText="Debe de contener minimo 8 caracteres"; */
        error.code="Debe de contener minimo 8 caracteres"
    }

    if(Object.keys(error).length>=1){
        errorCode.innerText=(error.code)?error.code:"";
    }else{
        errorCode.innerText="sigue"
    }
    
})
/* let inpName=document.querySelector("input#name");
let inpDescription= docmuent.querySelector("input#description");
let inpImg= documetn.querySelector("input#imgProduct");
let selectorCategory= document.querySelector("select#category");
let selectorClothing= document.querySelector("select#clothing_brand");
let inpPrice=document.querySelector("input#sale_price");
let inpStock=document.querySelector("input#stock");
let selectorSize= document.querySelector("select#size");
let inpColor= document.querySelector("input#color"); */

})