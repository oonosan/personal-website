$(function() {
  $('.scroll-down').click(function() {
    $('html, body').animate({
      scrollTop: $('section.cv').offset().top
    }, 'slow');
    return false;
  });
});

$(function() {
  $('.scroll-down-cv').click(function() {
    $('html, body').animate({
      scrollTop: $('section.portfolio').offset().top
    }, 'slow');
    return false;
  });
});
