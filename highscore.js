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

var storeScores = localStorage.getItem("storeScores");
storeScores = JSON.parse(storeScores);

if (storeScores!== null) {
    for (var i = 0; i < storeScores.length; i++) {
        var newLi = document.createElement("li");
        newLi.setAttribute("id", "score");
        newLi.textContent = storeScores[i].initials + " - " + storeScores[i].score;
        highScores.appendChild(newLi);
    }
}
