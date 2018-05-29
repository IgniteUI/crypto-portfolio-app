# node-version-compare

## a node module to compare semver versions

## Install

```shell
npm install --save node-version-compare
```

## Usage

```javascript
var compare = require('node-version-compare');

var result = compare('1.0.0', '1.0.1');                     // result = -1
    result = compare('10.2.0-alpha.1', '10.2.0-alpha.1');   // result = 0
    result = compare('10.2.0-alpha', '10.2.0-beta');        // result = 1
    result = compare('3.1.1-1', '3.1.1-2');                 // result = -1
```
