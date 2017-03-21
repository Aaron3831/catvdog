$(document).ready(function() {
  $(".panel-heading").click(function() {
    $(this).next().toggle();
  });
});
