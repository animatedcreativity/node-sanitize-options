# node-sanitize-options
Combines any options passed by user with default options so that they are never `undefined`.

Example:

```
var saveProduct = function(options) {
  var sanitizeOptions = require("node-sanitize-options");
  options = sanitizeOptions(options, {model: "ABC-001", price: 23.4, taxRate: 25, status: true});
  console.log(options);
};
saveProduct({model: "XYZ-002", price: 70.24});
```