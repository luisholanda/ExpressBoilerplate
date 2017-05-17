/**
 * Created by luiscm on 5/17/17.
 */

var minifier = require('html-minifier').minify;

// Minify function
function minify(str) {
  return minifier(str, {
    collapseWhitespace: true,
    collapseInlineWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    sortAttributes: true,
    sortClassName: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  })
}

function render(template, res) {
  template.renderToString({}, function (err, html) {
    var min = minify(html);
    res.send(min);
  })
}

module.exports = render;
