// function doQuiz() {
//     go-btn-onclick() {
//         // show quiz question one at a time
//     }
// };

setInterval(quizTimer, 1000); //count down by 1000 milliseconds/1 second

function quizTimer() {
    // start timer and show first quiz question?
    // no value initially; only gets value after quiz begins
    // define length of timer (60 seconds)
};

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