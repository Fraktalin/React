const repeatStringNumTimes = (str, num) => num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';

//////////


function repeatStringNumTimes(str, num) {
  let result = '';
  let i = 0;
  for (i; i < num; i+=1) {
    result = result + str;
  }
  return result;
}
