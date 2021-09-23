window.addEventListener("load", function(){

    if(window.innerWidth<1200){
        var divNavmenu=document.querySelector("#menu");
        var divNavuser=document.querySelector(".buttons-section");
        var aUser=document.querySelector("#userlogged");
        var main = document.querySelector('main');
        divNavmenu.classList.add("menuresponsive");
        divNavuser.classList.add("userresponsive");
        
        var buttonMenu = document.querySelector("#buttonMenu");
        buttonMenu.addEventListener("click",function(){
            divNavmenu.classList.add("show-menu");
            divNavuser.classList.add("show-menu");
            aUser.classList.add("style-navmenu");
        })
        divNavmenu.addEventListener('mouseleave',function(){
            divNavmenu.classList.remove("show-menu");
            divNavuser.classList.remove("show-menu");
        })
        main.addEventListener('click',function(){
            divNavmenu.classList.remove("show-menu");
            divNavuser.classList.remove("show-menu");
        })
    }else{
        
        divNavmenu.classList.remove("menuresponsive");
        divNavuser.classList.remove("userresponsive");
        aUser.classList.remove("style-navmenu");
    }
    




})