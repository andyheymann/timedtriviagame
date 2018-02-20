
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
	var correctAnswers = ["Greenville, SC", "NCSU", "Hemingway Cat"];
	var correctTally = 0;
	var incorrectTally = 0;
	var unansweredTally = 0;
	var gameQuestions;  


	//click events
	


	//generates main body QAs

	function generateGame() {
		$("#mainBody").append("<button>" + "Start Game" + "</button>");
		var qas, i, j, x = "";
		qas = {
		    "questionsAnswers": [
		        { "question":"Where was Andy born and raised?", "answers":[ "<button>" + "Austin, TX" + "</button>", "<button>" + "Greenville, SC" + "</button>", "<button>" + "Anckorage, AK" + "</button>" ] },
		        { "question":"What college did Andy go to?", "answers":[ "<button>" + "UNC" + "</button>", "<button>" + "DUKE" + "</button>", "<button>" + "NCSU" + "</button>" ] },
		        { "question":"What kind of pet does Andy have?", "answers":[ "<button class='answerbutton'>" + "Platypus" + "</button>", "<button>" + "Finger Monkey" + "</button>", "<button>" + "Hemingway Cat" + "</button>" ] }
		    ]
		}

		for (i in qas.questionsAnswers) {
		    x += "<h2>" + qas.questionsAnswers[i].question + "</h2>";
		    for (j in qas.questionsAnswers[i].answers) {
		        x += qas.questionsAnswers[i].answers[j] + "<br>";
		    }
		}
		$("#mainBody").html(x) + "<br>";
		$("#mainBody").append("<button>" + "Done!" + "</button>");
		$("button").css ({"padding" : "20px", "margin-top" : "40px", "background-color" : "black", "border" : "none"});
		//$("button").css ({"padding" : "20px", "margin-top" : "40px", "background-color" : "#40a0a9", "border" : "none"});


	};





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