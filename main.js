exports.options = function(passedOptions, defaultOptions) {
  var options = {};
  if (typeof defaultOptions !== "undefined") {
    for (var key in defaultOptions) options[key] = defaultOptions[key];
  }
  var options = {};
  if (typeof passedOptions !== "undefined") {
    for (var key in passedOptions) options[key] = passedOptions[key];
  }
  return options;
};