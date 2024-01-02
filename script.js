var container = document.getElementById("starter-container");
var quizContent = document.getElementById("quizcontent");
var startButton = document.getElementById("start");
var timer = document.getElementById("timer");

var questions = [
    {
        title: "Arrarys in JavaScript can be used to store _______",
        choices: ["Numbers", "Strings", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        title: "What syntax would call a function?",
        choices: ["var function", "call function", "function()", "None of the above"],
        answer: "function()"
    },
    {
        title: "What does DOM stand for?",
        choices: ["Document Object Model", "Document Object Module", "Document Obtain Model", "None of the above"],
        answer: "Document Object Model"
    },
    {
        title: "When is getItem commonly used?",
        choices: ["Naming an Item", "Local Storage", "Storing Data", "None of the above"],
        answer: "Local Storage"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<h1>", "<script>", "<js>", "<head>"],
        answer: "<script>"
    },
];

var questionIndex = 0;
var createUl = document.createElement("ul");
createUl.setAttribute("id", "options");

var timeInterval = 0;
var secondsLeft = 75;
var wrongAns = 10;

startButton.addEventListener("click", function () {
    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Timer: " + secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timeInterval);
                quizEnd();
            }
        }, 1000);
        newQuestion(questionIndex);
        
    }});

    function newQuestion(questionIndex) {
        quizContent.innerHTML = "";
        createUl.innerHTML = "";
        var currentQuestion = document.createElement("h2");
        for (var i = 0; i < questions.length; i++) {
            currentQuestion.innerHTML = questions[questionIndex].title;
            var displayAnswers = questions[questionIndex].choices;
            quizContent.appendChild(currentQuestion);
        }
        console.log(displayAnswers);
        displayAnswers.forEach(function (newItem) {
            var listItem = document.createElement("li");
            listItem.innerHTML += "<button>" + newItem + "</button>";
            quizContent.appendChild(createUl);
            createUl.appendChild(listItem);
            listItem.addEventListener("click", (checkAnswer));
        })
    }

    
