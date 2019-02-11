var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
    var bufferedChunks = "";
    bufferedChunks += html;
    var upperCaseText = bufferedChunks.toUpperCase();
    console.log(upperCaseText);
}

getHTML(requestOptions, printUpperCase); 