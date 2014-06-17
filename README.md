## `requirein(path, name)`

Use node's require function as if the file you're requiring from is in another target directory.

```javascript
var requirein = require('requirein')
  , pwd = process.env.PWD
  , request = requirein(pwd, 'request')
  ;
```
