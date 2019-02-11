var https = require('https');

function getHTML (options, callback) {
    
    
    
    https.get(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', callback);
        response.on('end', function(){
            console.log("Successfully completed");
        });            
    });
}

function printHTML (html) {
    var bufferedChunks = "";
    bufferedChunks += html;
    console.log(bufferedChunks);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  console.log(getHTML(requestOptions, printHTML));