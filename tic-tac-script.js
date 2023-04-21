// Variable assignment for game box:
var gameBox = document.querySelector('.gamebox')
var currentTurn = 'crosses'
var winStatus = 'none'
var turnText = document.querySelector('h2')

function checkForWin() {
    var toCheck = gameBox.children
    var checkCount = 0
    for (i = 0; i < toCheck.length; i += 3) {
        if (toCheck[i].classList.contains(currentTurn) === true) {
            checkCount += 1
        }
    }
    if (checkCount === 3) {
        winStatus = currentTurn
    }
}

// Turn Alternator (Implented at end of gameBox click event):
function changeTurn() {
    if (currentTurn === 'crosses') {
        currentTurn = 'noughts'
        turnText.textContent = "Player O's turn:"
    } else {
        currentTurn = 'crosses'
        turnText.textContent = "Player X's turn:"
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
