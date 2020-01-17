// select "header" id element

// .ready()

// bind a click event!
// "what causes the event": Event Listener
// "when the even fires": Event Handler (function)
$("#header").click(function() {
    // when header element clicked, console.log the color css property
    // "getter"
    
    // TODO: use the "getter" to assign a new color value
    $("#header-text").addClass("red");

    var elementColor = $("#header").css("color");

    $("#funny-pic").hide(500);
    console.log(elementColor);
});

$("#mode-toggle").click(function() {
    var href = $("#css-toggle").attr("href");
    var backup = $("#css-toggle").attr("backup");

    $("#css-toggle").attr("href", backup);
    $("#css-toggle").attr("backup", href);
});

$("#pic-toggle").click(function() {
    // event handler! (something that happens as the result of the event firing!)
    var imgSrc = $("#funny-pic").attr("src");
    var backupSrc = $("#funny-pic").attr("backup");

    // setter!  set img to jtt
    $("#funny-pic").attr("src", backupSrc)
    $("#funny-pic").attr("backup", imgSrc)
});
// handling events!
// what kinds of events (clicking, typing, hover, )