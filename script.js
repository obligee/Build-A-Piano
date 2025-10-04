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

// Keyboard functionality
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
  if (e.repeat) return; 

  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});
//melody represented by an array of objects
const marioTheme = [
  //opening “da-da-da-da” 
  { key: 'E', duration: 150 },
  { key: 'E', duration: 150 },
  { key: 'E', duration: 150 },
  { key: 'C', duration: 150 },
  { key: 'E', duration: 150 },
  { key: 'G', duration: 300 },
  { key: 'G', duration: 300 },

  { key: 'C', duration: 150 },
  { key: 'G', duration: 150 },
  { key: 'E', duration: 150 },
  { key: 'A', duration: 150 },
  { key: 'B', duration: 300 },
  { key: 'Bb', duration: 150 },
  { key: 'A', duration: 150 },
  { key: 'G', duration: 300 },

  { key: 'E', duration: 150 },
  { key: 'G', duration: 150 },
  { key: 'A', duration: 150 },
  { key: 'F', duration: 150 },
  { key: 'G', duration: 300 },
  { key: 'E', duration: 150 },
  { key: 'C', duration: 150 },
  { key: 'D', duration: 150 },
  { key: 'B', duration: 400 },

];
function playSong(song) {
  let delay = 0;

  song.forEach(note => {
    setTimeout(() => {
      const keyElement = document.querySelector(`[data-note="${note.key}"]`);
      if (keyElement) {
        playNote(keyElement);
      }
    }, delay);
    delay += note.duration;
  });
  
}
// Hook the button to play the song
document.getElementById('mario-btn').addEventListener('click', () => {
  playSong(marioTheme);
});
