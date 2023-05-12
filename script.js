//Questions to be used for the quiz
const quizData = [
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Highly Textured Markup Language",
        "Hyperlink Text Management Language",
        "Home Tool Markup Language"
      ],
      answer: 0
    },
    {
      question: "What does CSS stand for?",
      choices: [
        "Colorful Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets"
      ],
      answer: 1
    },
    {
      question: "What does JS stand for?",
      choices: [
        "JavaSimple",
        "JavaServer",
        "JavaSyntax",
        "JavaScript"
      ],
      answer: 3
    }
  ];

    // Variables used that can not be changed 
    const startBtn = document.getElementById("start-button");
    const quiz = document.getElementById("quiz");
    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");
    const submitBtn = document.getElementById("submit-button");
    const gameOver = document.getElementById("game-over");
    const timeEl = document.getElementById("time");
    const initialsEl = document.getElementById("initials");
    const scoreEl = document.getElementById("score");
    let currentQuestion = 0
    let score = 0;
    let timeLeft = 60;
    let timer;
//start function
    function startQuiz() {
      startBtn.style.display = "none";
      quiz.style.display = "block";
      showQuestion();
      startTimer();
    }
//display current question into the next
function showQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  choicesEl.innerHTML = "";
  for (let i = 0; i < currentQuiz.choices.length; i++) {
    const choice = currentQuiz.choices[i];
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", function() {
      if (i === currentQuiz.answer) {
        score++;
      }
      if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        showQuestion();
      } else {
        endQuiz();
      }
    });
    choicesEl.appendChild(btn); //appended button to allow choices to continue when answer selected
  }
}
      function startTimer() {
        timer = setInterval(function() {
          timeLeft--;
          timeEl.textContent = "Time: " + timeLeft;
          if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
          }
        }, 1000);
      }
//end quiz function
function endQuiz() {
  clearInterval(timer);
  quiz.style.display = "none";
  gameOver.style.display = "block";
  scoreEl.textContent = score;
}

    //call the button
    startBtn.addEventListener("click", startQuiz);