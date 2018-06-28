require('marko/node-require'); // Allow Node.js to require and load `.marko` files

const express = require('express');
const markoExpress = require('marko/express');
const layouts = require('./layouts');

// Ideally should be loaded using API
const templates = require('../data/templates');
const widgets = require('../data/widgets');

const app = express();

app.use(markoExpress()); //enable res.marko(template, data)

app.get('/dynamic-loading-of-components', function (req, res) {
    res.marko(layouts['dynamically-load-components'], {
        componentId: req.query.componentId || "foo",
        color: req.query.color || "green"
    });
});

app.get('/', function (req, res) {
    const layoutId = templates.home.layoutId;
    res.marko(layouts[layoutId], preparePageData(templates.home));
});

app.get('/colors', function (req, res) {
    res.redirect("/colors/green");
});

app.get('/colors/:color', function (req, res) {
    const color = req.params.color || "green";
    const layoutId = templates[color].layoutId;
    res.marko(layouts[layoutId], preparePageData(templates[color]));
});

const port = process.argv[2] || 8000;

app.listen(port, () => {
    console.log("http://localhost:" + port);
});

function preparePageData(template) {
    return {
        template: template,
        widgetsMap: getWidgetsMapOfTemplate(template)
    }
}

function getWidgetsMapOfTemplate(template) {
    const templateWidgets = template.widgetConfig;
    if(!templateWidgets) {
        return {};
    }

    
    return Object.keys(templateWidgets).map((slotName) => {
        return {
            id: templateWidgets[slotName], 
            widget : widgets[templateWidgets[slotName]]
        }
    }).reduce((widgetsMap, widgetMap) => {
        widgetsMap[widgetMap.id] = widgetMap.widget;
        return widgetsMap;
    }, {})
}