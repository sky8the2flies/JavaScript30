const keys = document.querySelector('.keys');

keys.addEventListener('transitionend', removeTransition);
window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop function if no key
  audio.currentTime = 0;
  audio.play()
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip if not transform
  e.target.classList.remove('playing');
}