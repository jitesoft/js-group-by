import { groupBy, groupByAsync } from '../src/index';

describe('Group objects under given key.', () => {
  test('Tests grouping.', () => {
    const result = groupBy([
      { id: 'abc', value: 'abc' },
      { id: 'abc', value: 'def' },
      { id: 'abc', value: 'ghi' },

      { id: 'def', value: 'abc' },
      { id: 'def', value: 'def' },
      { id: 'ghi', value: 'abc' }
    ], (o) => o.id);

    expect(result).toEqual({
      abc: [
        { id: 'abc', value: 'abc' },
        { id: 'abc', value: 'def' },
        { id: 'abc', value: 'ghi' }
      ],
      def: [
        { id: 'def', value: 'abc' },
        { id: 'def', value: 'def' }
      ],
      ghi: [
        { id: 'ghi', value: 'abc' }
      ]
    });
  });
});

describe('Group objects under given key async.', () => {
  test('Tests grouping.', async () => {
    const result = await groupByAsync([
      { id: 'abc', value: 'abc' },
      { id: 'abc', value: 'def' },
      { id: 'abc', value: 'ghi' },

      { id: 'def', value: 'abc' },
      { id: 'def', value: 'def' },
      { id: 'ghi', value: 'abc' }
    ], (o) => Promise.resolve(o.id));

    expect(result).toEqual({
      abc: [
        { id: 'abc', value: 'abc' },
        { id: 'abc', value: 'def' },
        { id: 'abc', value: 'ghi' }
      ],
      def: [
        { id: 'def', value: 'abc' },
        { id: 'def', value: 'def' }
      ],
      ghi: [
        { id: 'ghi', value: 'abc' }
      ]
    });
  });
});
