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

  test('Throws if wrong type returned.', () => {
    expect(() => groupBy([{}, {}], () => true)).toThrow(Error('Key must be string or number.'));
    expect(() => groupBy([{}, {}], () => null)).toThrow(Error('Key must be string or number.'));
    expect(() => groupBy([{}, {}], () => () => {})).toThrow(Error('Key must be string or number.'));
    expect(() => groupBy([{}, {}], () => ({ a: 'b' }))).toThrow(Error('Key must be string or number.'));
    expect(() => groupBy([{}, {}], () => [1, 2, 3])).toThrow(Error('Key must be string or number.'));
  });

  test('Throws if wrong type passed.', () => {
    expect(() => groupBy({}, () => true)).toThrow(Error('Value is not an array.'));
    expect(() => groupBy('test', () => true)).toThrow(Error('Value is not an array.'));
    expect(() => groupBy(123, () => true)).toThrow(Error('Value is not an array.'));
    expect(() => groupBy(null, () => true)).toThrow(Error('Value is not an array.'));
    expect(() => groupBy(true, () => true)).toThrow(Error('Value is not an array.'));
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

  test('Throws if wrong type returned.', async () => {
    await expect(async () => groupByAsync([{}, {}], () => true)).rejects.toEqual(Error('Key must be string or number.'));
    await expect(async () => groupByAsync([{}, {}], () => null)).rejects.toEqual(Error('Key must be string or number.'));
    await expect(async () => groupByAsync([{}, {}], () => () => {})).rejects.toEqual(Error('Key must be string or number.'));
    await expect(async () => groupByAsync([{}, {}], () => ({ a: 'b' }))).rejects.toEqual(Error('Key must be string or number.'));
    await expect(async () => groupByAsync([{}, {}], () => [1, 2, 3])).rejects.toEqual(Error('Key must be string or number.'));
  });

  test('Throws if wrong type passed.', async () => {
    await expect(async () => groupByAsync({}, () => true)).rejects.toEqual(Error('Value is not an array.'));
    await expect(async () => groupByAsync('test', () => null)).rejects.toEqual(Error('Value is not an array.'));
    await expect(async () => groupByAsync(123, () => () => {})).rejects.toEqual(Error('Value is not an array.'));
    await expect(async () => groupByAsync(null, () => ({ a: 'b' }))).rejects.toEqual(Error('Value is not an array.'));
    await expect(async () => groupByAsync(true, () => [1, 2, 3])).rejects.toEqual(Error('Value is not an array.'));
  });
});
