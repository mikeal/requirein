## `requirein(path, name)`

[![Greenkeeper badge](https://badges.greenkeeper.io/mikeal/requirein.svg)](https://greenkeeper.io/)

Use node's require function as if the file you're requiring from is in another target directory.

```javascript
var requirein = require('requirein')
  , pwd = process.env.PWD
  , request = requirein(pwd, 'request')
  ;
```

Credits to Bradley Meck for figuring this out and writing the [original code](https://gist.github.com/bmeck/0d0b6ad6b394ebb2a3e4). 
