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
    for (y = 0; y < 3; y++) {
        if (gameGrid[x][y].classList.contains(currentTurn) === true) {
            checkCount++
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
    for (x = 0; x < 3; x++) {
        if (gameGrid[x][y].classList.contains(currentTurn) === true) {
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
function diagCheck() {
    var checkCount = 0
    // Forward Diagonal
    for (d = 0; d < 3; d++) {
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
    for (x = 0; x < 3; x++) {
        for (y = 2; y >= 0; y--) {
            if (gameGrid[x][y].classList.contains(currentTurn) === true) {
                checkCount++
                console.log(checkCount)
            }
        }
    }
    if (checkCount === 3) {
        winStatus = currentTurn
        return
    } else {
        checkCount = 0
    }
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

function checkForWin() {
    for (x = 0; x < 3; x++) {
        console.log('row check')
        rowCheck()
    }
    if (winStatus !== 'none') {
        return
    }
    for (y = 0; y < 3; y++) {
        console.log('column check')
        colCheck()
    }
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
    if (selectedSpace.classList.contains('locked') === true) {
        return
    } else {
        selectedSpace.classList.add(currentTurn, 'locked')
    }
    checkForWin()
    if (winStatus !== 'none') {
        onWin()
    } else {
        changeTurn()
    }
})
