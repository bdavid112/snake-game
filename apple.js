import { expandSnake, onSnake } from "./snake.js"
import { getRandomGridPosition } from './grid.js'

let position = getRandomApplePosition()
let scoreText = document.querySelectorAll('.score-text')
let score = 0
const EXPANSION_RATE = 1

export function update() {
  if (onSnake(position)) {
      expandSnake(EXPANSION_RATE)
      addScore(EXPANSION_RATE)
      position = getRandomApplePosition()
  }
}

export function draw(gameBoard) {
  const appleElement = document.createElement('div')
  appleElement.style.gridColumnStart = position.x
  appleElement.style.gridRowStart = position.y
  appleElement.classList.add('apple')
  gameBoard.appendChild(appleElement)
}

function getRandomApplePosition() {
  let newPosition
  while (newPosition == null || onSnake(newPosition)) {
    newPosition = getRandomGridPosition()
    console.log(newPosition)
  }
  return newPosition
}

function addScore(value) {
  score += value
  scoreText.forEach(text => {
    text.innerHTML = 'Score: ' + score
  })

}