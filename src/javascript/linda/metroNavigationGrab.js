/* eslint-env browser, jquery */

$.fn.metroNavigationGrab = function (settingsIn) {

    var metroNavigation = this;

    var bindDragging = function (metroNavigation) {

        var navItems = metroNavigation.find('>ul');
        var mover = metroNavigation.find(".mover");
        
        var fixedPos = navItems.offset();

        var addPos = function (pos1, pos2) {
            return {
                top: pos1.top + pos2.top,
                left: pos1.left + pos2.left
            };
        };

        mover.draggable({
            start: function () {
                fixedPos = navItems.offset();
            },
            drag: function (e, ui) {
                navItems.css(addPos(fixedPos, ui.position));
            },
            stop: function (e, ui) {
                navItems.css(addPos(fixedPos, ui.position));
                mover.css({
                    top: 0,
                    left: 0
                });
            }
        });

    };

    metroNavigation.each(function () {
        bindDragging($(this));
    });
};