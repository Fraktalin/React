function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let i = 0
  const arrayLength = arr.length
  for (i; i < arrayLength; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

///////////////


function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let i = 0;
  const arrayLength = arr.length
  while (i < arrayLength) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}