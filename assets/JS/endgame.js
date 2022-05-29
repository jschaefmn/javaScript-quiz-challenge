var score = document.getElementById('score');
var saveScore = document.getElementById('save-score');
var initials = document.getElementById('initials');
var lastScore = document.getElementById('lastScore');
var lastScore = localStorage.getItem('lastScore');
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var maxScores = 5;
finalScore.innerText = lastScore;

initials.addEventListener('keyup', () => {
  saveScore.disabled = !initials.value;
});

saveHighScore = (e) => {
  console.log("save button clicked");
  e.preventDefault();
  var score = {
    score: lastScore,
    name: initials.value
  };
  // add individual high scores, with a max of 5 stored high scores and cut out any after that that don't make the cut
  //sort high scores from highest to lowest
  // store array as a string
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}