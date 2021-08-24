function findElement(arr, func) {
  let i = 0;
  let arrLength = arr.length;
  for (i; i < arrLength; i+=1) {
    let num = arr[i]
    if (func(num)) {
      return num;
    }
  }
  return undefined
}


///////////////////


const findElement = (arr, func) =>  arr.length && !func(arr[0]) ? findElement(arr.slice(1), func): arr[0];
