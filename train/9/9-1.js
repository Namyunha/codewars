// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

const array = [];

snail = function (array) {
  if (array.length === 0 || array[0].length === 0) return [];
  const newArr = [];
  let top = 0;
  let left = 0;
  let right = array.length - 1;
  let bottom = array.length - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      newArr.push(array[left][i]);
    }
    top = top + 1;
    for (let i = top; i <= bottom; i++) {
      newArr.push(array[i][right]);
    }
    right = right - 1;
    for (let i = right; i >= left; i--) {
      newArr.push(array[bottom][i]);
    }
    bottom = bottom - 1;
    for (let i = bottom; i >= top; i--) {
      newArr.push(array[i][left]);
    }
    left = left + 1;
  }
  return array.length > 1 ? newArr : [];
};

console.log(snail(array));
