$(document).ready(function() {
  $('.overlay-container').on('mouseenter', function() {
    $(this).find('.overlay-description').fadeIn();
  });
  $('.overlay-container').on('mouseleave', function() {
    $(this).find('.overlay-description').fadeOut();
  });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
