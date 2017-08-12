// Compiled using marko@4.4.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    __browser_json = require.resolve("./browser.json"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("lasso/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("lasso/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    lasso_body_tag = marko_loadTag(require("lasso/taglib/body-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  lasso_page_tag({
      packagePath: __browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!doctype html/><!--[if lt IE 7]> <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]--><!--[if IE 7]> <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]--><!--[if IE 8]> <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]--><!--[if gt IE 8]> <html class=\"no-js\" lang=\"\"> <![endif]--><html><head lang=\"en\"><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><meta name=\"description\" content=\"\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Express Boilerplate</title>");

  lasso_head_tag({}, out);

  out.w("</head><body class=\"main-body\">");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><div class=\"row\"><h1>Express Boilerplate</h1></div></div>");

  lasso_body_tag({}, out);

  browser_refresh_tag({
      enabled: "true"
    }, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    deps: [
      "package: ./browser.json"
    ],
    tags: [
      "lasso/taglib/config-tag",
      "lasso/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "lasso/taglib/body-tag",
      "browser-refresh-taglib/refresh-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
