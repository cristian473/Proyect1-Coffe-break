$(document).ready(function(){
 
    $(window).scroll(function(){
 
        var windowWidth = $(window).width();
 
        if(windowWidth > 800) {
         
            var scroll = $(window).scrollTop();

           

            document.getElementById("intro").style.transform = "translateY("+scroll/0.8+"%)";

            document.getElementById("articulo").style.transform = "translateY(-"+scroll/2.5+"%)";
            document.getElementById("img").style.transform = "translateY("+scroll/30+"%)";


            
        }
    });

    $(window).scroll(function(){
 
        var windowWidth = $(window).width();
 
        if(windowWidth < 800) {
         
            var scroll = $(window).scrollTop();

           

            document.getElementById("intro").style.transform = "translateY(0px)";

            document.getElementById("articulo").style.transform = "translateY(0px)";
            document.getElementById("img").style.transform = "translateY(0px)";


            
        }
    });
    
});