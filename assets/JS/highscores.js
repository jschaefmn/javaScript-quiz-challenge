var score = document.getElementById('score');
var saveScore = document.getElementById('save-score');
var initials = document.getElementById('initials');
var lastScore = document.getElementById('lastScore');
var lastScore = localStorage.getItem('lastScore');
score.innerText = lastScore;

initials.addEventListener('keyup', () => {
  // saveScore.disabled = !initials.value;
  console.log(initials.value);
});

highScore = (e) => {
  e.preventDefault();
}