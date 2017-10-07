
    var game = {
      abcArray: "abcdefghijklmnopqrstuvwxyz".split(""),
      anwser: "",
      wins: 0,
      losses: 0,
      guesses: 0,
      guessCount: 0,
      incorrectLetters: [],
      updateAnwser: function () {
        this.anwser = this.abcArray[Math.floor(Math.random() * this.abcArray.length)];
      },
      updateguessCount: function () {
        document.querySelector('#guessLeft').innerHTML = this.guessCount;
      },
      updateGuessesSoFar: function () {
        document.querySelector('#letter').innerHTML = this.incorrectLetters.join(', ');
      },
      start: function () {
        this.guessCount = 10;
        this.incorrectLetters = [];
        this.updateguessCount();
        this.updateGuessesSoFar();
        this.updateAnwser();
      }
    }

    // var str = "abcdefghijklmnopqrstuvwxyz";
    // // this makes each letter its' own index
    // var abcArray = str.split("");
    // //this makes each letter uppercase and its own index
    // console.log(abcArray);

    // //this pulls out a random letter from the abcArray to use for the anwser
    // var anwser = abcArray[Math.floor(Math.random() * str.length)];

    // //Wins and losses for game
    // var wins = 0;
    // var losses = 0;
    // //how many guesses you start with
    // var guesses = 10;
    // //how many guesses you have left
    // var guessCount = 10;
    // //an empty array to stick your guessed letters in
    // var incorrectLetters = [];

    // var letterToGuess = null;


    // // get random letter
    // var updateLetterToGuess = function () {
    //   letterToGuess = anwser[Math.floor(Math.random() * anwser.length)];
    // };

    // //Allows the user 10 guesses
    // var updateguessCount = function () {
    //   // get the HTML element and setting it equal to the guessCount
    //   document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessCount;
    // };

    // // Takes the guesses that have been tried & displays as letters separated by commas. 
    // var updateGuessesSoFar = function () {
    //   document.querySelector('#letter').innerHTML = "Your Guesses so far: " + incorrectLetters.join(', ');
    // };
    // // resets everything back to starting point
    // var start = function () {
    //   guessCount = 10;
    //   incorrectLetters = [];
    //   updateLetterToGuess();
    //   updateguessCount();
    //   updateGuessesSoFar();
    // }

    // this works to kick off the game for the first time too.
    game.start();



    //determines which key is being clicked, and subtracts 1 from guess counter.
    document.onkeyup = function (event) {
      game.guessCount--;
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      //pushes the user guess (key clicked) into the incorrect letters array
      game.incorrectLetters.push(userGuess);
      game.updateguessCount();
      game.updateGuessesSoFar();

      if (game.guessCount > 0) {
        if (userGuess == game.anwser) {
          game.wins++;
          document.querySelector('#wins').innerHTML = game.wins;
          alert("Correct! You Win!");
          game.start();
        }
      } else if (game.guessCount == 0) {
        // Then we will loss and we'll update the html to display the loss 
        game.losses++;
        document.querySelector('#losses').innerHTML = game.losses;
        alert("Game over! Try again!");
        // makes the game start over & resets counters. 
        game.start();
      }
    };
 