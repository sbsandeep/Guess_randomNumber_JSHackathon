let guesses_taken = 0;
let guessedNumbersDisplay = document.getElementById("guessedNumbers");
let guessedNumbers = []; 
const audioWin = document.getElementById("sound");
const audioLose = document.getElementById("sound2");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("randomNumber: ", randomNumber);
document.addEventListener("DOMContentLoaded", function() {  
    const playButton = document.getElementById("playButton");
    playButton.addEventListener("mouseover", function() {
        playButton.style.transform = "scale(1.1)";
    });
    playButton.addEventListener("mouseout", function() {
        playButton.style.transform = "scale(1)";
    });
});

function checkGuess(event) {
    event.preventDefault();
    let user_guessInput = document.getElementById("guessInput").value;
    user_guessInput = parseInt(user_guessInput);

    if (isNaN(user_guessInput) || user_guessInput < 1 || user_guessInput > 100) {
        document.getElementById("feedback").innerText = "Error, please enter a number between 1 and 100.";
        return;
    }

    guesses_taken++;
    document.getElementById("attempts").innerHTML = "No of Attempts Taken to guess the random number: " + guesses_taken;
     
    guessedNumbers.push(user_guessInput);
    guessedNumbersDisplay.textContent = guessedNumbers.join(", ");
    if (user_guessInput === randomNumber) {
        
        document.getElementById("playAgain").disabled = false;
        document.getElementById("close").disabled = false;
        document.body.style.backgroundColor = "green";    
        document.getElementById("attempts").innerHTML = "";
        document.getElementById("score").innerHTML = "You got it in, "  + guesses_taken  + " guesses.";
        document.getElementById("feedback").innerHTML = "";
        document.getElementById("clapEmoji").style.display = "block";
        audioWin.play();
        return;
    } else if (user_guessInput > randomNumber) {
        document.getElementById("feedback").innerHTML = "Error, the number you inserted is greater than the guess, please try again with a lower number!";
    } else {
        document.getElementById("feedback").innerHTML = "Error, this number you have inserted is less than the randomNumber, please try again with a higher number!";
    }
}

function onClose() {
    if (document.getElementById('playAgain').checked == true) {   
        location.reload();
    } else {  
        document.body.innerHTML = "<h1>Thank for playing Guess the Number Game</h1>";  
    } 
}
