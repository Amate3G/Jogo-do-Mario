const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = "./images/game-over.png"
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        document.getElementById('restart').style.display = "block"
        document.getElementById('gameOver').style.display = "block"

        clearInterval(loop)
        clearInterval(scoree)

    }

}, 10)

    let score = 0
    let scoree = setInterval(() => {
        document.getElementById('score').innerText = "Score: " + score++
    }, 200)
    
    document.getElementById('restart').style.display = "none"
    document.getElementById('gameOver').style.display = "none"


document.addEventListener('keydown', jump)