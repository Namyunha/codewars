snail = function (array) {
  var list = [];
  while (array.length) {
    list.push(...array.shift(), ...array.map((arr) => arr.pop()));
    array = array.reverse().map((el) => el.reverse());
  }
  return list;
};

const array = [
  [1, 2, 3, 1],
  [4, 5, 6, 3],
  [7, 8, 9, 2],
  [3, 1, 5, 4],
];

// snail(array);
console.log(snail(array));
