/**
 * According to the lodash documentation, _.difference(array, [values]) creates an array of array values
 * not included in the other given arrays using SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.

 * @param {Array} array - The array to inspect.
 * @param  {...Array} arrays - The any number of arrays containing the values to exclude
 * @return {Array} - Returns the new array of filtered values
 */
const difference = (array, ...arrays) => {
	const excludedValues = arrays.reduce((acc, arr) => acc.concat(arr), []);
  return array.filter(val => ! excludedValues.includes(val));
}

/**
 * According to the lodash documentation,
 * _.pull Removes all given values from array using SameValueZero for equality comparisons.
 * Note that unlike _.without, this method mutates array.
 * @param {Array} arr
 * @param  {...any} args
 * @return {Array}
 */
const pull = (arr, ...args) => {
  let index = 0;
  while(index < arr.length) {
    if (args.includes(arr[index])) {
      arr.splice(index, 1);
    } else {
      index++;
    }
  }

  return arr;
}

/**
 * According to the lodash documentation,
 * _.dropwWhile Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until the predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 * The documents state that if, instead of passing a function to dropwhile, you pass an object.
 *  It knows to convert that to the "matches" function.
 *
 * @param {Array} arr
 * @param {function|object} fn
 * @return {Array}
 */
const dropWhile = (arr, fn) => {
  if (typeof(fn) === 'function') {
    return arr.slice(arr.findIndex(v => !fn(v)));
  } else if (typeof(fn) === 'string') {
    return arr.slice(arr.findIndex(v => !v[fn]));
  }

  return Array.isArray(fn) ?
      arr.slice(arr.findIndex(v => !buildArrayTypePredicate(v, fn))):
      arr.slice(arr.findIndex(v => !buildObjectLikePredicate(v, fn)));
}

/**
 * Build condition with object-like predicate,
 * instead of passing a function as predicate for dropWhile
 *
 * @param {object} obj
 * @param {object} predicateFn
 * @return {boolean}
 */
const buildObjectLikePredicate = (obj, predicateFn) => {
  return Object.entries(predicateFn).every(([key, value]) => obj[key] === value);
}

/**
 * Build condition with array-like predicate,
 * instead of passing a function as predicate for dropWhile.
 * uses `_.matchesProperty` iteratee shorthand.
 *
 * @param {object} obj
 * @param {Array} predicateFn
 * @return {boolean}
 */
const buildArrayTypePredicate = (obj, arrayTypePredicate) => {
  return Array.from({ length: arrayTypePredicate.length / 2}, (_, i) => i * 2)
    .map(keyIndex => [ arrayTypePredicate[keyIndex], arrayTypePredicate[keyIndex + 1] ])
    .every(([key, value]) => obj[key] === value);
}

/**
 * According to the lodash documentation,
 * _.drop creates a slice of an array with n elements dropped from the beginning.
 *
 * @param {Array} arr
 * @param {Number} val
 * @return {Array}
 */
const drop = (arr, val = 1) => arr.slice(val);

/**
 * Creates a slice of array with n elements dropped from the end.
 * https://lodash.com/docs/4.17.15#dropRight _.dropRight(array, [n = 1])
 *
 * @param {Array} array - The array to query.
 * @param {number} n - The number of elements to drop
 * @return {Array} - returns the slice of the array.
 */
const dropRight = (array, n = 1) => n > array.length ? [] : array.slice(0, array.length - n);

/**
 * Creates a slice of array excluding elements dropped from the end.
 * Elements are dropped until predicate returns falsey. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * @param {Array} array - The array to query.
 * @param {object|function|string} predicate - The function invoked per iteration.
 * @return {Array}
 */
const dropRightWhile = (array, predicate) => {
  let numberOfDroppedElements = 0;

  for (element of [...array].reverse()) {
    if (!isDropPredicateFulfilled(element, predicate)) {
      break;
    }

    numberOfDroppedElements++;
  }

  return array.slice(0, array.length - numberOfDroppedElements);
}

/**
 * Evaluates the predicate per element
 * predicate may be: `_.identity` (Function)
 * or `_.matches` (Object-Like)
 * or `_.matchesProperty` (Array-Like)
 * or `_.property` (string, property)
 *
 * @param {*} element
 * @param {function|object|string} predicate
 * @return {boolean}
 */
const isDropPredicateFulfilled = (element, predicate) => {
  if (typeof(predicate) === 'function') {
    return predicate(element);
  }

  if (typeof(predicate) === 'string') {
    return Boolean(element[predicate]);
  }

  if (Array.isArray(predicate)) {
    return Array.from({length: predicate.length / 2}, (_, i) => i * 2)
      .map(key => [predicate[key], predicate[key + 1]])
      .every(([key, value]) => element[key] === value);
  }

  return Object.entries(predicate).every(([key, value]) => element[key] === value);
}

/**
 * According to the lodash documentation,
 *  _.differenceBy is like _.difference except that it accepts iteratee which is invoked for each element of array and
 * values to generate the criterion by which they're compared. The order and references of result values are determined
 * by the first array. The iteratee is invoked with one argument:
 * The iteratee can be a function or a value.
 *
 * @param {Array} array - The array to inspect
 * @param  {Array} values - The number of arrays containing the values to exclude.
 * @return {Array} - Returns the new array of filtered values.
 */
const differenceBy = (array, ...values) => {
  const iterateeInvokedPerElement = values.pop();

  return typeof(iterateeInvokedPerElement) === 'function' ?
    differenceByWithFunctionIteratee(array, values, iterateeInvokedPerElement):
    differenceByWithPropertyIteratee(array, values, iterateeInvokedPerElement);
}

/**
 * differenceBy with value/property iteratee.
 * `_.property` iteratee shorthand.
 *
 * @param {Array} array - The array to inspect
 * @param {Array} values - the number of arrays containing values to exclude.
 * @param {string} iteratee - invoked per element and user for comparison/filtering
 * @return {Array} - the new array of filtered elements.
 */
const differenceByWithPropertyIteratee = (array, values, iteratee) => {
  return array.filter(element => {
    return !values.reduce((acc, excludedVal) => acc.concat(excludedVal), [])
      .some(o => o[iteratee] === element[iteratee]);
  });
}

/**
 * differenceBy with function iteratee.
 * `_.identity` iteratee shorthand.
 *
 * @param {Array} array - The array to inspect
 * @param {Array} values - the number of arrays containing values to exclude.
 * @param {string} iteratee - invoked per element and user for comparison/filtering.
 * @return {Array} - the new array of filtered elements.
 */
const differenceByWithFunctionIteratee = (array, values, iterateeFn) => {
  return array.filter(element => {
    return !values.reduce((acc, excludedVal) => acc.concat(excludedVal), [])
      .map(v => iterateeFn(v))
      .includes(iterateeFn(element));
  });
}

/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * Lodash: _.chunk(array, [size=1]), https://lodash.com/docs/4.17.15#chunk
 *
 * @param {Array} array - the array to process.
 * @param {Number} size - the length of each chunk.
 * @return {Array} - the new array of chunks
 */
const chunk = (array, size = 1) => {
  const chunks = Array.from({ length: Math.floor(array.length / size) }, (_, i) => i)
    .map(i => array.slice(i * size, (i + 1) * size));

  return (chunks.length * size) === array.length ?
    chunks:
    [...chunks, array.slice(chunks.length * size)];
}

/**
 * Write a function that creates an array of values found within all given arrays.
 * The first array will serve as the base from which the remaining arrays will be checked to see if they have the matching values.
 * If they do they will be added to the new array which will return only unique values showing the "intersecting" values of all arrays.
 *
 * @param  {Array} a
 * @return {Array} - Array of only unique values showing the "intersection" values of all arrays.
 */
const intersection = (...a) => {
  const [baseArray, ...remainingArrays] = a;

  const common = baseArray.filter(element => {
    return remainingArrays.every(subArr => subArr.some(subElement => isSimilar(element, subElement)));
  });

  return [...new Set(common)];
}

/**
 * Compare values and check if similar.
 *
 * @param {any} val1
 * @param {any} val2
 */
const isSimilar = (val1, val2) => JSON.stringify(val1) === JSON.stringify(val2);

/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * _.compact(array), https://lodash.com/docs/4.17.15#compact
 *
 * @param {Array} array - The array to compact
 * @return {Array} - The new array of filtered values.
 */
const compact = (array) => array.filter(Boolean);

/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * _.concat(array, [values]), https://lodash.com/docs/4.17.15#concat
 *
 * @param {Array} array - The array to concatenate.
 * @param  {...*} values - The values to concatenate.
 * @return {Array} - Returns the new concatenated array.
 */
const concat = (array, ...values) => {
  return values.reduce((acc, val) => {
    return Array.isArray(val) ? [...acc, ...val] : [...acc, val];
  }, array);
}

/**
 * This method is like _.difference except that it accepts comparator which is invoked 
 * to compare elements of array to values. The order and references of result values are
 * determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
 * https://lodash.com/docs/4.17.15#differenceWith _.differenceWith(array, [values], [comparator])

 * @param {Array} array - The array to inspect
 * @param  {...Array} values - The values to exclude
 * @param {Function} comparator - The comparator invoked for each element.
 * @return {Array
 */
const differenceWith = (array, ...values) => {
  const [comparator, ...excludedValues] = values.reverse();

  return array.filter(element => {
    return !excludedValues.reduce((acc, excludedVal) => acc.concat(excludedVal), [])
      .some(excludedVal => comparator(element, excludedVal));
  });
}

/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons,
 * in which only the first occurrence of each element is kept. The order of result values
 * is determined by the order they occur in the array.
 *  _.uniq(array) https://lodash.com/docs/4.17.15#uniq
 *
 * @param {Array} array
 * @return {Array}
 */
const uniq = array => [...new Set(array)];

/**
 * Gets all but the first element of array.
 * https://lodash.com/docs/4.17.15#tail _.tail(array)
 *
 * @param {Array} array - The array to query.
 * @return {Array}
 */
const tail = array => array.slice(1);

/**
 * this method returns an object composed from key-value pairs.
 * https://lodash.com/docs/4.17.15#fromPairs ._fromPairs(pairs)
 *
 * @param {Array} pairs - The key-value pairs
 * @return {object}
 */
const fromPairs = pairs => pairs.reduce((obj, [key, value]) => ({...obj, [key]: value}), {});

/**
 * Flattens array a single level deep.
 * _flatten(array); https://lodash.com/docs/4.17.15#flatten
 *
 * @param {Array} array - The array to flatten.
 * @return {Array} - returns the new flattened array.
 */
const flatten = (array) => array.reduce((acc, val) => acc.concat(val), []);

/**
 * Recursively flattens array.
 * _.flattenDeep(array); https://lodash.com/docs/4.17.15#flattenDeep
 *
 * @param {Array} array - The array to flatten.
 * @return {Array} - returns the new flattened array.
 */
const flattenDeep = (array) => {
  return array.reduce((acc, val) => {
    return Array.isArray(val) ?
      acc.concat(flattenDeep(val)):
      [...acc, val];
  }, []);
}

/**
 * Recursively flatten array up to depth times.
 * _.flattenDepth(array, [depth=1]); https://lodash.com/docs/4.17.15#flattenDepth
 *
 * @param {Array} array - The array to flatten.
 * @param {Number} depth - The maximum recursion depth.
 */
const flattenDepth = (array, depth = 1) => {
  if (depth === 1) {
    return array.reduce((acc, val) => acc.concat(val), []);
  }

  return flattenDepth(array.reduce((acc, val) => acc.concat(val), []), depth - 1);
}

/**
 * Gets the element at index n of array.
 * If n is negative, the nth element from the end is returned.
 * _.nth(array, [n=0]); https://lodash.com/docs/4.17.15#nth
 *
 * @param {Array} array - The array to query.
 * @param {number} n - The index of the element to return.
 * @return {*} - Returns the nth element of the array.
 */
const nth = (array, n = 0) => n < 0 ? array[array.length + n] : array[n];

module.exports = {
  nth,
  tail,
  uniq,
  pull,
  drop,
  chunk,
  concat,
  compact,
  flatten,
  flattenDeep,
  flattenDepth,
  fromPairs,
  dropWhile,
  dropRight,
  difference,
  differenceBy,
  intersection,
  differenceWith,
  dropRightWhile,
}
