$(function() {
  $('.scroll-down').click(function() {
    $('html, body').animate({
      scrollTop: $('section.cv').offset().top
    }, 'slow');
    return false;
  });
});
