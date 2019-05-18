// //Global Variables:  wins, losses, target score, your score
// var wins = 0;
// var losses = 0;
// var yourScore = 0;
// var targetScore = 0;


// // var randonNum = generateRandom();

// function RandomNumber (min, max) {
// return Math.floor(Math.random() * (max - min) + min);
//  }

// var targetScore = RandomNumber(19, 120);
// var c1 = RandomNumber(1, 12);
// var c2 = RandomNumber(1, 12);
// var c3 = RandomNumber(1, 12);
// var c4 = RandomNumber(1, 12);

// console.log(targetScore);
// console.log('_______________');
// console.log(c1);
// console.log('_______________');
// console.log(c2)
// console.log('_______________');
// console.log(c3);
// console.log('_______________');
// console.log(c4);




//arrary of crystal objects (to loop through)

//dynamically create crystals on the page
    //each crystal needs a score, an image (aka a sting holding the path to the image - which is saved in a folder in
    //your project), an object with all of this info (aka collection of key value pairs)

//Random Number Function:  e.g. function generateRandom()
    //something with Math......
    //return a random number

//click event function
    //each crystal should have the same class so that you don't need 4 separate click events.
    //var score = yourScore + crystalValue;

//state/reset game
    //clear variable (especially your score)
    //set target score
    //assign a value for each crystal
    //if yourScore is great than target score, then....
    //if yourScore is less than, then...


    var targetNumber = 53;

    $("#number-to-guess").text(targetNumber);
  
    var counter = 0;
  
    // Now for the hard part. Creating multiple crystals each with their own unique number value.
  
    // We begin by expanding our array to include four options.
    var numberOptions = [10, 5, 3, 7];
  
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {
  
      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");
  
      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");
  
      // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
  
      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  
      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystals").append(imageCrystal);
    }
  
    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function() {
  
      // Determining the crystal's value requires us to extract the value from the data attribute.
      // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
      // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
      // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      // We then add the crystalValue to the user's "counter" which is a global variable.
      // Every click, from every crystal adds to the global counter.
      counter += crystalValue;
  
      // All of the same game win-lose logic applies. So the rest remains unchanged.
      alert("New score: " + counter);
  
      if (counter === targetNumber) {
        alert("You win!");
      }
  
      else if (counter >= targetNumber) {
        alert("You lose!!");
      }
  
    });