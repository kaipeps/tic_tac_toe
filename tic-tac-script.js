// Variable assignment for game box:
var gameBox = document.querySelector('.gamebox')
var currentTurn = 'noughts'
var gameGrid = [['top left', 'top center', 'top right'], ['mid left', 'mid center', 'mid right'], ['bot left', 'bot center', 'bot right']]

function checkForWin() {
    var toCheck
    for (r = 0; r < gameGrid.length; r++) {
        toCheck = document.querySelector(gameGrid[r])
        console.log(toCheck)
    }
}

function changeTurn() {
    if (currentTurn === 'noughts') {
        currentTurn = 'crosses'
    } else {
        currentTurn = 'noughts'
    }
}

gameBox.addEventListener('click', function(event) {
    var selectedSpace = event.target
    if (selectedSpace.classList.contains('noughts') === true || selectedSpace.classList.contains('crosses') === true) {
        return
    } else if (currentTurn === 'noughts') {
        selectedSpace.classList.add('noughts')
    } else {
        selectedSpace.classList.add('crosses')
    }
    checkForWin()
    changeTurn()
})