$(document).ready(function() {

//create timer
	function startTimer() {
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

//create start screen
	function initialScreen() {
		//add a start button to the html
		$("#mainBody").append("<button>" + "Start Game" + "</button>");
		//add css to the start button
		$("button").css ({"width" : "200px", "height" : "50px", "margin-top" : "40px" ,"border-radius" : "10px", "border" : "none"});
	}
	initialScreen();

	//when clicked "game" is initiated
	$("#mainBody").on("click", function(event){
		q1();
		startTimer();
	});


	//create game
	//create q1
	function q1(){
	$("#mainBody").empty();

	//create questions - QUESTION 1 -
	var q1 = $("<p></p>").html("<h2>" + "Andy has NOT visited which one of these countries?" + "</h2>");
	//create answers - ANSWERS 1 -
	var q1a1 = $("<button></button>").text("Costa Rica");
	var q1a2 = $("<button></button>").text("Russia");
	var q1a3 = $("<button></button>").text("Tanzania");
	//load the questions and answers to the page
	$("#mainBody").append(q1, q1a1, q1a2, q1a3); 
	$("button").css ({"width" : "200px", "height" : "50px", "margin-top" : "20px", "margin-right" : "10px","background-color" : "white", "margin-left" : "10px", "border-radius" : "10px", "border" : "none"});
	$("h2").css ({"color" : "white", "font-size" : "22px", "padding-top" : "20px"});	
	//make answers clickable
	$("button").on("click", function(){
		
	    $(this).css({"background-color" : "blue"});
	    //make an eventlistener to keep track of button clicks
	    q1selectedAnswer = $(this).text();
	    if (q1selectedAnswer === "Russia") {
	    	correctAnswers ++
		    console.log("correct" + correctAnswers);
		} else {
			console.log("incorrect" + incorrectAnswers);
			incorrectAnswers ++
		}
		//go to q2
		
		
	});

	var q2 = $("<p></p>").html("<h2>" + "Andy has NOT names his cat which of these names?" + "</h2>");
	//create answers - ANSWERS 1 -
	var q2a1 = $("<button></button>").text("Killer");
	var q2a2 = $("<button></button>").text("Apey");
	var q2a3 = $("<button></button>").text("Pants");
	//load the questions and answers to the page
	$("#mainBody").append(q2, q2a1, q2a2, q2a3); 
	$("button").css ({"width" : "200px", "height" : "50px", "margin-top" : "20px", "margin-right" : "10px", "margin-left" : "10px", "border-radius" : "10px", "border" : "none"});
	$("h2").css ({"color" : "white", "font-size" : "22px", "padding-top" : "20px"});
	//make answers clickable
	$("button").on("click", function(){
	    $(this).css({"background" : "pink"});
	    //make an eventlistener to keep track of button clicks
	    q2selectedAnswer = $(this).text();
	    if (q2selectedAnswer === "Pants") {
	    	correctAnswers ++
		    console.log("correct" + correctAnswers);
		} else {
			console.log("incorrect" + incorrectAnswers);
			incorrectAnswers ++
		}
	});

	//end Q1	
	};



	//create a done button


//make game end

	//if the times gets to zero end game
	//if you click the done button end game
	//go to finish screen

//make finish screen

	//create questions right
	//create questions wrong
	//create questions not guessed
	//create reset button that goes back to start screen


//variables
var intervalId;
var number = 30;
var q1selectedAnswer;
var q2selectedAnswer;
var correctAnswers = 0;
var incorrectAnswers = 1;

//end of document ready
});