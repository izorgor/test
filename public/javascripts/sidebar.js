$(document).on('click', '#createPreview', function () {

  var file = $('#backgroundImg').get(0).files
  var video = $('#videoUpload').get(0).files

  if (file.length > 0 || video.length > 0) {
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData()
    var file = file[0]
    var video = video[0]

    // add the files to formData object for the data payload
    formData.append('background', file, 'background.jpg')
    formData.append('video', video, 'video.mp4')

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function (data) {
        console.log('upload successful!\n' + data)
      }, xhr: function () {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest()

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function (evt) {

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total
            percentComplete = parseInt(percentComplete * 100)

            // update the Bootstrap progress bar with the new percentage
            $('.progress-bar').text(percentComplete + '%')
            $('.progress-bar').width(percentComplete + '%')

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
              $('.progress-bar').html('Done')
            }

          }

        }, false)

        return xhr
      }

    })
  }

  var parameters = {videoPos: jQuery('#videoPosition').val(), svgColor: jQuery('#svgColor').val(), clickUrl: jQuery('#clickUrl').val()}
  console.log(parameters)

  $.get('/create', parameters, function (data) {
    $('#loading-image').hide()
    console.log(data)
  })

})