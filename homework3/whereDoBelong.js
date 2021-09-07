function getIndexToIns(arr, num) {
  let result;
  arr.sort((a, b) => a - b);
  let i = 0;
  const arrayLength = arr.length;
  for (i; i < arrayLength; i += 1) {
    if (arr[i] >= num){
      return i;
    }
  }
  return arr.length;
}

///////////////

const getIndexToIns=(arr, num)=> arr.concat(num).sort((a, b) => a - b).indexOf(num);

