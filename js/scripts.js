$(document).ready(function() {
  $("#cat").click(function() {
    $("#cat-says").prepend("<li>Meow!</li>");
    $("#dog-says").prepend("<li>Bark!</li>");
  });
  $("#dog").click(function() {
    $("#cat-says").prepend("<li>Meow!</li>");
    $("#dog-says").prepend("<li>Bark!</li>");
  });
});
