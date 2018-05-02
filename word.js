var Letter = require("./letter.js");

var Word = function (lettersSelected) {

    this.lettersSelected = lettersSelected;
    this.selectedWord = lettersSelected[Math.floor(Math.random() * lettersSelected.length)];
    this.wordDisplayed = [];

    this.matches = 0;


    this.emptyDisplayWord = function (wordCharacter) {
        for (i = 0; i < wordCharacter; i++) 
                { letter = new Letter("_").value;
            this.wordDisplayed = [];
               this.wordDisplayed.push(letter);
        }
        
        return this.wordDisplayed;
    };

    this.chkResult = function (playerGuess, wordArray) {
        const ltrGuess = new Letter(playerGuess);

        //console.log(guessLetter);
        var matchedLetters = guessLetter.findMatches(ltrGuess, wordArray);
        if (matchedLetters.length) {
            for (i = 0; i < matchedLetters.length; i++) {
                this.displayLetters[matchedLetters[i]] = guessLetter.value;
                this.wordMatches -= 1;
            }

        }


        return this.wordMatches;
    };

};

module.exports = Word;