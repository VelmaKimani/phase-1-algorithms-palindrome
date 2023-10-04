function isPalindrome(word) {
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {                  // or from 4 - 8 : return word === reversedWord
    return false;
  }
}

function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  console.log(wordArray)
  // reverse the array
  const reversedWordArray = wordArray.reverse(); // or this method body to be
  console.log(reversedWordArray)                 // return word.split('').reverse().join('')
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  console.log(reversedWord)
  // return the reversed string
  return reversedWord;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
