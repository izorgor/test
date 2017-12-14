$(document).on('click', '#createPreview', function () {

  var file  = $('#backgroundImg').get(0).files,
      video = $('#videoUpload').get(0).files;

    // create a FormData object which will be sent as the data payload in the

    var formData = new FormData(),
        file     = file[0],
        video    = video[0];

    // add the files to formData object for the data payload
    formData.append('background', file, 'background.jpg');
    formData.append('video', video, 'video.mp4');

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function (data) {
        console.log('upload successful!\n' + data);

        var parameters = {
          videoPos: $('#videoPosition').val(),
          svgColor: $('#svgColor').val(),
          clickUrl: $('#clickUrl').val(),
          backgroundColor: $('#backgroundColor').val()
        };

        $.get('/create', parameters, function (data) {
          $('.previewBox').fadeOut('fast', function () {
            $('#loading-image').hide();
            $('#preview').attr('src', function (i, val) { return val; });
            $('.previewBox').fadeIn('slow');
          });

        });

      }, xhr: function () {

        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function (evt) {
          if (evt.lengthComputable) {

            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.progress-bar').text(percentComplete + '%');
            $('.progress-bar').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
              $('.progress-bar').html('Done');
            }
          }
        }, false);
        return xhr;
      }
    });

});