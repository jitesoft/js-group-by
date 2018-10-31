const orderBy = (list, callback) => {
  const result = {};
  const count = list.length;
  let val = null;

  for (let i = 0; i < count; i++) {
    val = callback(list[i]);

    if ((val in result) === false) {
      result[val] = [];
    }

    result[val].push(list[i]);
  }

  return result;
};

export default orderBy;
