//declaring start button variable 
var startButton = document.getElementById("start-button")
var questionElement = document.getElementById("displayquestions")
var questionElement = document.getElementById('question')


//checking to see when the user clicks the start button and calling start game function
startButton.addEventListener('click', startGame)

function startGame() {

    //console.log('Started')
    //hiding startbutton after its clicked
    startButton.classList.add('hide');



}

function setNextQuestion() {


}


function selectAnswer() {



}

var questions = [

{

    question: 'What is 2+ 2',
    answers: [
        {text: '4', correct: true},
        {text: '22', correct: false}
    ]
}

]