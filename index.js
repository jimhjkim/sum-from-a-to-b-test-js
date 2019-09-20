
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // 1. write base case
  // 2. write recursive case
  if (toN === fromN) {
    return fromN;
  }
  return toN + sum(fromN, toN - 1);
}

module.exports = sum;
