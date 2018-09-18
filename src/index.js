module.exports = function longestConsecutiveLength(array) {
  if (!array || array.length == 0) return 0;
  const numbers = new Set(array);
  let max = 1;
  array.forEach(it => {
    if (numbers.has(it + 1) && !numbers.has(it - 1)) {
      let length = 1;
      while (numbers.has(it + length)) length++;
      if (length > max) max = length;
    }
  });
  return max;
};
