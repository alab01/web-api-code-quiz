var questions = [

    {
        question: "An array in Java Script is defined as which of the following?", 
        choices: ["A An ordered list of strings","B An ordered list of values","C A list of loops","D None of the above"],
        answer: "B An ordered list of values"
    },
    {
        question: "In JS Which of the following is used to make an object into a JSON string?", 
        choices: ["A int()","B splice()","C stringify()","D All of the above"],
        answer: "C stringify()"
    },
    {
        question: "html tags are enclosed in?", 
        choices: ["A &div&","B :div:","C {div}","D <div>"],
        answer: "D <div>"
    },
    {
        question: "Which of the following are not Java Script primitive values?", 
        choices: ["A boolean Type","B Objects","C Number Types" ,"D Strings"],
        answer: "B Objects"
    }
]

var currentQuestion = 0;
var totalQuestions = questions.length;
var correct = 0;
var totalTime = 60;
var timerInterval = null;
var score = 0;
var initials = "";

function choiceClicked(event) {
    var data = questions[currentQuestion];
    if (event.target.innerText === data.answer) {
        document.getElementById("feedback-container").innerText = "You got it right!";
        document.getElementById("feedback-container").style.color="green";
        correct++;
    } else {
        totalTime = totalTime - 20;
        document.getElementById("feedback-container").innerText = "You got it wrong";
        document.getElementById("feedback-container").style.color="red";
    }

    if (currentQuestion === totalQuestions - 1) {
        document.getElementById("game-over").innerText = "Game Is Over";
        clearInterval(timerInterval);
        document.getElementById("end-of-game").style.display="flex";
        score = (correct / totalQuestions) * 100;
        document.getElementById("final-score").innerText = score + "%";
    } else {
       currentQuestion++;
    }
}
function nextQuestionClicked() {
    populateQuestion(currentQuestion);
    document.getElementById("feedback-container").innerText= "";
}

function populateQuestion(questionId) {
    var data = questions[questionId];
    var questionTag = document.getElementById("question");
    questionTag.innerHTML = data.question;

    var answerOptionsTag = document.getElementById("answer-options");
    
    var choiceButtons = answerOptionsTag.children;
    for (var i = 0; i < choiceButtons.length; i++) {
        var btn = choiceButtons[i];
        btn.innerText = data.choices[i];
    }
}

function startButtonClicked(event) {
    document.getElementById("question-container").style.display="block";
    event.target.disabled = true;
    populateQuestion(currentQuestion);
}