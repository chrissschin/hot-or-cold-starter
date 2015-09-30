
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
		//NEW game button refreshes window
		$(".new").click(function(){
			location.reload();
		});

		//generate a random number
		var randNum = Math.floor(Math.random() * 100) + 1;
		console.log(randNum);

		//check to see if number is too low or too high or correct
		$("#guessButton").click(function() {
			//set userGuess into guessedNum
			var guessedNum = $("#userGuess");
			//check to see if rand num == input
			if ( guessedNum.val() == randNum) {
				//shoots congrats to html
				$("#guessList").html("<p>Congrats you got it right!</p>")
			}
			else if (guessedNum.val() < randNum) {
				$("#feedback").html("<p>too low</p>");
			}
			else if (guessedNum.val() > randNum) {
				$("#feedback").html("<p>too high</p>");
			}
			else {
				guessedNum.val('').focus();

			}
		});
});
