const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "High Text Markup Language", "Hyper Text Machine Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JavaScript", "CSS", "XML"],
        answer: "CSS"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which JavaScript framework is used for building user interfaces?",
        options: ["React", "Django", "Laravel", "Spring"],
        answer: "React"
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["To refer to the global object", "To refer to the current function", "To refer to the current object", "None of the above"],
        answer: "To refer to the current object"
    },
    {
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        answer: "MongoDB"
    },
    {
        question: "What is REST in web development?",
        options: ["Representational State Transfer", "Representational Standard Transfer", "Regular State Transfer", "None of the above"],
        answer: "Representational State Transfer"
    },
    {
        question: "Which HTTP method is used to create a resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: "POST"
    },
    {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Application Programming Integration", "Applied Programming Interface", "None of the above"],
        answer: "Application Programming Interface"
    },
    {
        question: "Which of the following is a backend language?",
        options: ["JavaScript", "Python", "HTML", "CSS"],
        answer: "Python"
    },
];

let currentQuestionIndex = 0;
let score = 0;

// Get DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

// Load question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    });
}

// Select option
function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Show result
function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
}

// Load first question
loadQuestion();
