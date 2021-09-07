function bouncer(arr) {
  let newArr = [];
  let i = 0;
  const arrayLength = arr.length;
  for (i; i < arrayLength; i += 1) {
    arr[i] ? newArr.push(arr[i]) : null;
  }
  return newArr;
}
/////////////

function bouncer(arr) {
  return arr.filter(Boolean);
}
