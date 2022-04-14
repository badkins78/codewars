function invert(array) {
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      newArr.push(Math.abs(array[i]));
    } else {
      newArr.push(-Math.abs(array[i]));
    }
  }
  return newArr;
}
