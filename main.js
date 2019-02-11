exports.options = function(passedOptions, defaultOptions) {
  var options = {};
  if (typeof defaultOptions !== "undefined") {
    for (var key in defaultOptions) options[key] = defaultOptions[key];
  }
  if (typeof passedOptions !== "undefined") {
    for (var key in passedOptions) options[key] = passedOptions[key];
  }
  return options;
};