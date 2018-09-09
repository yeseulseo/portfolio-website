console.log ("Welcome to My Portfolio Site! Enjoy!")

$(document).ready(function() {
  $(".project-preview").hover("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
    });
  $(".project-preview").hover("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
