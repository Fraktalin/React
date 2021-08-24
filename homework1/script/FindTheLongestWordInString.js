// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let result = str.split(" ");
  let longest = 0;
  for (var i = 0; i < result.length; i++) {
    if (result[i].length > longest) {
      longest = result[i].length;
    }
  }
  return longest;
}
