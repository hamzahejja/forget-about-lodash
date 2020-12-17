/**
 * _.find (collection, predicate, startIndex)
 *  Iterates over elements of collection, returning the first element predicate returns truthy for.
 *  The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @param {object} collection - (Array or Object): The collection to inspect.
 * @param {function|object|string} predicate - _.identity function, object, array or string.
 * @param {number} startIndex - The index to search from.
 *
 * @return {object}
 */
const find = (collection, predicate, startIndex = 0) => {
  collection = Object.values(collection);

  if (typeof(predicate) === 'object') {
    return Array.isArray(predicate) ?
      findByArrayLikePredicate(collection, predicate, startIndex):
      findByObjectLikePredicate(collection, predicate, startIndex);
  } else if (typeof(predicate) === 'function') {
    return findByFunctionPredicate(collection, predicate, startIndex);
  } else {
    return findByStringLikePredicate(collection, predicate, startIndex);
  }
}

/**
 * _.find(collection, [predicate=_identity.function], startIndex)
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is a function invoked with three arguments: (value, index|key, collection).
 *
 * @param {object} (Array or Object): The collection to inspect.
 * @param {Function} predicate - _.identity function, the predicate to invoke per element.
 * @param {Number} startIndex - The index to search from
 * @return {object}
 */
const findByFunctionPredicate = (collection, predicate, startIndex) => {
  return collection.slice(startIndex).filter(predicate)[0];
}

/**
 * _.find(collection, [predicate=_.matches iteratee], startIndex)
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is `_.matches` iteratee shorthand (i.e. Object-Like predicate).
 *
 * @param {object} (Array or Object): The collection to inspect.
 * @param {object} predicate - _.matches iteratee shorthand, Object-Like predicate
 * @param {Number} startIndex - The index to search from
 * @return {object}
 */
const findByObjectLikePredicate = (collection, predicate, startIndex) => {
  const conditions = Object.entries(predicate);

  return collection.slice(startIndex).filter(o => {
    return conditions.every(condition => {
      const [key, value] = condition;
      return o[key] === value;
    });
  })[0];
}

/**
 * _.find(collection, [predicate=_.matchesProperty iteratee], startIndex)
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is `_.matchesProperty` iteratee shorthand
 *
 * @param {object} (Array or Object): The collection to inspect.
 * @param {object} predicate - `_.matchesProperty` iteratee shorthand, Array-Like predicate
 * @param {Number} startIndex - The index to search from
 * @return {object}
 */
const findByArrayLikePredicate = (collection, predicate, startIndex) => {
  const conditions = Array.from({length: predicate.length / 2}, (_, i) => i * 2)
    .map(keyIndex => [predicate[keyIndex], predicate[keyIndex + 1]]);

  return collection.slice(startIndex).filter(o => {
    return conditions.every(condition => {
      const [key, value] = condition;
      return o[key] === value;
    });
  })[0];
}

/**
 * _.find(collection, [predicate=_.property], startIndex)
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is `_.property` iteratee shorthand
 *
 * @param {object} (Array or Object): The collection to inspect.
 * @param {object} predicate - `_.property` iteratee shorthand, Array-Like predicate
 * @param {Number} startIndex - The index to search from
 * @return {object}
 */
const findByStringLikePredicate = (collection, predicate, startIndex) => {
  return collection.slice(startIndex).filter(o => o[predicate])[0];
}

module.exports = {
  find
}
