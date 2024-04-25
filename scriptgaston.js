$(document).ready(function(){

    $("#1").mouseenter(function(){
        $("#1").animate({  
            opacity: '1',
            height: '50px'
          });
    });

    $("#1").mouseleave(function(){
        $("#1").animate({     
            opacity: '0.76',
            height: '40px',
            position: 'fixed'
          });
    });

});