function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  let i = 0; 
  const arrayLength = test.length;
  for (i; i < arrayLength; i += 1) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}
