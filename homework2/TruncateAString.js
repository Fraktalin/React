const truncateString = (str, num) => num>=str.length ? str :str.substring(0,num)+'...';


/////


function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 4));
