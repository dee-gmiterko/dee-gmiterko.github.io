/* eslint-env browser, jquery */

$.fn.metroNavigation = function (settingsIn) {

    var metroNavigation = this;

    var settings = $.extend({}, {
        enabled: true,
        only_connected_nodes: true,
        move_speed: 800,
        auto_skip_to_content: true,
        skip_to_content_speed: 1000
    }, settingsIn);

    if (settings.auto_skip_to_content) {
        if (window.location.hash === '#m') {
            $("html, body").animate({scrollTop: $("body").height()}, settings.skip_to_content_speed);
        } else {
            $("html, body").animate({scrollTop: $("body").height()}, 0);
        }
    }

    var findConnectedNodes = function (metroNavigation, node) {
        var connectedNodes = [];

        if (settings.only_connected_nodes) {
            connectedNodes.push(node);

            var p = node.parents('li');
            if (p.size() > 0)
                connectedNodes.push(p.get(0));

            node.children('ul').children('li').each(function (index, node) {
                connectedNodes.push(node);
            });
        } else {

            metroNavigation.find('li').each(function (index, node) {
                connectedNodes.push(node);
            });
        }

        return connectedNodes;
    };

    var findNodeByMouse = function (metroNavigation, activeNode, x, y) {

        var nodes = findConnectedNodes(metroNavigation, activeNode);

        var closestNode = null;
        var closestNodeDistance = -1;

        $.each(nodes, function (index, node) {

            var jnode = $(node);

            var no = jnode.offset();

            var dx = Math.abs(x - no.left);
            var dy = Math.abs(y - no.top);
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (closestNodeDistance < 0 || distance < closestNodeDistance) {
                closestNodeDistance = distance;
                closestNode = jnode;
            }
        });

        return closestNode;
    };

    var findActiveNode = function (metroNavigation) {
        var active = metroNavigation.find('li.active');
        if (active.length) {
            return active;
        } else {
            var newActive = metroNavigation.find('li').first();
            newActive.addClass("active");
            return newActive;
        }
    };

    var centerOnNode = function (metroNavigation, node, quick) {

        var navItems = metroNavigation.children('ul');

        var x = metroNavigation.width() / 2 - (node.offset().left - navItems.offset().left);
        var y = metroNavigation.height() / 2 - (node.offset().top - navItems.offset().top);

        if (quick) {
            navItems.css({
                left: x,
                top: y
            });
        } else {
            navItems.animate(
                    {left: x, top: y},
            settings.move_speed,
                    function () {
                    }
            );
        }
    };

    var assemble = function (metroNavigation) {

        metroNavigation.removeClass('passive');
        metroNavigation.addClass('active');

        var activeNode = findActiveNode(metroNavigation);

        centerOnNode(metroNavigation, activeNode, true);

        metroNavigation.click(function (event) {

            var x = event.pageX, y = event.pageY;

            var activeNode = findActiveNode(metroNavigation);

            var closestNode = findNodeByMouse(metroNavigation, activeNode, x, y);

            activeNode.removeClass('active');
            closestNode.addClass('active');

            if (closestNode) {
                centerOnNode(metroNavigation, closestNode, false);
            }
        });

        metroNavigation.find("a").click(function () {

            var activeNode = findActiveNode(metroNavigation);
            var newActiveNode = $(this).parent();

            activeNode.removeClass('active');
            newActiveNode.addClass('active');

            centerOnNode(metroNavigation, newActiveNode, false);

        });

        var reflow = function (quick) {
            var activeNode = findActiveNode(metroNavigation);
            centerOnNode(metroNavigation, activeNode, quick);
        }
        $(window).resize(function () {
            reflow(true);
        });
        $(".split").on("dragstop", function () {
            reflow(false);

            metroNavigation.find(".mover").css({
                bottom: 0,
                right: 0
            });
        });
    };

    metroNavigation.each(function () {
        assemble($(this));
    });
};