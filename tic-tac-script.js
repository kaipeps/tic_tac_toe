// Variable assignment for game box:
var gameBox = document.querySelector('.gamebox')
var currentTurn = 'crosses'
var winStatus = 'none'
var gameText = document.querySelector('h2')
var topRow = Array.from(document.querySelectorAll('.top'))
var midRow = Array.from(document.querySelectorAll('.mid'))
var botRow = Array.from(document.querySelectorAll('.bot'))
var gameGrid = [topRow, midRow, botRow]

function rowCheck() {
    var checkCount = 0
    for (c = 0; c < gameGrid[r].length; c++) {
        console.log(gameGrid[r][c].classList)
        if (gameGrid[r][c].classList.contains(currentTurn) === true) {
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
}
function colCheck() {
    var checkCount = 0
    for (c = 0; c < gameGrid[r].length; c++) {
        toCheck = gameGrid
        // if (toCheck[r].classList.contains(currentTurn) === true) {
        //     checkCount++
        // }
        // if (checkCount === 3) {
        //     winStatus = currentTurn
        // } else {
        //     checkCount = 0
        // }
    }
}
function diagCheck() {

}

function displayWin() {
    if (winStatus === 'crosses') {
        gameText.style.textAlign = 'center'
        gameText.textContent = 'Player X has won!'
    } else if (winStatus === 'noughts') {
        gameText.style.textAlign = 'center'
        gameText.textContent = 'Player O has won!'
    }
}

function checkForWin() {
    rowCheck()
    if (winStatus !== 'none') {
        return
    }
    colCheck()
    if (winStatus !== 'none') {
        return
    }
    diagCheck()
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

gameBox.addEventListener('click', function(event) {
    var selectedSpace = event.target
    if (selectedSpace.classList.contains('crosses') === true || selectedSpace.classList.contains('noughts') === true) {
        return
    } else {
        selectedSpace.classList.add(currentTurn)
    }
    checkForWin()
    if (winStatus !== 'none') {
        displayWin()
    } else {
        changeTurn()
    }
})
