const { getObjectTag, isNonNullObject } = require('../utils');
/**
 * Checks if object conforms to source by invoking
 * the predicate properties of source with the corresponding property values of object.
 *
 * @param {object} object - The object to inspect.
 * @param {object} source - The object of property predicates to conform to.
 * @return {boolean}
 */
const conformsTo = (object, source) => {
  return Object.entries(source).every(([key, predicate]) => predicate(object[key]));
}

/**
 * Checks if value is likely an arguments object.
 * https://lodash.com/docs/4.17.15#isArguments
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if value is `Arguments`, else false.
 */
const isArguments = (value) => {
  return isNonNullObject(value) &&
    getObjectTag(value) === '[object Arguments]';
}

/**
 * Checks if value is classified as an Array object.
 * https://lodash.com/docs/4.17.15#isArray
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns `true` if value is `Array`, else false.
 */
const isArray = (value) => {
  return value instanceof Array &&
    getObjectTag(value) === '[object Array]';
}

/**
 * Checks if value is classified as an ArrayBuffer object.
 * https://lodash.com/docs/4.17.15#isArrayBuffer
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if value is `ArrayBuffer`, else false.
 */
const isArrayBuffer = (value) => {
  return value instanceof ArrayBuffer &&
    getObjectTag(value) === '[object ArrayBuffer]';
}

/**
 * Checks if value is array-like. A value is considered array-like if
 * it's not a function and has a value.length that's
 * an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.
 * https://lodash.com/docs/4.17.15#isArrayLike
 *
 * @param {any} value
 * @returns {boolean}
 */
const isArrayLike = (value) => {
  return value != null &&
    typeof(value) !== 'function' &&
    (value['length'] >= 0 && value['length'] <= Number.MAX_SAFE_INTEGER);
}

/**
 * This method is like isArrayLike(value) except
 * that it also checks if value is an object.
 * https://lodash.com/docs/4.17.15#isArrayLikeObject
 *
 * @param {any} value
 * @returns {boolean}
 */
const isArrayLikeObject = (value) => {
  return isNonNullObject(value) &&
    (value['length'] >= 0 && value['length'] <= Number.MAX_SAFE_INTEGER);
}

/**
 * Checks if value is classified as a boolean primitive or object.
 * https://lodash.com/docs/4.17.15#isBoolean
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if value is a boolean, else false.
 */
const isBoolean = value => {
  return typeof value === 'boolean' ||
    (isNonNullObject(value) && (getObjectTag(value)) === '[object Boolean]');
}

/**
 * Checks if value is a buffer.
 * https://lodash.com/docs/4.17.15#isBuffer
 *
 * @param {any} value
 * @returns {boolean}
 */
const isBuffer = (value) => {
  return isNonNullObject(value) &&
    value instanceof Buffer &&
    getObjectTag(value) === '[object Uint8Array]';
}

/**
 * Checks if value is classified as a Date object.
 * https://lodash.com/docs/4.17.15#isDate
 *
 * @param {any} value - The value to check.
 * @returns {boolean}
 */
const isDate = value => {
  return isNonNullObject(value) &&
    value instanceof Date &&
    getObjectTag(value) === '[object Date]';
}

/**
 * Checks if value is an empty object, collection, map, or set.
 * Objects are considered empty if they have no own enumerable string keyed properties.
 *  Array-like values such as arguments objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a length of 0.
 * Similarly, maps and sets are considered empty if they have a size of 0.
 *
 * @param {any} value
 * @returns {boolean}
 */
const isEmpty = value => {
  const isEmptyObjectByTag = {
    '[object Map]': (map) => !map.size,
    '[object Set]': (set) => !set.size,
    '[object ArrayBuffer]': (arrayBuffer) => !arrayBuffer.byteLength,
    '[object Object]': (obj) => JSON.stringify(obj) === JSON.stringify({})
  };

  if (isArrayLike(value)) {
    return !value['length'];
  } else if (typeof(value) === 'object') {
    const tag = getObjectTag(value);
    return (isEmptyObjectByTag[tag] ||(() => true))(value);
  }

  return true;
}

module.exports = {
  conformsTo,
  isArguments,
  isArray,
  isArrayBuffer,
  isArrayLike,
  isArrayLikeObject,
  isBoolean,
  isBuffer,
  isDate,
  isEmpty,
}
