$(function() {
  $('.scroll-down-home').click(function() {
    $('html, body').animate({
      scrollTop: $('section.welcome').offset().top
    }, 'slow');
    return false;
  });
});

$(function() {
  $('.scroll-down').click(function() {
    $('html, body').animate({
      scrollTop: $('section.cv').offset().top
    }, 'slow');
    return false;
  });
});

$(function() {
  $('.scroll-down-portfolio').click(function() {
    $('html, body').animate({
      scrollTop: $('section.portfolio').offset().top
    }, 'slow');
    return false;
  });
});

$(function() {
  $('.scroll-down-contact').click(function() {
    $('html, body').animate({
      scrollTop: $('footer').offset().top
    }, 'slow');
    return false;
  });
});
