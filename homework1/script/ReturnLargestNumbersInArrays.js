function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let longest = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > longest) {
        longest = arr[i][j];
      }
    }
    result.push(longest);
  }
  return result;
}