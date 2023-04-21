// Variable assignment for game box:
var gameBox = document.querySelector('.gamebox')
var currentTurn = 'crosses'
var winStatus = 'none'
var gameText = document.querySelector('h2')

function checkForWin() {
    var toCheck = gameBox.children
    var rowCount = 0
    var columnCount = 0
    var diagonalCount = 0
    for (i = 0; i < toCheck.length; i++) {
        // winStatus = currentTurn
    }
    for (i = 0; i < toCheck.length; i += 3) {
        // winStatus = currentTurn
    }
    for (i = 0; i < toCheck.length; i += 4) {
        // winStatus = currentTurn
    }
    for (i = 2; i < 7; i += 2)
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

gameBox.addEventListener('click', function(event) {
    var selectedSpace = event.target
    if (selectedSpace.classList.contains('crosses') === true || selectedSpace.classList.contains('noughts') === true) {
        return
    } else {
        selectedSpace.classList.add(currentTurn)
    }
    checkForWin()
    changeTurn()
})
