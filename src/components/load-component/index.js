const components = require('../index');

module.exports = async function(input, out) {
    const componentId = input.componentId;
    if (!components[componentId]) {
        console.error(componentId, "component doesn't exist");
        return;
    } else {
        out.write(`<div class='${componentId}'>`);
        try {
            await components[componentId].render(input.data, out)
        } catch (err) {
            console.error(`Error occurred while loading component=${componentId} with data=${input}`, err);
        }
        out.write('</div>');
    }
};