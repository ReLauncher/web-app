var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('./'));

var backendurl_filetext = "var backendvariable = '" + process.env.BACK_END_URL+"';";
fs.writeFile("scripts/backendurl.js", backendurl_filetext, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(backendurl_filetext);
}); 

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on '+port);
});
