const serveStatic = require('serve-static');
const login = require('./frontend/pages/login/index');
const isProd = false;
require('marko/node-require');
require('lasso').configure({
    "plugins": [{
            "plugin": "lasso-marko"

        },        
        {
            "plugin": "lasso-sass",
            "config":{
                "includePaths":["./node_modules"]
            }
        }
    ],
    "fileWriter": {
        "outputDir": `static`,
        "fingerprintsEnabled": isProd,
        "urlPrefix": "/static"


    },
    "minify": isProd,
    "resolveCssUrls": true,
    "bundlingEnabled": isProd,
    "bundles": [

    ]
});

const express = require("express");
let app = express();

app.use('/static', serveStatic('static'));

app.get('/lasso-components',login.loginPage);
const port = 8000
let server = app.listen(port, () => {
    console.log('server started at port', port);
    if (process.send) {
        process.send('online');
    }
});