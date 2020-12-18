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

/**
 * Checks if predicate returns truthy for all elements of collection.
 * Iteration is stopped once predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @param {Array|Object} collection
 * @param {Function|Object|Array|String} predicate
 * @returns {Boolean}
 */
function every(collection, predicate) {
  let flag = true;

  for (value of collection) {
    if (typeof(predicate) === 'function') {
      flag = flag && Boolean(predicate(value));
    }

    if (typeof(predicate) === 'object') {
      let condition;

      if (Array.isArray(predicate)) {
        condition = Array.from({ length: predicate.length / 2}, (_, i) => i * 2)
          .map(keyIndex => [predicate[keyIndex], predicate[keyIndex + 1]])
          .every(([k, v]) => value[k] === v)
      } else {
        condition = Object.entries(predicate).every(([k, v]) => value[k] === v);
      }

      flag = flag && condition;
    }

    if (typeof(predicate) === 'string') {
      flag = flag && Boolean(value[predicate]);
    }

    if (! flag) break;
  }

  return flag;
}

/**
 * Invokes the method at path of each element in collection, returning an array of the results of each invoked method.
 * Any additional arguments are provided to each invoked method. If path is a function,
 * it's invoked for, and this bound to, each element in collection.
 *
 * @param {Array|Object} collection
 * @param {Function|String} path
 * @param  {...*} args
 * @returns {Array}
 */
function invokeMap(collection, path, ...args) {
  const values = Object.values(collection);

  return typeof(path) === 'string' ?
    values.map(e => e[path](...args)):
    values.map(e => path.apply(e, args));
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The corresponding value of each key is the last element responsible for generating the key.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array|object} collection
 * @param {Function|string} iteratee
 * @return {object}
 */
function keyBy(collection, iteratee) {
  return Object.values(collection).reduce((obj, val) => {
    const generatedKey = typeof(iteratee) === 'function'
    ? iteratee(val)
    : val[iteratee];

    return { ...obj, [generatedKey]: JSON.parse(JSON.stringify(val)) };
  }, {});
}

module.exports = {
  find,
  every,
  keyBy,
  groupBy,
  countBy,
  invokeMap,
}
