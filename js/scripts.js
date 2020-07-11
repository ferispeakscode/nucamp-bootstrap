 /* JS "ready function", shorthand for: $(document).ready(function() {...}*/
 $(function() {
     //Play/Pause toggle for carousel
    $(".carousel").carousel( {interval: 2000 } );
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    //Sample code for single carousel-play button
    //$("#carouselPlay").click(function() {
    //    $(".carousel").carousel("cycle");
    //});

    //jQuery to show reserve modal
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    });

    //jQuery to show login modal
    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    });

});