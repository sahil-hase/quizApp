const allQuizData = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which language runs in a web browser?",
        answers: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does CSS stand for?",
        answers: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        correct: 1
    },
    {
        question: "What year was JavaScript launched?",
        answers: ["1996", "1995", "1994", "None of the above"],
        correct: 1
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Microsoft", "Netscape", "Google", "Apple"],
        correct: 1
    },
    {
        question: "HTML stands for?",
        answers: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None of these"],
        correct: 0
    }
];

let quizData = [];
let currentQuestion = 0;
let score = 0;

function generateQuiz() {
    quizData = [...allQuizData].sort(() => 0.5 - Math.random()).slice(0, 4); // Select 4 random questions

    const generateBtn = document.getElementById("generate");
    const startBtn = document.getElementById("start");

    generateBtn.style.display = "none";
    startBtn.style.display = "block";
}

function startQuiz() {
    const startBtn = document.getElementById("start");
    const quiz = document.getElementById("quiz");

    startBtn.style.display = "none";
    quiz.style.display = "block";

    loadQuiz();
}

function loadQuiz() {
    const questionEl = document.getElementById("question");
    const btn0 = document.getElementById("btn0");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    questionEl.textContent = quizData[currentQuestion].question;
    btn0.textContent = quizData[currentQuestion].answers[0];
    btn1.textContent = quizData[currentQuestion].answers[1];
    btn2.textContent = quizData[currentQuestion].answers[2];
    btn3.textContent = quizData[currentQuestion].answers[3];
}

function selectAnswer(index) {
    if (index === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

function showResult() {
    const quiz = document.getElementById("quiz");
    const result = document.getElementById("result");
    const restartBtn = document.getElementById("restart");
    const correctAnswers = document.getElementById("correct-answers");

    quiz.style.display = "none";
    result.style.display = "block";
    restartBtn.style.display = "block";
    correctAnswers.style.display = "block";

    result.textContent = `You answered ${score} out of ${quizData.length} questions correctly.`;

    let correctText = "<strong>Correct Answers:</strong><ul>";
    quizData.forEach((q, i) => {
        correctText += `<li>${i + 1}. ${q.question} - <em>${q.answers[q.correct]}</em></li>`;
    });
    correctText += "</ul>";
    correctAnswers.innerHTML = correctText;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    const quiz = document.getElementById("quiz");
    const result = document.getElementById("result");
    const restartBtn = document.getElementById("restart");
    const generateBtn = document.getElementById("generate");
    const correctAnswers = document.getElementById("correct-answers");

    quiz.style.display = "none";
    result.style.display = "none";
    restartBtn.style.display = "none";
    correctAnswers.style.display = "none";
    generateBtn.style.display = "block";
}

