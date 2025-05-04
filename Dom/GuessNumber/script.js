let random = parseInt(Math.random() * 100 + 1)
console.log(random);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.Guesses')
const remaining = document.querySelector('.lastresult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultparas')

const p = document.createElement('p')

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if (guess > 100 || guess < 1){
        alert('Please enter a number less then 100')
    } else {
        preGuess.push(guess)
        if(numGuess === 11){
            displayguess(guess)
            displayMessage(`Game Over. Random number was ${random}`)
            endGame()
        } else {
            displayguess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess === random){
        displayMessage('You guessed it right')
        endGame()
    } else if(guess < random){
        displayMessage('number is too low')
    } else if(guess > random){
        displayMessage('number is too high')

    } 
}
function displayguess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}
function newGame(){
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
        playGame = true
    })
}







