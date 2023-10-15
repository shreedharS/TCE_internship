const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get the HTML elements
const guessField = document.getElementById("guessField");
const guessSubmit = document.getElementById("guessSubmit");
const message = document.querySelector(".message");

// Variables to keep track of the game state
let guessCount = 0;
let isGameOver = false;

// Add event listener to the Submit button
guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    if (isGameOver) {
        return;
    }

    const userGuess = parseInt(guessField.value);
    guessCount++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number in ${guessCount} tries.`;
        message.style.color = "green";
        isGameOver = true;
    } else if (guessCount === 10) {
        message.textContent = `Game Over. The correct number was ${randomNumber}.`;
        message.style.color = "red";
        isGameOver = true;
    } else {
        message.textContent = `Wrong guess. Try again. (Attempt ${guessCount})`;
        message.style.color = "red";
    }

    guessField.value = "";
}