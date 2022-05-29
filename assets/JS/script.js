const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('option'));
var scoreText = document.getElementById('score');
var currentQuestion = {};
var score = 0;
var questionCount = 0;
var questionsLeft = [];
var sec = 60;
var time = setInterval(myTimer, 1000);

var questions = [
  {
    question: 'Commonly used data types do not include:',
    choice1: 'Strings',
    choice2: 'Booleans',
    choice3: 'Alerts',
    choice4: 'Numbers',
    answer: 3,
  },
  {
    question: 'The condition in an if/else statement is enclosed with _______',
    choice1: 'quotes',
    choice2: 'curly brackets',
    choice3: 'parentheses',
    choice4: 'square brackets',
    answer: 3,
  },
  {
    question: 'Arrays in JavaScript can be used to store _______',
    choice1: 'Numbers and Strings',
    choice2: 'Other Arrays',
    choice3: 'Booleans',
    choice4: 'All of the above',
    answer: 4,
  },
  {
    question: 'JavaScript is super fun to learn! :)',
    choice1: 'Correct',
    choice2: 'Incorrect',
    choice3: 'My brain hurts',
    choice4: 'I like turtles',
    answer: 3,
  },
];

var maxQuestions = 4;
var correctAns = 10;

// user starts game, call timer function
// set user score to 0
// randomize question order so when user starts a new game they don't get the same order of questions

var startGame = function () {
  questionCount = 0;
  score = 0;
  questionsLeft = [...questions];
  nextQuestion();
  // myTimer();
}

function myTimer() {
  document.getElementById('timer').innerHTML = "Time Remaining:" + " " + sec + " " + "seconds";
  sec--;
  if (sec == -1) {
    clearInterval(time);
    alert('Out of Time!');
    return window.location.assign('./highscores.html');
  }
}
// when user selects CORRECT answer, let them know it is correct
// add 10 points
// store score
// display next question
var nextQuestion = function () {
  if (questionsLeft.length === 0 || questionCount >= maxQuestions) {
    return window.location.assign('./highscores.html');
  }
  questionCount++;
  var questionLocation = Math.floor(Math.random() * questionsLeft.length)
  currentQuestion = questionsLeft[questionLocation];
  question.innerText = currentQuestion.question;

  choices.forEach((option) => {
    var number = option.dataset['number'];
    option.innerText = currentQuestion['choice' + number];
  });

  questionsLeft.splice(questionLocation, 1);
};

choices.forEach(choice => {
  choice.addEventListener('click', (e) => {
    var userSelect = e.target;
    var userAnswer = userSelect.dataset['number'];

    var changeValue = 'incorrect';
    if (userAnswer == currentQuestion.answer) {
      changeValue = 'correct';
      addPoints(correctAns);
    }
    userSelect.parentElement.classList.add(changeValue);

    nextQuestion()
  });
});

addPoints = num => {
  score += num;
  scoreText.innerText = "Score:" + " " + score;
}

startGame();

// when user selects INCORRECT answer, let them know it is incorrect
// subtract 10 points
// store score
// display next question

// when user runs out of time => prompt alert "You are out of time" and bring them to a scores page to enter their name