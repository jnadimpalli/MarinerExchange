/**
 * Created by Jitesh on 7/29/2016.
 */
$(document).ready(function(){
    var imgNum = 0;

    $(".left-arrow").click(function(){
        if (imgNum > 0) {
            imgNum -= 1;

            switch (imgNum) {
                case 0:
                    $("#step2-txt").addClass("unselected-txt").removeClass("selected-txt");
                    $("#step1-txt").addClass("selected-txt").removeClass("unselected-txt");

                    $("#step2").fadeTo("slow", .5, function() {
                        $("#step2").addClass("unselected-img").removeClass("selected-img");
                    });
                    $("#step1").fadeTo("slow", 1, function() {
                        $("#step1").addClass("selected-img").removeClass("unselected-img");
                    });
                    break;
                case 1:
                    $("#step3-txt").addClass("unselected-txt").removeClass("selected-txt");
                    $("#step2-txt").addClass("selected-txt").removeClass("unselected-txt");

                    $("#step3").fadeTo("slow", .5, function() {
                        $("#step3").addClass("unselected-img").removeClass("selected-img");
                    });
                    $("#step2").fadeTo("slow", 1, function() {
                        $("#step2").addClass("selected-img").removeClass("unselected-img");
                    });
                    break;
            }
        }
    });

    $(".right-arrow").click(function(){
        if (imgNum < 2) {
            imgNum += 1;

            switch (imgNum) {
                case 1:
                    $("#step1-txt").addClass("unselected-txt").removeClass("selected-txt");
                    $("#step2-txt").addClass("selected-txt").removeClass("unselected-txt");

                    $("#step1").fadeTo("slow", .5, function() {
                        $("#step1").addClass("unselected-img").removeClass("selected-img");
                    });
                    $("#step2").fadeTo("slow", 1, function() {
                        $("#step2").addClass("selected-img").removeClass("unselected-img");
                    });
                    break;
                case 2:
                    $("#step2-txt").addClass("unselected-txt").removeClass("selected-txt");
                    $("#step3-txt").addClass("selected-txt").removeClass("unselected-txt");

                    $("#step2").fadeTo("slow", .5, function() {
                        $("#step2").addClass("unselected-img").removeClass("selected-img");
                    });
                    $("#step3").fadeTo("slow", 1, function() {
                        $("#step3").addClass("selected-img").removeClass("unselected-img");
                    });
                    break;
            }
        }
    });

    $('nav a[href^="#"]').click(function() {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        if ($('.navbar-toggle').css('display') != 'none') {
            // $(".navbar-toggle").trigger("click");
            $('.navbar-collapse').collapse('hide');
        }
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
        return false;
    });
});