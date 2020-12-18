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
