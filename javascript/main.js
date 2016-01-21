$(window).scroll(function() {
  if ($(window).scrollTop() = 0) {
    $('nav').addClass('backchange');
  } else {
    $('nav').removeClass('backchange');
  }
})
