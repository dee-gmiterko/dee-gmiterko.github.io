/* eslint-env browser, jquery */

$.fn.slowAnchorScroll = function(){

    var link = this;

    link.on('click', function (e) {
        // e.preventDefault();

        var target = this.target;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
};