jQuery(function ($) {

  $('.templateHolder').each(function () {
    $(this).on('click', function () {
      $('.templateHolder').removeClass('active')
      $(this).addClass('active')
    })
  })

  $('#create').click(function () {
    var parameters = {choosed: $('.active').attr('id')}
    $('#loading-image').show()
    $.get('/copy', parameters, function (data) {
      $('#content').html(data)
      $('#loading-image').hide()
    })
  })



  })