
$(document).ready(function() {
// Create a function that creates the start button and initial screen

	function initialScreen() {
		$("#mainBody").append("<button>" + "Start Game" + "</button>");
		$("button").css ({"width" : "200px", "height" : "50px", "margin-top" : "40px", "background-color" : "black", "border" : "none"});
	}
	initialScreen();

	$("#mainBody").on("click", function(event){
		generateGame();
		runClock();
	});



	var number = 30;
	var intervalId;
	var questions = ["Where was Andy born and raised?", "What college did Andy go to?", "What kind of pet does Andy have?"];
	var answers = [["Austin, TX", "Greenville, SC", "Anckorage, AK"],["UNC", "DUKE", "NCSU"],["Platypus", "Finger Monkey", "Hemingway Cat"]];
	var correctAnswers = ["B. Greenville, SC", "C. NCSU", "C. Hemingway Cat"];
	var correctTally = 0;
	var incorrectTally = 0;
	var unansweredTally = 0;
	var gameQuestions;  


	function generateGame() {
			
			for (var i = 0; i < questions.length; i++) {
				gameQuestions = "<p>" + questions[i] + "</p>" + "<li>" + answers[0] + answers[1] + answers[2] + "</li>"
				$("#mainBody").html(gameQuestions);
			};

	}

	// clock stuff
	function runClock() {
	      clearInterval(intervalId);
	      intervalId = setInterval(decrement, 1000);
	    }

	function decrement() {
	number--;
	    $(".timer").text(number);
	    if (number === 0) {
	    stop();

	    alert("Time Up!");
	    }
	}

	function stop() {
	      clearInterval(intervalId);
	}

});