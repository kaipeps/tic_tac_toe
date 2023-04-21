// Variable assignment for game box:
var gameBox = document.querySelector('.gamebox')
var topRow = Array.from(document.querySelectorAll('.top'))
var midRow = Array.from(document.querySelectorAll('.mid'))
var botRow = Array.from(document.querySelectorAll('.bot'))
var leftCol = Array.from(document.querySelectorAll('.left'))
var centerCol = Array.from(document.querySelectorAll('.center'))
var rightCol = Array.from(document.querySelectorAll('.right'))
var currentTurn = 'noughts'

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
    changeTurn()
})