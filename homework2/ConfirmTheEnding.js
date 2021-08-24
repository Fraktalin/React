function confirmEnding(str, target) {
  let i = 1
  let targetLength = target.length
  for (i; i < targetLength + 1; i+=1) {
    if(str[str.length-i] !== target[targetLength-i]) {
      return false
    }
  }
  return true
}

////////////
const confirmEnding = (str, target)=> str.substr(str.length - target.length, str.length) === target

