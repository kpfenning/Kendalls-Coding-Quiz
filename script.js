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