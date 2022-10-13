/**
 * Groups each item in the list by a defined callback return value.
 * Input is expected to be an array-like structure and return value will be a standard map/object.
 *
 * @param {Array<*>} list     Array to group.
 * @param {Function} keySelector Callback to execute on each object in the array to fetch key for grouping.
 * @return {Object}
 */
const groupBy = (list, keySelector) => {
  if (!Array.isArray(list)) {
    throw new Error('Value is not an array.');
  }

  const result = {};
  const count = list.length;
  let val = null;

  for (let i = 0; i < count; i++) {
    val = keySelector(list[i]);

    if (val?.constructor?.name !== 'String' && val?.constructor?.name !== 'Number') {
      throw new Error('Key must be string or number.');
    }

    if (result[val] === undefined) {
      result[val] = [];
    }

    result[val].push(list[i]);
  }

  return result;
};

/**
 * Groups each item in the list by a defined callback return value.
 * Input is expected to be an array-like structure and return value will be a standard map/object.
 *
 * @param {Array<*>} list     Array to group.
 * @param {Function} keySelector Callback to execute on each object in the array to fetch key for grouping.
 * @return {Promise<Object>}
 */
const groupByAsync = async (list, keySelector) => {
  if (!Array.isArray(list)) {
    throw new Error('Value is not an array.');
  }

  const result = {};
  const resolved = await Promise.all(
    list.map((object, index) => Promise.resolve({ object, index })
      .then(async (o) => ({
        index: o.index,
        key: await keySelector(o.object)
      })))
  );

  const count = resolved.length;
  for (let i = 0; i < count; i++) {
    const { key, index } = resolved[i];

    if (key?.constructor?.name !== 'String' && key?.constructor?.name !== 'Number') {
      throw new Error('Key must be string or number.');
    }

    if (result[key] === undefined) {
      result[key] = [];
    }

    result[key].push(list[index]);
  }

  return result;
};

export default groupBy;

export {
  groupBy,
  groupByAsync
};
