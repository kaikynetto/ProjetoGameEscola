const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audioJump = document.querySelector('.audiojump');
const gameOver = document.querySelector('.gameover');
const textStart = document.querySelector('#text-start')
var counterVal = 0;


const jump = () => {
    mario.classList.add('jump');
    counterVal++;
    document.getElementById("score").innerHTML = `<h1>Você pulou ${counterVal} obstáculos!</h1>`;
    
    if(counterVal == 100) {
        window.location.href = "./winner.html";
    }

    audioJump.currentTime = 0.1;
    audioJump.volume = 0.1;
    audioJump.play();
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        gameOver.currentTime = 0.1;
        gameOver.volume = 0.2;
        gameOver.play();

        document.getElementById("text-start").style.color = "black";
        document.getElementById("text-start").innerHTML = "<strong>VOCÊ PERDEU, APERTE F5</strong>";

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
