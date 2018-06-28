// Compiled using marko@4.11.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/markojs-customizable-website$1.0.0/src/components/bar/index.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"bar-component\"><p>I am bar component</p><p>Colors selected: <span style=\"color:" +
    marko_escapeXmlAttr(data.color) +
    "\">" +
    marko_escapeXml(data.color) +
    "</span></p></div>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/markojs-customizable-website$1.0.0/src/components/bar/index.marko"
  };
