// Variable assignment for game box:
var gameBox = document.querySelector('.gamebox')
var currentTurn = 'crosses'
var winStatus = 'none'
var gameText = document.querySelector('h2')
var topRow = Array.from(document.querySelectorAll('.top'))
var midRow = Array.from(document.querySelectorAll('.mid'))
var botRow = Array.from(document.querySelectorAll('.bot'))
var gameGrid = [topRow, midRow, botRow]

// Functions to check row/column/diagonal win conditions
function rowCheck() {
    var checkCount = 0
    for (y = 0; y < 3; y++) {
        console.log('x' + x + ', y' + y)
        if (gameGrid[x][y].classList.contains(currentTurn) === true) {
            checkCount++
            console.log(checkCount)
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
        console.log('x' + x + ', y' + y)
        if (gameGrid[x][y].classList.contains(currentTurn) === true) {
            checkCount++
            console.log(checkCount)
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
        console.log('x' + d + ', y' + d)
        if (gameGrid[d][d].classList.contains(currentTurn) === true) {
            checkCount++
            console.log(checkCount)
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
        console.log('x' + x + ', y' + y)
        if (gameGrid[x][y].classList.contains(currentTurn) === true) {
            checkCount++
            console.log(checkCount)
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
    if (winStatus !== 'none') {
        return
    }
    for (y = 0; y < 3; y++) {
        colCheck()
    }
    if (winStatus !== 'none') {
        return
    }
    diagCheck()
}

function onDraw() {
    gameText.style.textAlign = 'center'
    gameText.textContent = "It's a draw!"
}

function onWin() {
    for (i = 0; i < gameBox.children.length; i++) {
        gameBox.children[i].classList.add('locked')
    }
    if (winStatus === 'crosses') {
        gameText.style.textAlign = 'center'
        gameText.textContent = 'Player X has won!'
    } else if (winStatus === 'noughts') {
        gameText.style.textAlign = 'center'
        gameText.textContent = 'Player O has won!'
    }
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
})
