import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 7
const SNAKE_BODY = [{ x:11, y:11 }]
let newSegments = 0

export function update() {
  for (let i = SNAKE_BODY.length - 2; i >= 0; i--) {
    SNAKE_BODY[i + 1] = { ...SNAKE_BODY[i] }
  }

  SNAKE_BODY[0].x += getInputDirection().x
  SNAKE_BODY[0].y += getInputDirection().y

  addSegments()
  newSegments = 0
}

export function draw(gameBoard) {
  SNAKE_BODY.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.style.gridRowStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function onSnake(position) {
  return SNAKE_BODY.some(segment => {
    return equalPositions(segment, position)
  })
}

function equalPositions(pos1, pos2) {
  return pos1.x == pos2.x && pos1.y == pos2.y
}

export function expandSnake(amount) {
  newSegments += amount
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    SNAKE_BODY.push({ ...SNAKE_BODY[SNAKE_BODY.length - 1] })
  }
}