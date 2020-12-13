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

module.exports = {
  conformsTo
}
