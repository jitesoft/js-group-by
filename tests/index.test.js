import orderBy from '../src';

describe('Orders objects under given key.', () => {

  test ('', () => {
    let result = orderBy([
      { "id": "abc", "value": "abc" },
      { "id": "abc", "value": "def" },
      { "id": "abc", "value": "ghi" },

      { "id": "def", "value": "abc" },
      { "id": "def", "value": "def" },
      { "id": "ghi", "value": "abc" }
    ], (o) => o.id);

    expect(result).toEqual({
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
    });


  });

});
