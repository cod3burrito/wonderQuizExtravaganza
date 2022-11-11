var questions = [
    {
        question: "True or False: JavaScript is related to Java.",
        choiceA: "True",
        choiceB: "False",
        correct: "B: False"
    }, {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "C: alerts"
    }, {
        question: "The condition in an if/else statement is enclosed with __.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parentheses",
        choiceD: "square brackets",
        correct: "C: Parentheses"
    }, {
        question: "Arrays in JavaScript can be used to store __.",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        correct: "D: All of the above"
    }, {
        question: "String values must be enclosed within __ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parentheses",
        correct: "C: Quotes"
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "terminal/bash",
        choiceC: "for loops",
        choiceD: "console.log",
        correct: "D: console.log"
    }
];

var quizScore = 0;
var quizletQuestions = 0;
var timeRemaining = document.querySelector("#timer");
var quiz = document.querySelector("#quiz");
var quizBox = document.querySelector("#quizBox");

var button = document.getElementById("go-btn"); 

//timer elements
function startQuiz(param) {
    document.getElementById("quiz", "style: display").style.display;
    }
    timer = 75
    let quizTimer = setInterval(() => {
        countdown --;
        if(timer === 0){
            alert("Time is up!")
            clearInterval(quizTimer)
        }
    }, 1000);
    for(let i = 0; i < questions.length; i++) {
    questions[i];
    };
    document.getElementById("timer", "style: block").style.display;
    questions.appendChild("quiz", "style: block");

button.addEventListener("click", startQuiz)