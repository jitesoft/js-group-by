# Order By

Simple method to order an array by a given key in the array. The method uses a callback function to choose the 
value to order the items by and returns an object which have all the ordered values in an array under the given key name.

## Example:

```js
import orderBy from '@jitesoft/order-by';

let array = [ { "id": "abc", "value": "abc" },
              { "id": "abc", "value": "def" },
              { "id": "abc", "value": "ghi" },
              { "id": "def", "value": "abc" },
              { "id": "def", "value": "def" },
              { "id": "ghi", "value": "abc" } ];

let result = orderBy(array, (obj) => obj.id);

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
