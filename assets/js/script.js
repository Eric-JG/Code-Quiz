// Array of Question
const quizData = [
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cascading Simple Sheets",
        c: "Central Style Sheets",
        d: "Cars SUVs Sailboats",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markdown Language",
        b: "Hyperloop Machine Language",
        c: "Hypertext Markup Language",
        d: "Helicopter Terminals Motorcicle",
        correct: "c",
    },
    {
        question: "In what year JavaScript launched",
        a: "1999",
        b: "2000",
        c: "1994",
        d: "1995",
        correct: "d",
    },
    {
        question: "Who created Bootstrap",
        a: "Twitter",
        b: "Amazon",
        c: "Facebook",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "When HTML was invented",
        a: "1990",
        b: "1993",
        c: "2000",
        d: "2021",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

var timer = 0
var currentQuiz = 0
var score = 0

var localStorageData = JSON.parse(localStorage.getItem("scores")) || []

loadQuiz()

var interval = setInterval(function(){
    document.getElementById('count').innerHTML=count;
    count--;
    if (count === 0){
      clearInterval(interval);
      document.getElementById('count').innerHTML='Done';
      // or...
      alert("You're out of time!");
    }
  }, 1000);

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    // Question elements
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


// Deselect the answer for next question
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    var answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    // Check if answer is equal to quiz data 
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        // Load the next question
        if (currentQuiz < quizData.length) {
            loadQuiz()

            // Last question
        } else {
            // Create button at the end
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly <h2>
            <input id="playerName" type="text"/>
            <button onclick="saveScore()">Submit</button>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

function saveScore(event) {
    var inputPlayer = quiz.querySelector("#playerName")

    var newScoreObject = {
        name: inputPlayer.value,
        score: score
    }

    localStorageData.push(newScoreObject)

    localStorage.setItem("scores", JSON.stringify(localStorageData))
}