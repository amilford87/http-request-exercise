var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
    var bufferedChunks = "";
    bufferedChunks += html;
    var upperCaseText = bufferedChunks.toLowerCase();
    console.log(upperCaseText);
}

getHTML(requestOptions, printLowerCase); 