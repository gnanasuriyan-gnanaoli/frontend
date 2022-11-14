(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['sample'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"entry\">\n  <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"action") || (depth0 != null ? lookupProperty(depth0,"action") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"action","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":16}}}) : helper)))
    + "</h1>\n  <div class=\"body\">\n    Type "
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":11,"column":9},"end":{"line":11,"column":18}}}) : helper)))
    + "\n  </div>\n  <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"screenshot") || (depth0 != null ? lookupProperty(depth0,"screenshot") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screenshot","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":26}}}) : helper)))
    + "\" alt=\"\" class='screenshot' style=\"max-width: 100%;\n  border-radius: 16px;\">\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\" style=\"margin: auto;\nwidth: 960px;\nfont-family: monospace;\nfont-size: 14px;\">\n  \n</div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":16,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();