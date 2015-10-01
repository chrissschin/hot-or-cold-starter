
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		//NEW game button refreshes window (for now)
		$(".new").click(function(){
      //sets default text
      $("#feedback").text("Make your Guess! 1-100")
      //clears the list of numbers used
			$("#guessList").empty();
      //redoes the random num on click
      randNum = Math.floor(Math.random() * 100) + 1;
  		console.log(randNum);
      //clears count and sets it back to 0
      $("#count").empty().html("0");


		});

		// initialize count
		var count = 0;
		//generate a random number
		var randNum = Math.floor(Math.random() * 100) + 1;
		console.log(randNum);

		$('#guessForm').on('submit', function(e) {
			// Prevent the default behavior of a form
			e.preventDefault();
			//set userGuess into guessedNum
			var guessedNum = $("#userGuess").val();
			// Get absolute value of the difference
			var difference = Math.abs(guessedNum - randNum);
			//check to see if rand num == input
			if ( guessedNum == randNum) {
				//shoots congrats to html
				$("#guessList").html("<p>Congrats you got it right!</p>")
			}
			else if (difference <= 5) {
				$("#feedback").html("<p>YOU'RE ON FIRE!</p>");
			}
			else if (difference <= 20) {
				$("#feedback").html("<p>GETTING WARM</p>");
			}
			else if (difference <= 50){
				$("#feedback").html("<p>YOU'RE COLD</p>");
			}
			else if (difference > 51){
				$("#feedback").html("<p>FROZEN</p>");
			}
			else {
				guessedNum.focus();
			}
			// increment the count
			count++
			$("#count").text(count);
      $("#guessList").append(guessedNum + ",   ");



		});
});
