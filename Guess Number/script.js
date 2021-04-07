// Variable to store the list of guesses 
const guesses = new Array();

// Variable for store the correct random number 
let correctNumber = getRandomNumber();


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);

  /*Input Enter Effect*/

const input = document.querySelector("#number-guess");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(e) {
  // Number 13 is the "Enter" key on the keyboard
  if (e.keyCode === 13) {
    // Cancel the default action, if neededs
    e.preventDefault();
    // Trigger the button element with a click
    document.getElementById("number-submit").click();
  }
});

}

/**
 * Functionality for playing the whole game
 */

function playGame() {

  const numberGuess = document.getElementById("number-guess").value;
  checkNumber(numberGuess)
  saveGuessHistory(numberGuess);
  displayHistory()
  


}
  /**
   * Show the result for if the guess it too high, too low, or correct
   */

function checkNumber(numberGuess) {
  const button = document.getElementById("number-submit");

  /*If-Else Structure*/

  // if (numberGuess == correctNumber) {
  //   console.log("Correct Number");
    
  // } else if (numberGuess > correctNumber) {
  //   console.log("Higher than Number");
  // }
  // else if (numberGuess < correctNumber) {
  //   console.log("Lower than Number")
  // }
  // else{
  //     console.log("Wrong Value you have entered")
  // };
  /* Switch Case Structure*/

  switch (true) {
    
    case (numberGuess == ""):
          alert("Please Enter The Number")
      break;
    case (numberGuess == correctNumber):
      showYouWon();
      button.disabled = true;
      
      break;
    case (numberGuess < correctNumber):
      showNumberBelow();
      break;
    case (numberGuess > correctNumber):
      showNumberAbove();
      break;
   
  }
    
  }



  /**
   * Initialize a new game by resetting all values and content on the page
   */
  function initGame() {

    correctNumber = Math.floor(Math.random() * 100) + 1;
    resetResultContent();
    resetGuessArray();
    resetChild()

  }

  /**
   * Reset the HTML content for guess history
   */
  function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}
function resetGuessArray() {
  guesses.length = 0;
  }
function resetChild() {
  let history = document.getElementById("history");
  while (history.firstChild) {
    history.removeChild(history.firstChild)
  }

  
}
  /**
   * Return a random number between 1 and 100
   */
  function getRandomNumber() {
    // *CODE GOES BELOW HERE *
    const randomNumber = Math.random();
    const wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
  }

  /**
   * Save guess history 
   */
  function saveGuessHistory(guess) {
    guesses.push(guess)
  }

  /**
   * Display guess history to user
   */
function displayHistory() {
  let i = guesses.length - 1; 
  let list = "<ul class='list-group'>";
 
  
  while (i>=0) {
    if (guesses[i] !== "") {
      let index = `<li class='list-group-item'>You guessed ${guesses[i]}</li>`
      list += index;
      list += '</ul>'
      i -= 1;
    }
    else {
      i -= 1;
    }
  }
    document.getElementById("history").innerHTML = list;
  }



  /**
   * Retrieve the dialog based on if the guess is wrong or correct 
   */
  function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
      case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>"
        break;
      case "won":
        dialog = "<div class='alert alert-success' role='alert'>"
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
  }

  function showYouWon() {
    const text = "Awesome job, you got it!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     */
    dialog=getDialog("won",text)

    document.getElementById("result").innerHTML = dialog;
  }

  function showNumberAbove() {
    const text = "Your guess is too high!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     */

    dialog=getDialog("warning",text)

    document.getElementById("result").innerHTML = dialog;
  };

  function showNumberBelow() {
    const text = "Your guess is too low!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     */
    dialog=getDialog("warning",text)


    document.getElementById("result").innerHTML = dialog;
  }

