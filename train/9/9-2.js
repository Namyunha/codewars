snail = function (array) {
  var result;
  while (array.length) {
    result = result ? result.concat(array.shift() || []) : array.shift();
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }
    if (array.length > 0) {
      result.push(...array.pop().reverse());
    }

    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
};

const array = [
  [1, 2, 3, 1],
  [4, 5, 6, 3],
  [7, 8, 9, 2],
  [3, 1, 5, 4],
];

snail(array);
// console.log(snail(array));
