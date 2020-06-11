function merge(array1, array2) {
  let newArray = array1.concat(array2);
  return newArray.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));