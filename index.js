function isPalindrome(word) {
  var reversed = word.split("").reverse().join("")
  // Write your algorithm here
/* Add your pseudocode here
//var reversed = str.split()
*/

if (reversed === word){
  return true;
} else {
return false
}
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");
}

module.exports = isPalindrome;

