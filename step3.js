var https = require('https');

var bufferedChunks = "";

function getAndPrintHTML (options) {

    https.get(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data){
            bufferedChunks += data;
        });
        response.on('error', function(){
            console.log('There has been an error');
        });
        response.on('end', function(){
            console.log(bufferedChunks.concat());
            console.log('Response stream completed');
        });
    });
  
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);