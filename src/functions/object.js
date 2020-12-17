/**
 * Gets the value at path of object.
 * If the resolved value is undefined, the defaultValue is returned in its place.
 * _.get(object, path, [defaultValue]).
 *
 * @param {Object} obj - The object to query
 * @param {String|Array} path - The path of the property to get.
 * @param {*} defaultValue - The value returned for undefined resolved values.
 * @return {*} - The resolved value
 */
function get(obj, path, defaultValue) {
  let resolvedValue = JSON.parse(JSON.stringify(obj));
  const propertyPath = typeof(path) === 'string' ?
    path : path.join('.').replace(/([\w]+)\.(?=\d+)(\d+)/g, "$1[$2]");

  for(subPath of propertyPath.split('.')) {
    if (/^\w+\[\d+\]$/.test(subPath)) {
      const [arr, index] = subPath.replace(/^(\w+)\[(\d+)\]$/g, '$1.$2').split('.');
      resolvedValue = resolvedValue[arr][index];
    } else {
      resolvedValue = resolvedValue[subPath];
    }

    if (! resolvedValue) return defaultValue;
  }

  return resolvedValue;
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The order of grouped values is determined by the order they occur in collection.
 * The corresponding value of each key is an array of elements responsible for generating the key.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array|Object} collection
 * @param {Function|String|Number} iteratee
 * @returns {Object}
 */
function groupBy(collection, iteratee) {
  return Object.values(collection).reduce((obj, val) => {
    const key = (typeof(iteratee) === 'function') ? iteratee(val) : val[iteratee];
    return { ...obj, [key]: [...(obj[key] || []), val]};
  }, {});
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The corresponding value of each key is the number of times the key was returned by iteratee.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array|Object} collection
 * @param {Function|String|Number} iteratee
 */
function countBy(collection, iteratee) {
  return Object.values(collection).reduce((obj, val) => {
    const key = typeof(iteratee) === 'function' ? iteratee(val) : val[iteratee];

    return { ...obj, [key]: (obj[key] || 0) + 1 };
  }, {});
}

module.exports = {
  get,
  groupBy,
  countBy
}
