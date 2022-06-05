window.addEventListener('keydown' ,playSound );

function playSound (e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!sound) return; 
    sound.currentTime = 0; //sets the audio to the start so it can be hit multiple times
    sound.play(); //plays the audio
    key.classList.add("playing"); //adds transition and border
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip it if it's not transform
    e.target.classList.remove('playing'); //removes the class 'playing'
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend' , removeTransition)); //removes the 
// transform property after the transition ends

