import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'
import { update as updateApple, draw as drawApple } from './apple.js'

let lastRenderTime = 0
const GAME_BOARD = document.getElementById('game-board')

function main(currentTime) {
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime
  console.log('Render')

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateApple()
}

function draw() {
  GAME_BOARD.innerHTML = ''
  drawSnake(GAME_BOARD)
  drawApple(GAME_BOARD)
}