var listOfHighScores = document.getElementById('listOfHighScores');
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

// create ordered list of high scores from highest to lowest


listOfHighScores.innerHTML = highScores.map(score => {
  return `<li class="score-item">${score.name}-${score.score}</li>`;
})
  .join("");

