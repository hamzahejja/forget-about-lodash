const {
  isInt,
  randomInt,
  randomFloat
} = require('../utils');

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @param {number} number - The number to clamp.
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @returns {number}
 */
function clamp(number, lower, upper) {
  lower = +lower;
  upper = +upper;
  number = +number;

  if (!isNaN(number)) {
    lower = isNaN(lower) ? 0 : lower;
    upper = isNaN(upper) ? 0 : upper;

    if (number < Math.min(lower, upper)) return Math.min(lower, upper);
    if (number > Math.max(lower, upper)) return Math.max(lower, upper);
  }

  return number;
}

/**
 * Produces a random number between the inclusive lower and upper bounds.
 * If only one argument is provided a number between 0 and the given number is returned.
 * If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.
 *
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @param {number} floating - Specifying returning a floating-point number.
 * @return {number}
 */
function random(lower = 0, upper = 1, floating = false) {
  const args = Array.from(arguments);

  if (args.length == 1) {
    lower = 0;
    upper = typeof args[0] === 'number' ? args[0] : upper;
    floating = typeof args[0] === 'boolean' ? args[0] : floating;
  }

  if (args.length === 2 && typeof args[1] === 'boolean') {
    lower = 0;
    upper = args[0];
    floating = args[1];
  }

  lower = +lower;
  upper = +upper;

  if (lower !== +lower) lower = 0;
  if (lower === Infinity) lower = Number.MAX_VALUE;

  if (upper !== +upper) upper = 0;
  if (upper === Infinity) upper = Number.MAX_VALUE;

  return isInt(lower) && isInt(upper) && !floating
  ? randomInt(lower, upper)
  : randomFloat(lower, upper);
}

/**
 * Checks if n is between start and up to, but not including, end.
 * If end is not specified, it's set to start with start then set to 0.
 * If start is greater than end the params are swapped to support negative ranges.
 *
 * @param {number} number - The number to check.
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @returns {boolean}
 */
function inRange(number, start, end) {
  if (!end) {
    return number > 0 && number < start;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  return number >= start && number < end;
}

module.exports = {
  clamp,
  random,
  inRange,
}
