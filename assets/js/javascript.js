//declaring start button variable 
var startButton = document.getElementById("start-button")
//declaring variable to show welcome page
var welcomepageElement = document.getElementById("welcomepage")

//declaring variables to display questions and footers 
var question1 = document.getElementById("question1")
var question2 = document.getElementById("question2")
var question3 = document.getElementById("question3")
var footerclass = document.getElementById("footerclass")
var footerclass2 = document.getElementById("footerclass2")

//declaring variables for all my question one answer buttons 
var answerOneButton = document.getElementById("answerOneButton")
var answerTwoButton = document.getElementById("answerTwoButton")
var answerThreeButton = document.getElementById("answerThreeButton")
var answerFourButton = document.getElementById("answerFourButton")

//declaring variables for all my question 2 answer buttons 
var answerOneButtonQ2 = document.getElementById("answerOneButtonQ2")
var answerTwoButtonQ2 = document.getElementById("answerTwoButtonQ2")
var answerThreeButtonQ2 = document.getElementById("answerThreeButtonQ2")
var answerFourButtonQ2 = document.getElementById("answerFourButtonQ2")

//declaring variables for all my question 3 answer buttons 
var answerOneButtonQ3 = document.getElementById("answerOneButtonQ3")
var answerTwoButtonQ3 = document.getElementById("answerTwoButtonQ3")
var answerThreeButtonQ3 = document.getElementById("answerThreeButtonQ3")
var answerFourButtonQ3 = document.getElementById("answerFourButtonQ3")

//done page variables 
var donepageElement = document.getElementById("donepage")



//declaring timer variables 

var timerEl = document.getElementById('countdown');
var timeLeft = 600000;


function countdown() {
    var timeLeft = 600000;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' milliseconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' millisecond remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }

//checking to see when the user clicks the start button 
startButton.addEventListener('click', function() {

    countdown();
    welcomepageElement.style.display = "none";
    question1.style.display = "block";
    question2.style.display = "none";
    question3.style.display = "none";
    footerclass.style.display = "none"; 
    footerclass2.style.display = "none";


})
//Wrong Answer on Question One  Button Two
answerTwoButton.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "block";
    question3.style.display = "none";
    footerclass.style.display = "block"; 
    timeLeft = timeLeft - 5; 

})

//Wrong answer on Question One Button Three
answerThreeButton.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "block";
    question3.style.display = "none";
    footerclass.style.display = "block"; 
    footerclass2.style.display = "none"


})

//Wrong answer on Question One Button Four 
answerFourButton.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "block";
    question3.style.display = "none";
    footerclass.style.display = "block"; 
    footerclass2.style.display = "none"


})



//Wrong answer on Question Two Button Two 
answerTwoButtonQ2.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "block";
    footerclass.style.display = "block"; 
    footerclass2.style.display = "none"


})



//Wrong answer on Question Two Button Three 
answerThreeButtonQ2.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "block";
    footerclass.style.display = "block"; 
    footerclass2.style.display = "none"


})

//Wrong answer on Question Two Button Four 
answerFourButtonQ2.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "block";
    footerclass.style.display = "block"; 
    footerclass2.style.display = "none"


})

//Wrong answer on Question Three Button Four 
answerFourButtonQ3.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "block";
    question3.style.display = "none";
    footerclass.style.display = "block"; 
    footerclass2.style.display = "none"


})

//All of Question three button functionality 
answerFourButtonQ3.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    footerclass.style.display = "display"; 
    footerclass2.style.display = "none"


})

answerThreeButtonQ3.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    footerclass.style.display = "display"; 
    footerclass2.style.display = "none"


})

answerTwoButtonQ3.addEventListener('click', function() {

    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    footerclass.style.display = "display"; 
    footerclass2.style.display = "none"


})



//listening for the correct answer on question one 
  answerOneButton.addEventListener('click', function() {

    footerclass.style.display = "none"; 
    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "block";
    question3.style.display = "none";
    footerclass2.style.display = "block";

})

//listening for the correct answer on question two 
answerOneButtonQ2.addEventListener('click', function() {

    footerclass.style.display = "none"; 
    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "block";

})


//listening for the correct answer on question three 
answerOneButtonQ3.addEventListener('click', function() {

    footerclass.style.display = "none"; 
    welcomepageElement.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    donepageElement.style.display = "block"; 


})






