$(function () {
  $('.templateHolder').each(function () {
    $(this).on('click', function () {
      $('.templateHolder').removeClass('active');
      $(this).addClass('active');
    });
  });

  $('#create').on('click', function () {
    $('#loading-image').show();
    var parameters = {choosed: $('.active').attr('id')};

    $.get('/copy', parameters, function (data) {
      console.log('imam data');
      $('#content').fadeOut('fast', function () {
        $('#content').html(data);
        $('iframe').attr('src', parameters.choosed);
        $('#loading-image').hide();
        $('#content').fadeIn('slow');
        $('#backgroundImg').val(' ');
      });
    });
  });

});

function debounce (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};