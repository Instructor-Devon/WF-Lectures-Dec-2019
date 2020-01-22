// window! AKA global scope!
$("button").click(function() {
    // event handler!
    // when button is clicked,
    // replace text of all buttons with
    // "I was clicked!"
    console.log($(this));
    $(this).parent().append("<p class='hover-me'>I was GENERATED!</p>");
});

// using '.on()' to attach events to "DYNAMICALLY" generated elements
$(".btn-wrapper").on("mouseenter", ".hover-me", function(){
    // hover in
    $(this).addClass("cool-fx");
});
$(".btn-wrapper").on("mouseleave", ".hover-me", function(){
    // hover in
    $(this).removeClass("cool-fx");
});
// $(".hover-me").mouseenter(function(){
//     // hover in
//     $(this).addClass("cool-fx");
// }).mouseleave(function(){
//     // hover out
//     $(this).removeClass("cool-fx");
// });

var footballPlayer = {
    name: "Richard Sherman",
    team: "49ers",
    catchphrase: function() {
        console.log(this);
        console.log(this.name, this.team);
    }
};