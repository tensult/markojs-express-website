require('marko/node-require'); // Allow Node.js to require and load `.marko` files
 
var express = require('express');
var markoExpress = require('marko/express');
var layouts = require('./layouts');
 
var app = express();
 
app.use(markoExpress()); //enable res.marko(template, data)
 
app.get('/dynamic-loading-of-components', function(req, res) {
    res.marko(layouts['dynamically-load-components'], {
        name: req.query.component || "foo",
        color: req.query.color || "green"
    });
});

app.get('/', function(req, res) {
    res.marko(layouts['home']);
});
 
const port = process.argv[2] || 8000;

app.listen(port, () => {
    console.log("http://localhost:" + port);
});