# markojs-express-website
We can design highly customizable websites with MarkoJS.
## To Start
```
npm install
npm start
```
## Main concepts
### Component
Component is a plugable, configurable and custom HTML tag. It will be written in [marko template syntax](https://markojs.com/docs/syntax/) and it will have extension ".marko". Component is independent portion of the web page which upon execution generates some HTML and gets embedded into the page. We can use same component with several widgets to get different output.

In this project we will be writing our components in the [components](https://github.com/tensult/markojs-express-website/blob/master/src/components) directory.

The following are special components which support dynamic loading of components based different use cases. Please note these themselves shouldn't be loaded dynamically else it will be a infinite loop.

#### [load-component](https://github.com/tensult/markojs-express-website/blob/master/src/components/load-component/index.js)
This loads component by name so we can simply pass the name of the component we want to load from [components](https://github.com/tensult/markojs-express-website/blob/master/src/components/index.js)

#### [load-slot](https://github.com/tensult/markojs-express-website/blob/master/src/components/load-slot/index.js)
This loads component using slot information from the template.

### Layout
Layout is the skeleton on the page using which we can define the structure of the page. It will be written in [marko template syntax](https://markojs.com/docs/syntax/) and it will have extension ".marko". Based on this entire page will be rendered. We can load it with different templates to get different output hence highly configurable.

In this project we will be writing our layouts in the [layouts](https://github.com/tensult/markojs-express-website/blob/master/src/layouts) directory.

### Widget
Widget is configuration for component, you can think component like function and widget like calling that component function with some arguments. We can have many widgets for same component by changing the attributes we want to pass to the component.

In this project we have given sample [widgets](https://github.com/tensult/markojs-express-website/blob/master/data/widgets.js) but ideally these should be stored in the DB and fetched based on the configured template for the page.

### Template
Template is configuration for layout, you can think layout like function and template like calling that layout with some arguments. We can have many templates for same layout by changing the attributes we want to pass to the layout. Template also has widgetConfig to map slot names with widgets to be loaded, using this we can customize what widget want to load for the slots in the layouts.

In this project we have given sample [templates](https://github.com/tensult/markojs-express-website/blob/master/data/templates.js) but ideally these should be stored in the DB and fetched based on the page is being loaded.

## Examples
* [Loading components dynamically by Name](https://github.com/tensult/markojs-express-website/blob/master/src/layouts/dynamically-load-components) 
* [Loading the page using templates and widgets](https://github.com/tensult/markojs-express-website/blob/master/src/layouts/colors)



