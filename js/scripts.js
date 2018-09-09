$(document).ready(function() {
  $(".overlay-container").on("mouseenter", function() {
    $(this).find(".overlay-description").fadeIn();
    });
  $(".overlay-container").on("mouseleave", function() {
    $(this).find(".overlay-description").fadeOut();
    });
});
