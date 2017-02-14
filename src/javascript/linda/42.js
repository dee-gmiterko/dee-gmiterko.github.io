/* eslint-env browser, jquery */

import ReactGA from 'react-ga';

$(function () {
    var pressedFour = false;
    var title = $("#title-screen h1");

    var htmlreplace = function (a,b,element){if(!element)element=document.body;var nodes=element.childNodes;for(var n=0;n<nodes.length;n++){if(nodes[n].nodeType===Node.TEXT_NODE){nodes[n].textContent=nodes[n].textContent.replace(new RegExp(a,'gi'),b);}else{htmlreplace(a,b,nodes[n]);}}};

    var fourtyTwo = function () {
        htmlreplace('Ienze','Linda');
        title.addClass('butterfly-effect');

        ReactGA.event({
          category: 'User',
          action: '42'
        });
    };

    $('body').keydown(function (e) {

        if (e.which === 100 || e.which === 52) { // 4
            pressedFour = true;
        } else {
            if (pressedFour && (e.which === 98 || e.which === 50)) { // 2
                fourtyTwo();
            }
            pressedFour = false;
        }
    });
});