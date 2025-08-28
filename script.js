const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  //resets current notes time to 0
  noteAudio.currentTime = 0;
  noteAudio.play();
  //for styling purposes
  key.classList.add('active');  
  //listen for when the sound has ended and remove the active class
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}