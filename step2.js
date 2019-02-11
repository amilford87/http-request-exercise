var https = require('https');


var bufferedChunks= "";

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    https.get(requestOptions, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data){
            bufferedChunks += data;
        });
        response.on('end', function(){
            console.log(bufferedChunks);
            console.log('Response stream completed');
        });
    });
  
  }

  console.log(getAndPrintHTML());