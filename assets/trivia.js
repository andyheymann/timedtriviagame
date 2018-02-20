var pos = 0;
var test;
var testStatus;
var question;
var choice;
var choices;
var choiceA;
var choiceB;
var choiceC;
var correct = 0;
var incorrect = 0;
var intervalId;
var number = 15;


//create start screen
	function initialScreen() {
		//add a start button to the html
		$("#test").append("<button>" + "Start Game" + "</button>");
		//add css to the start button
		$("button").css ({"width" : "200px", "height" : "50px", "margin-top" : "40px" ,"border-radius" : "10px", "border" : "none"});
	}
	initialScreen();

	//when clicked "game" is initiated
	$("button").on("click", function(event){
		renderQuestion();
		startTimer();
	});


//create and start timer
	function startTimer() {
	      clearInterval(intervalId);
	      intervalId = setInterval(decrement, 1000);
	    }

	function decrement() {
	number--;
	    $(".timer").text(number);
	    if (number === 0) {
	    stop();
	    checkAnswer();
	   
	    }
	}

	function stop() {
	      clearInterval(intervalId);
	}


//questions
var questions = [
	["What country has Andy NOT visited?", "Russia", "Tanzania", "Costa Rica", "A"],
	["What has NOT been one of Andy's cat's names?", "Apey", "Killer", "Moew-a-saurus-rex", "C"],
	["What kind of job has Andy NOT had", "Aquarium design", "Billboard design", "Sock package design", "B"],
	["What sport did Andy NOT play in high school?", "Soccer", "Wrestling", "Tennis", "A"],
	["What was NOT the name of a school Andy went to?", "Wade Hampton", "Sunrise Valley", "Montessori", "B"]

]

function run(x) {
	return document.getElementById(x);
}
//make questions show up
function renderQuestion() {
	test = run("test");
	startTimer();
	//finish screen
	if (pos >= questions.length) {
		test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions right</h2>";
		run("test_status").innerHTML = "How'd you do?";
		pos = 0;
		correct = 0;
		number = 15;
		$(".timer").text("Done!");
		stop();
		test.innerHTML += "<button onclick = 'renderQuestion()'> Play again </button>";
		return false;

	}

	run("test_status").innerHTML = "Question " + (pos+1) + " of " + questions.length;
	question = questions[pos][0];
	choiceA = questions[pos][1];
	choiceB = questions[pos][2];
	choiceC = questions[pos][3];
	test.innerHTML = "<h2>" + question + "</h2>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> " + choiceA + "<br>" + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> " + choiceB + "<br>" + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> " + choiceC + "<br>" + "<br>";
	test.innerHTML += "<button onclick = 'checkAnswer()'>Submit Answer</button>";
}

//check answers
function checkAnswer(){
	choices = document.getElementsByName ("choices");
	number = 15;
	for (var i=0; i<choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[pos][4]) {
		correct++

	} else {
		incorrect ++

	}
	pos++;
	number = 15;
	renderQuestion();

}
//window.addEventListener ("load", renderQuestion, false);









