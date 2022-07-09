import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, hitWall, biteItself } from './snake.js'
import { update as updateApple, draw as drawApple } from './apple.js'
import { GRID_SIZE } from './grid.js'

const GAME_BOARD = document.getElementById('game-board')
const GAME_OVER_MENU = document.getElementById('game-over-menu')
const NEW_GAME_BTN = document.getElementById('new-game')
const EXIT_BTN = document.getElementById('exit')

let lastRenderTime = 0
let gameOver = false

function main(currentTime) {
  if (gameOver) {
    GAME_OVER_MENU.style.display = 'block'
    return
  }

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
  checkDeath()
}

function draw() {
  GAME_BOARD.innerHTML = ''
  drawSnake(GAME_BOARD)
  drawApple(GAME_BOARD)
}

function checkDeath() {
  gameOver = hitWall(GRID_SIZE) || biteItself()
}

NEW_GAME_BTN.addEventListener('click', function() {
  location.reload()
})

EXIT_BTN.addEventListener('click', function() {
  window.close()
})