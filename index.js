$('.box-wrapper').on('click', function() {
  $(this).toggleClass('pill-bg');
  $('body').toggleClass('mode-bg');
  $('.box').toggleClass('move');
  $('.box img').toggleClass('initial');
  $('.text-on, .text-off').toggleClass('hide');
});