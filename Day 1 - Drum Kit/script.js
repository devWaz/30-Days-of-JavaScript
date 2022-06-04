window.addEventListener('keydown' , (e) => {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    sound.play()
});