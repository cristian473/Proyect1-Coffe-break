$(document).ready(function(){

        $ ('.contenedor .menu a').each(function(index, elemento){
            $(this).css({
                'top':'-200px'
            });

            $(this).animate ({
                top:'0'

            }, 2000 + (index * 500));

        });

       var windowWidth = $(window).width();

       if(windowWidth > 800){
            $('header .intro').css({
                opacity:0,
                marginTop: 0
            
            });

            $('header .intro').animate({
                opacity:1,
                marginTop:'-52px'
            }, 1500);
        

        var  acercade = $('#aderca-de').offset(),
                menu = $('#menu').offset(),
                galeria = $('#galeria').offset(),
                ubicacion = $('#ubicacion').offset();

            $('#btn-acercade').on('click',function(e){
                e.preventDefault();
                $('html, body').animate ({
                    scrollTop: 300
                },500);
            });

            $('#btn-menu').on('click',function(e){
                e.preventDefault();
                $('html, body').animate ({
                    scrollTop: 880
                },500);
            });

            $('#btn-galeria').on('click',function(e){
                e.preventDefault();
                $('html, body').animate ({
                    scrollTop: 1450
                },500);
            });

            $('#btn-ubicacion').on('click',function(e){
                e.preventDefault();
                $('html, body').animate ({
                    scrollTop: 2150
                },500);
            });
        }
    

        if (windowWidth < 800 && windowWidth > 400){

            var  acercade = $('#aderca-de').offset(),
            menu = $('#menu').offset(),
            galeria = $('#galeria').offset(),
            ubicacion = $('#ubicacion').offset();

        $('#btn-acercade').on('click',function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: 300
            },500);
        });

        $('#btn-menu').on('click',function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: 1000
            },500);
        });

        $('#btn-galeria').on('click',function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: 2270
            },500);
        });

        $('#btn-ubicacion').on('click',function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: 2877
            },500);
        });

    }   

        if (windowWidth < 400){

            var  acercade = $('#aderca-de').offset(),
            menu = $('#menu').offset(),
            galeria = $('#galeria').offset(),
            ubicacion = $('#ubicacion').offset();

        $('#btn-acercade').on('click',function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: 289
            },500);
        });

        $('#btn-menu').on('click',function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: 1017
            },500);
        });

        $('#btn-galeria').on('click',function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: 2342
            },500);
        });

        $('#btn-ubicacion').on('click',function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: 2847
            },500);
        });

    }   


    


 });