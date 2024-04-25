$(document).ready(function(){

    $("#cardw").mouseenter(function(){
        $("#cardw").animate({
            opacity: '0.5',
            height: '800px',
            width: '500px'
          });
    });
    $("#cardw").mouseleave(function(){
        $("#cardw").animate({
            opacity: '1',
            height: '200px',
            width: '440px',

            
          });
    });

});