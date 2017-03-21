$(document).ready(function() {
  $("#meow").click(function() {
    $("#cat-says").prepend("<li>Meow!</li>");
    $("#dog-says").prepend("<li>Bark!</li>");
    $("#cat-says").before("<li>Hiss!</li>");
    $("#dog-says").before("<li>Growl!</li>");
    $("#cat-says").append($("<img>",{src:"img/cutekittycat.jpg"}));
    $("img").click(function() {
      $(this).remove();
    });
  });
  $("#bark").click(function() {
    $("#cat-says").prepend("<li>Meow!</li>");
    $("#dog-says").prepend("<li>Bark!</li>");
    $("#cat-says").after("<li>Hiss!</li>");
    $("#dog-says").after("<li>Growl!</li>");
    $("#dog-says").append($("<img>",{src:"img/dog.jpg"}));
    $("img").click(function() {
      $(this).remove();
    });
  });
});
