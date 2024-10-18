function isPalindrome(word) {
  // Iterate from the beginning to the middle of the word
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    // Calculate the corresponding index from the end
    const j = word.length - 1 - i;
    // If any characters don't match, return false
    if (word[i] !== word[j]) {
      return false;
    }
  }
  // If all characters match, return true
  return true;
}

/*
Pseudocode:
1. Iterate from the beginning of the word to the middle of the word.
2. For each character at position `i`, compare it with the character at the corresponding position from the end (`j = word.length - 1 - i`).
3. If any character does not match its corresponding character from the end, return `false`.
4. If all characters match, return `true`.

Explanation:
A palindrome is a word that reads the same forward and backward. To check if a word is a palindrome, we compare characters from the start and the end of the word, moving towards the center. If all corresponding pairs of characters are the same, the word is a palindrome. If we find any mismatch, the word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));
}

module.exports = isPalindrome;

