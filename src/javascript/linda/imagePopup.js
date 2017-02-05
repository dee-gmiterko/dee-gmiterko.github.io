/* eslint-env browser, jquery */

$.fn.imagePopup = function () {
    var image = this;

    var open = function (image, e) {
        
        var url = image.attr("href");

        var insideImage = $("<div></div>");
        insideImage.css({
            'background-image': 'url(' + url + ')',
            'background-size': 'cover',
            'z-index': '9999',
            position: 'fixed',
            top: image.offset().top - $(window).scrollTop(),
            left: image.offset().left - $(window).scrollLeft(),
            width: image.width(),
            height: image.height()
        });

        image.append(insideImage);

        insideImage.animate({
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        }, 300);

        var center = function (e) {
            var x = (e.pageX - $(window).scrollLeft()) / $(window).width() * 100;
            var y = (e.pageY - $(window).scrollTop()) / $(window).height() * 100;

            insideImage.css('background-position', x + '% ' + y + '%');
        }

        insideImage.mousemove(function (e) {
            center(e);
        });

        center(e);
    };

    var close = function () {
        image.find("div").animate({
            top: image.offset().top - $(window).scrollTop(),
            left: image.offset().left - $(window).scrollLeft(),
            width: image.width(),
            height: image.height()
        }, 300, null, function () {
            image.find("div").remove();
        });
    };

    image.click(function (e) {

        if (image.find("div").size() === 0) {
            open(image, e);
        } else {
            close(image);
        }

        return false;
    });
};