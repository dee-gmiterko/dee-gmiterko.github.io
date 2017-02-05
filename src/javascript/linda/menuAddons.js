/* eslint-env browser, jquery */

$.fn.menuAddons = function () {
    
    var menu = this;

    menu.css('height', $("body").height());

    // $('html, body').stop().animate({
    //     'scrollTop': $("#content").offset().top
    // }, 10, 'swing');

    var centerMask = function () {
        $(".mask").css({
            top: $("body").height() / 2 - 300,
            left: $("body").width() / 2 - 300
        });
    }

    menu.mousemove(function (e) {
        $(".mask").css({
            top: e.pageY - 300,
            left: e.pageX - 300
        });
    });

    menu.mouseleave(function (e) {
        centerMask();
    });

    centerMask();

    //passive switching
    menu.find(".passiveSwitch").click(function () {
        if ($(".metroNavigation").hasClass("active")) {
            $(this).text("Advanced menu");
        } else {
            $(this).text("Simple menu");
        }
        $(".metroNavigation").toggleClass("active passive");
    });
};