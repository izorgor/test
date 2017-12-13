var express = require('express')
var app = express()
var cheerio = require('cheerio')

var path = require('path')
var formidable = require('formidable')
var fs = require('fs')
var ncp = require('ncp').ncp

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'upload')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/copy', function (req, res) {
  var temp = req.query.choosed
  ncp.limit = 16
  ncp('templates/' + temp, 'upload/' + temp, function (err) {
    if (err) {
      return console.error(err)
    }
    console.log('done!')
  })

  res.sendFile(path.join(__dirname, 'views/' + temp + '.html'))
})

app.get('/create', function (req, res) {
  res.send('Svg Color: ' + req.query.svgColor + '\n' + 'Video: ' + req.query.videoPos)
})
app.post('/upload', function (req, res) {

  // create an incoming form object
  var form = new formidable.IncomingForm()

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/upload/sidebar/img')

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function (field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name))
  })

  // log any errors that occur
  form.on('error', function (err) {
    console.log('An error has occured: \n' + err)
  })

  // once all the files have been uploaded, send a response to the client
  form.on('end', function () {
    res.end('success')
  })

  // parse the incoming request containing the form data
  form.parse(req)
})

var server = app.listen(3000, function () {
  console.log('Server listening on port 3000')
})
