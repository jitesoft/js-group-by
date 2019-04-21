# Group By

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
