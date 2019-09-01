# Group By

[![Known Vulnerabilities](https://dev.snyk.io/test/npm/@jitesoft/group-by/badge.svg)](https://dev.snyk.io/test/npm/@jitesoft/group-by)
[![pipeline status](https://gitlab.com/jitesoft/open-source/javascript/order-by/badges/master/pipeline.svg)](https://gitlab.com/jitesoft/open-source/javascript/order-by/commits/master)
[![coverage report](https://gitlab.com/jitesoft/open-source/javascript/order-by/badges/master/coverage.svg)](https://gitlab.com/jitesoft/open-source/javascript/order-by/commits/master)
[![npm](https://img.shields.io/npm/dt/@jitesoft/group-by)](https://www.npmjs.com/package/@jitesoft/group-by)
[![Back project](https://img.shields.io/badge/Open%20Collective-Tip%20the%20devs!-blue.svg)](https://opencollective.com/jitesoft-open-source)

Simple method to group an array by a given key in the array. The method uses a callback function to choose the 
value to group the values by and returns an object which have all the ordered values in an array under the given key name.

## Example:

```js
import groupBy from '@jitesoft/group-by';

let array = [ { "id": "abc", "value": "abc" },
              { "id": "abc", "value": "def" },
              { "id": "abc", "value": "ghi" },
              { "id": "def", "value": "abc" },
              { "id": "def", "value": "def" },
              { "id": "ghi", "value": "abc" } ];

let result = groupBy(array, (obj) => obj.id);

// Output:
let obj = {
       abc: [
         { "id": "abc", "value": "abc" },
         { "id": "abc", "value": "def" },
         { "id": "abc", "value": "ghi" }
       ],
       def: [
         { "id": "def", "value": "abc" },
         { "id": "def", "value": "def" }
       ],
       ghi: [
         { "id": "ghi", "value": "abc" }
       ]
};
```
