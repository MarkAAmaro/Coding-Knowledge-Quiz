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

//start function
    function startQuiz() {
      startBtn.style.display = "none";
      quiz.style.display = "block";
    }

    //call the button
    startBtn.addEventListener("click", startQuiz);