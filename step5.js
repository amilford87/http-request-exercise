var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
    var bufferedChunks = "";
    bufferedChunks += html;
    console.log(bufferedChunks);
  }

  console.log(getHTML(requestOptions, printHTML));