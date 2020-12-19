module.exports.isInt = function(n){
  return Number(n) === n && n % 1 === 0;
}

module.exports.randomInt = function(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

module.exports.randomFloat = function(lower, upper) {
  return Math.random() * (upper - lower) + lower;
}
