var https = require('https');

function getAndPrintHTMLChunks () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };
  
    https.get(requestOptions, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data){
            console.log(data.concat('\n'));
        });
        response.on('end', function(){
            console.log('Response stream completed');
        });
    });
  
  }

  console.log(getAndPrintHTMLChunks());