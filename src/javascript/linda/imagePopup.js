/* eslint-env browser, jquery */

$.fn.imagePopup = function (e) {
    var imageContainer = this;
    var image = imageContainer.find("img");

    var open = function (e) {
        
        var url = imageContainer.attr("href");

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

        imageContainer.append(insideImage);

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

        insideImage.mousemove((e) => {
            center(e);
        });

        center(e);
    };

    var close = function () {
        
        imageContainer.find("div").animate({
            top: image.offset().top - $(window).scrollTop(),
            left: image.offset().left - $(window).scrollLeft(),
            width: image.width(),
            height: image.height()
        }, 300, null, function () {
            imageContainer.find("div").remove();
        });
    };

    imageContainer.click(function(e) {
        e.preventDefault();

        if (imageContainer.find("div").size() === 0) {
            open(e);
        } else {
            close();
        }

        return false;
    });
};