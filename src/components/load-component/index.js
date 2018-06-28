const components = require('../index');

module.exports = function (input, out) {
    const componentName = input.name;
    if (!components[componentName]) {
        console.error(componentName, "component doesn't exist");
        return;
    } else {
        out.write(`<div class='${componentName}'>`);
        try {
            components[componentName].render(input.data, out);
        } catch (err) {
            console.error(`Error occurred while loading component=${componentName} with data=${data}`, err);
        }
        out.write('</div>');
    }
};