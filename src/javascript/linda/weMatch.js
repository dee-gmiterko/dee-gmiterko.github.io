/* eslint-env browser, jquery */

/*$(function () {
    var myAnswers = {
        'php': true,
        'html': true,
        'nette': true,
        'sass': true,
        'css': true,
        'jQuery': true,
        'Foundation': true,
        'JavaScript':true,
        'Java':true,
        'bootstrap': false,
        'C++': true,
        'C': false,
        'R': false
    };

    var kbs = $("#knowledgebase");
    kbs.empty();
    
    var form = $("<form><ul class='questions no-bullet'></ul><input type='submit' /><div class='result'></div></form>");
    kbs.append(form);

    for(var answer in myAnswers) {
        form.find(".questions").append("<li><input id='weMatchQuestion_" + answer + "' type='checkbox' name='matches' value='" +answer+ "'><label for='weMatchQuestion_" + answer + "'>"+answer+"</label></li>");
    }

    form.submit(function(e, t){
        var itsAnswers = form.find("input[name=matches]").get().reduce(function (soFar, input) {
            soFar[input.value] = input.checked;
            return soFar;
        }, {});

        var correct = 0;
        for(answer in myAnswers) {
            correct += myAnswers[answer] == itsAnswers[answer] ? 1 : 0;
        }

        var matchPercent = Math.round(correct / Object.keys(myAnswers).length * 100);

        if(matchPercent > 90) {
            form.find(".result").text("We match "+ matchPercent + "% <3");
        } else {
            form.find(".result").text("We match "+ matchPercent + "%");
        }
        return false;
    });
});*/