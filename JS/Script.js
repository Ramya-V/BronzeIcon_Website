/* ==============================================
|   |   |   |   Navigation                              
================================================= */
$(function () {

    //happens at page load
    showhidenav();

    //happens at windows scroll
    $(window).scroll(function(){
        showhidenav()
    });

    function showhidenav(){
        if( $(window).scrollTop() > 50){
            //show white now
            $("nav").addClass("white-nav-top");
         }
         else{
             //Hide white now
             $("nav").removeClass("white-nav-top");
            }
    }
});

