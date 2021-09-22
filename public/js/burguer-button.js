window.addEventListener("load", function(){

    if(window.innerWidth<1200){
        var divNavmenu=document.querySelector("#menu");
        var divNavuser=document.querySelector(".buttons-section");
        var aUser=document.querySelector("#userlogged");
        divNavmenu.classList.add("menuresponsive");
        divNavuser.classList.add("userresponsive");
        aUser.classList.add("style-navmenu");
    }else{
        
        divNavmenu.classList.remove("menuresponsive");
        divNavuser.classList.remove("userresponsive");
    }
    




})