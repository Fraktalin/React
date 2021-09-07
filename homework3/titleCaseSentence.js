function titleCase(str) {
  const arr = str.toLowerCase().split(' ');
  let newArr=[];
  const length = arr.length
  let i=0
  for (i; i < length; i+=1) {
    if(arr[i].length===1) {
      newArr.push(arr[i].toUpperCase());
      continue
    } else {
      newArr.push(arr[i][0].toUpperCase()+arr[i].slice(1));
    }
  }
  return newArr.join(' ')
}
///////////////

const titleCase=(str)=>str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());