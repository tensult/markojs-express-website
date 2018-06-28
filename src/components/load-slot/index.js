const components = require('../index');

module.exports = function (input, out) {
    const pageData = input.slotData.pageData;
    const slotName = input.slotName;
    const template = pageData.template;
    const widgetsMap = pageData.widgetsMap;
   
    const widgetId = getWidgetId(template, slotName);
    if (!widgetId || !widgetsMap[widgetId]) {
        console.error(`No widget found for template=${template} and slotName=${slotName}`);
        return;
    }
    const widgetObject = widgetsMap[widgetId];
    if (widgetObject.componentId === 'wg-slot') {
        throw new Error('slot widget can not be loaded dynamically');
    }
    const widgetAttributes = Object.assign(widgetObject.attributes || {}, pageData);
    if (!components[widgetObject.componentId]) {
        // console.error(widgetObject.componentId, "component doesn't exist");
        return;
    } else {
        out.write(`<div class='${slotName}'>`);
        out.write(`<div class='${widgetObject.componentId}'>`);
        try {
            components[widgetObject.componentId].render(widgetAttributes, out);
        } catch (err) {
            // console.error(`Error occurred while loading widgetName=${widgetObject.componentId}`, err);
        }
        out.write('</div>');
        out.write('</div>');
    }
};

function getWidgetId(template, slotName) {
    if (template && template.widgetConfig && template.widgetConfig[slotName]) {
        return template.widgetConfig[slotName];
    }
}