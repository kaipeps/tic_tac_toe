// Variable assignment for game box:
var gameBox = document.querySelector('.gamebox')
var currentTurn = 'crosses'
var winStatus = 'none'
var crossesWins = 0
var noughtsWins = 0
var gameText = document.querySelector('h2')
var topRow = document.querySelectorAll('.top')
var midRow = document.querySelectorAll('.mid')
var botRow = document.querySelectorAll('.bot')
var gameGrid = [topRow, midRow, botRow]
var scoreText = document.querySelector('h3')

// Functions to check row/column/diagonal win conditions
function rowCheck() {
    var checkCount = 0
    for (y = 0; y < 3; y++) {
        if (gameGrid[x][y].classList.contains(currentTurn) === true) {
            checkCount++
        }
    }
    if (checkCount === 3) {
        winStatus = currentTurn
        return
    }
}
function colCheck() {
    var checkCount = 0
    for (x = 0; x < 3; x++) {
        if (gameGrid[x][y].classList.contains(currentTurn) === true) {
            checkCount++
        }
    }
    if (checkCount === 3) {
        winStatus = currentTurn
        return
    }
}
function diagCheck() {
    var checkCount = 0
    // Forward Diagonal
    for (d = 0; d < 3; d++) {
        if (gameGrid[d][d].classList.contains(currentTurn) === true) {
            checkCount++
        }
    }
    if (checkCount === 3) {
        winStatus = currentTurn
        return
    } else {
        checkCount = 0
    }
    // Backward Diagonal
    var y = 2
    for (x = 0; x < 3; x++) {
        if (gameGrid[x][y].classList.contains(currentTurn) === true) {
            checkCount++
        }
        y--
    }
    if (checkCount === 3) {
        winStatus = currentTurn
        return
    }
}

function checkForDraw() {
    var lockCount = 0
    for (i = 0; i < gameBox.children.length; i++) {
        if (gameBox.children[i].classList.contains('locked')) {
            lockCount++
        }
    }
    if (lockCount === 9) {
        winStatus = 'draw'
    }
}

function checkForWin() {
    for (x = 0; x < 3; x++) {
        rowCheck()
    }
    for (y = 0; y < 3; y++) {
        colCheck()
    }
    diagCheck()
}

function onDraw() {
    gameText.style.textAlign = 'center'
    gameText.textContent = "It's a draw! Click here to reset the board."
    gameText.classList.toggle('reset-active')
}

function onWin() {
    for (i = 0; i < gameBox.children.length; i++) {
        gameBox.children[i].classList.add('locked')
    }
    if (winStatus === 'crosses') {
        crossesWins += 1
        gameText.style.textAlign = 'center'
        gameText.textContent = 'Player X has won! Click here to reset the board.'
    } else if (winStatus === 'noughts') {
        noughtsWins += 1
        gameText.style.textAlign = 'center'
        gameText.textContent = 'Player O has won! Click here to reset the board.'
    }
    gameText.classList.toggle('reset-active')
    var scoreTextArray = ['Scores - X\'s: ', crossesWins, ' - O\'s: ', noughtsWins]
    scoreText.textContent = scoreTextArray.join('')
}

// Turn Alternator (Implented at end of gameBox click event):
function changeTurn() {
    if (currentTurn === 'crosses') {
        currentTurn = 'noughts'
        gameText.textContent = "Player O's turn:"
    } else {
        currentTurn = 'crosses'
        gameText.textContent = "Player X's turn:"
    }
}

// Gamebox event listener
gameBox.addEventListener('click', function(event) {
    var selectedSpace = event.target
    if (selectedSpace.classList.contains('gamebox') === false) {
        if (selectedSpace.classList.contains('locked') === true) {
            return
        } else {
            selectedSpace.classList.add(currentTurn, 'locked')
        }
        checkForDraw()
        checkForWin()
        if (winStatus === 'draw') {
            onDraw()
        } else if (winStatus !== 'none') {
            onWin()
        } else {
            changeTurn()
        }
    }
})

function reset() {
    winStatus = 'none'
    currentTurn = 'crosses'
    gameText.textContent = "Player X's turn:"
    gameText.style.textAlign = 'initial'
    gameText.classList.toggle('reset-active')
    for (i = 0; i < gameBox.children.length; i++) {
        gameBox.children[i].classList.remove('noughts', 'crosses', 'locked')
    }
}

// Reset event listener
gameText.addEventListener('click', function() {
    if (gameText.classList.contains('reset-active')) {
        reset()
    }
})
