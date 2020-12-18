(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("acamilo-palindrome");



let string = prompt("Please enter a string for plaindrome testing:");
let phrase = new Phrase(string);
if (phrase.palindrome()){
  alert(`"${phrase.content}" is a palindrome`);
} else {
  alert(`"${phrase.content}" is not a palindrome`);
}

},{"acamilo-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;



// Adds 'reverse' function to all string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

//Defines a phrase object

function Phrase(content) {
  this.content = content;

  //Returns only the letters of my content
  this.letters = function letters(){
    return (this.content.match(/[a-zA-z]/gm) || []).join("");
  }

  // Returns true for palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  //Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  //Returns a louder (all caps) version of content
  this.louder = function() {
    return this.content.toUpperCase();
  }


}


//Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation){
  this.content = content;
  this.translation = translation;

  //Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}


//javascript's way of giving inheritance.
TranslatedPhrase.prototype = new Phrase();

String.prototype.isEmpty = function() {
  if ( (this.length === 0) || !(this.match(/\S+/g)) ) {
    return true;
  } else {
        return false;
  }
}


Array.prototype.last = function() {
  return this[this.length-1];
}

},{}]},{},[1]);
