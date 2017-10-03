// target your button and assign an ask function that outputs a random image to your page
submit.addEventListener("click", function(evt){
		evt.preventDefault();

    .done(function(data){ // grabbing the p tags to display the data on to the DOM
				var p = document.getElementById("question");

        p.textContent = data.Will_I_have_a_good_day

        var imgArr = ["img/magic.p8ball_1.png", "img/magic8ball_12.png", "img/magic8ball_3.png"];
// using math.random to run the 3 images each time
				var image = document.getElementById("8ball");
				function genRan(){
					return Math.floor(Math.random() * 3);
				};;

        magic8ball.src = imgArr[genRan()];
        magic8ball.alt = "magic 8 ball";
        console.log(magic8ball);

.fail(function() {

     console.log("error");

   });
  });
});
