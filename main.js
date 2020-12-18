let Phrase = require("acamilo-palindrome");



let string = prompt("Please enter a string for plaindrome testing:");
let phrase = new Phrase(string);
if (phrase.palindrome()){
  alert(`"${phrase.content}" is a palindrom!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`);
}
