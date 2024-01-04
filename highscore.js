var scoreContainer = document.querySelector("#quizcontent");
var highScores = document.querySelector("#displayScore");
var homeBtn = document.querySelector("#home");
var clearBtn = document.querySelector("#clear");

homeBtn.addEventListener("click", function () {
    window.location.replace("index.html");
});

clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

