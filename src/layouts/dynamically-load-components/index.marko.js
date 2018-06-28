// Compiled using marko@4.11.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/markojs-customizable-website$1.0.0/src/layouts/dynamically-load-components/index.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/dist/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    load_component_tag = marko_loadTag(require("../../components/load-component")),
    init_components_tag = marko_loadTag(require("marko/dist/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/dist/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><meta charset=\"utf-8\"><title>Dynamically load MarkoJS components</title></head><body>");

  component_globals_tag({}, out);

  out.w("<p>Loading " +
    marko_escapeXml(data.name) +
    "...</p>");

  if (data.name == "foo") {
    out.w("<a href=\"/dynamic-loading-of-components?component=bar&amp;color=red\">Load Bar</a>");
  } else {
    out.w("<a href=\"/dynamic-loading-of-components?component=foo&amp;color=green\">Load Foo</a>");
  }

  load_component_tag({
      name: data.name,
      data: data
    }, out, __component, "8");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "9");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/markojs-customizable-website$1.0.0/src/layouts/dynamically-load-components/index.marko",
    tags: [
      "marko/dist/components/taglib/component-globals-tag",
      "../../components/load-component",
      "marko/dist/components/taglib/init-components-tag",
      "marko/dist/taglibs/async/await-reorderer-tag"
    ]
  };
