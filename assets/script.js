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
// } 

//count down by 1000 milliseconds (1 second)
function startQuiz(param) {
    alert(param)
    document.getElementById("quiz", "style: display").style.display;
    }
    timer = 10
    let quizTimer = setInterval(() => {
        console.log(timer--)
        if(timer === 0){
            alert('time is up!')
            clearInterval(quizTimer)
        }
    }, 1000);
    for(let i = 0; i < questions.length; i++) {
        console.log(questions[i]);
    };

function goQuiz() {
    // console.log("hello!");
    // display timer and questions (1 at a time)
    document.getElementById("timer", "style: block").style.display;
    document.getElementById("quiz", "style: block");
    questions.appendChild(quiz);
}