// Compiled using marko@4.11.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/markojs-customizable-website$1.0.0/src/layouts/colors/index.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/dist/components/taglib/component-globals-tag")),
    load_slot_tag = marko_loadTag(require("../../components/load-slot")),
    init_components_tag = marko_loadTag(require("marko/dist/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/dist/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><meta charset=\"utf-8\"><title>" +
    marko_escapeXml(data.template.attributes.title) +
    "</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h2>Colors Example</h2><p>We are loading this page using templates and widgets</p>");

  load_slot_tag({
      slotName: "top",
      slotData: data
    }, out, __component, "7");

  load_slot_tag({
      slotName: "middle",
      slotData: data
    }, out, __component, "8");

  load_slot_tag({
      slotName: "bottom",
      slotData: data
    }, out, __component, "9");

  out.w("<ul><li><a href=\"/colors/red\">Enter into Red World</a></li><li><a href=\"/colors/green\">Enter into green World</a></li><li><a href=\"/colors/blue\">Enter into Blue World</a></li><li><a href=\"/colors/mix\">Enter into colorful World</a></li></ul>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "19");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/markojs-customizable-website$1.0.0/src/layouts/colors/index.marko",
    tags: [
      "marko/dist/components/taglib/component-globals-tag",
      "../../components/load-slot",
      "marko/dist/components/taglib/init-components-tag",
      "marko/dist/taglibs/async/await-reorderer-tag"
    ]
  };
