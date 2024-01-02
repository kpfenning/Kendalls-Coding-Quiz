var container = document.getElementById("starter-container");
var quizContent = document.getElementById("quizcontent");
var startButton = document.getElementById("start");
var timer = document.getElementById("timer");
var score = 0;

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
        choices: ["h1", "script", "js", "head"],
        answer: "script"
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

    var i = 0;
    var newDiv = document.createElement("div");
    var feedback = document.createElement("h3");
    newDiv.setAttribute("id", "newDiv");
    function checkAnswer(event) {
        var choice = event.target;
        quizContent.appendChild(newDiv);
        newDiv.appendChild(feedback);
        var nextQuestion = document.createElement("button");
        nextQuestion.setAttribute("id", "nextButton");
        nextQuestion.textContent = "Next Question";

        if (choice.textContent === questions[questionIndex].answer) {
            score++;
            feedback.textContent = "Correct!";
            newDiv.appendChild(feedback);
            newDiv.appendChild(nextQuestion);
            nextQuestion.addEventListener("click", (nextElement));
        } else {
            secondsLeft = secondsLeft - wrongAns;
            feedback.textContent = "Wrong!";
            newDiv.appendChild(feedback);
        }
    }

    function nextElement(event) {
        newDiv.innerHTML = "";
        questionIndex++;
        if (questionIndex >= questions.length) {
            quizEnd();
        } else {
            newQuestion(questionIndex);
        }
    }

    function quizEnd() {
        quizContent.innerHTML = "";
        timer.innerHTML = "";
        var newH1 = document.createElement("h1");
        newH1.setAttribute("id", "score");
        newH1.textContent = "Done!!"
        quizContent.appendChild(newH1);

        if (secondsLeft >= 0) {
            score = secondsLeft;
            clearInterval(timeInterval);
            var newPElement = document.createElement("p");
            newPElement.textContent = "Your final score is " + score;
            quizContent.appendChild(newPElement);
        } else {
            score = 0;
            var noTime = document.createElement("h2");
            noTime.textContent = "You ran out of time!";
            quizContent.appendChild(noTime);
            var newPElement = document.createElement("p");
            newPElement.textContent = "Your final score is " + score;
            quizContent.appendChild(newPElement);
        }

    var initials = document.createElement("label");
    initials.setAttribute("for", "input");
    initials.textContent = "Enter Initials: ";
    quizContent.appendChild(initials);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "input");
    input.textContent = "";
    quizContent.appendChild(input);

    var submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.textContent = "Submit!";
    quizContent.appendChild(submit);

    submit.addEventListener("click", function () {
        var scoreInitials = input.value;
        if (scoreInitials === "") {
            window.alert("Please enter initials!");
        } else {
            var finalScore = {
                initials: scoreInitials,
                score: score
            }
            var storeScore = localStorage.getItem("storeScores");
            if (storeScore === null) {
                storeScore = [];
            } else {
                storeScore = JSON.parse(storeScore);
            }
            storeScore.push(finalScore);
            var newScore = JSON.stringify(storeScore);
            localStorage.setItem("storeScores", newScore);
            window.location.href = "highscores.html";
        }
    });
    };


