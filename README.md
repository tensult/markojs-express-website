# markojs-express-website
We can design highly customizable websites with MarkoJS.
## To Start
```
npm install
npm start
```
## Main concepts
### Component
Component is a plugable, configurable and custom HTML tag. It is written in [marko template syntax](https://markojs.com/docs/syntax/) and it will have extension ".marko". Component is independent portion of the web page which upon execution generates some HTML and gets embedded into the page.

In this project we will be write our components in [components](https://github.com/tensult/markojs-express-website/blob/master/src/components) directory.

The following are special components which support dynamic loading of components based different use cases. Please note these themselves shouldn't be loaded dynamically else it will be a infinite loop.
#### [load-component](https://github.com/tensult/markojs-express-website/blob/master/src/components/load-component/index.js)
This loads component by name so we can simply pass the name of the component we want to load from [components](https://github.com/tensult/markojs-express-website/blob/master/src/components/index.js)
#### [load-slot](https://github.com/tensult/markojs-express-website/blob/master/src/components/load-slot/index.js)
This loads component using slot information from the template.
## Examples
### Loading components dynamically by Name



