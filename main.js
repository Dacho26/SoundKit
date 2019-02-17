let recordflag = false;
let sound = [];
let startBtn = document.querySelector('.Start');
let stopBtn = document.querySelector('.Stop');
let playBtn = document.querySelector('.Play');

startBtn.addEventListener("click", () => {
    recordflag = true;
    sound = [];
})

stopBtn.addEventListener("click", () => {
    recordflag = false;
})

playBtn.addEventListener("click", () => {


})

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function endSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key)
        return;
    key.classList.remove('playing');
}


window.addEventListener('keydown', playSound)
window.addEventListener('keyup', endSound)

console.log("bla");