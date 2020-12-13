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

module.exports = {
  get,
}
