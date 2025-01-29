function moveZeros(arr) {
  return arr.reverse().reduce(function (newArr, v) {
    return v === 0 ? newArr.push(v) : newArr.unshift(v), newArr;
  }, []);
}

console.log(moveZeros([1, 3, 1, 1, 2, 1, +0, +0, +0, +0]));
