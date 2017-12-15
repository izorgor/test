$("#backgroundColor, #svgColor").spectrum({
  preferredFormat: "hex",
  showInput: true,
  showPalette: true,
});



var volume = {

  init: function () {
    $('#volume').on('click', volume.change);
    $('#volume .control').on('mousedown', volume.drag);
  },

  change: function (e) {
    e.preventDefault();
    var percent = helper.getFrac(e, $(this)) * 100;
    $('#volume .control').animate({width: percent + '%'}, 100);
    volume.update(percent);
  },

  update: function (percent) {
    $('.vol-box').text(Math.round(percent) + '%');
    $('#videoPosition').val(Math.round(percent));
    //console.log(percent);
  },

  drag: function (e) {
    e.preventDefault();
    $(document).on('mousemove', volume.moveHandler);
    $(document).on('mouseup', volume.stopHandler);
  },

  moveHandler: function (e) {
    var holderOffset = $('#volume').offset().left,
        sliderWidth  = $('#volume').width(),
        posX         = Math.min(Math.max(0, e.pageX - holderOffset), sliderWidth);

    $('#volume .control').width(posX);
    volume.update(posX / sliderWidth * 100);
  },

  stopHandler: function () {
    $(document).off('mousemove', volume.moveHandler);
    $(document).off('mouseup', volume.stopHandler);
  }

};

var helper = {
  getFrac: function (e, $this) {
    return (e.pageX - $this.offset().left) / $this.width();
  }
};

volume.init();

$(document).on('click', '.upload-button', function () {

  $(this).prev().click();

});
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
        backgroundColor: $('#backgroundColor').val(),
        videoPosition: $('#videoPosition').val(),
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