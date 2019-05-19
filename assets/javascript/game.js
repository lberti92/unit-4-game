// //Global Variables:  wins, losses, target score, your score


//array of crystal objects (to loop through)

//dynamically create crystals on the page
//each crystal needs a score, an image (aka a sting holding the path to the image - which is saved in a folder in
//your project), an object with all of this info (aka collection of key value pairs)

//Random Number Function:  e.g. function generateRandom()
//something with Math......
//return a random number

//click event function
//each crystal should have the same class so that you don't need 4 separate click events.
//var score = yourScore + crystalValue;

//start/reset game
//clear variable (especially your score)
//set target score
//assign a value for each crystal
//if yourScore is great than target score, then....
//if yourScore is less than, then...


var wins = 0;
var losses = 0;
var targetScore = randomNumber(19, 120);
var yourScore = 0;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
$("#number-to-guess").text(targetScore);

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [2,5,6,9];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "assets/images/Crystal_Lotus.jpg");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
 }

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  yourScore += crystalValue;
  $("#your-score").text(yourScore);
  // All of the same game win-lose logic applies. So the rest remains unchanged.
 

  if (yourScore === targetScore) {
    wins++;
    $("#wins").text(wins);
    resetVariables();
  }
  else if (yourScore > targetScore) {
    losses++;
    $("#losses").text(losses);
    resetVariables();
  }

 function resetVariables () {
  yourScore = 0;
 }
});


// var c1 = RandomNumber(1, 12);
// var c2 = RandomNumber(1, 12);
// var c3 = RandomNumber(1, 12);
// var c4 = RandomNumber(1, 12);

// console.log('_______________');
// console.log(c1);
// console.log('_______________');
// console.log(c2)
// console.log('_______________');
// console.log(c3);
// console.log('_______________');
// console.log(c4);

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
// function generateRandomNumb(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// We begin by expanding our array to include four options.
// var numberOptions = [2, 5, 6, 9];

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// var numbersOptions = {};

// while (Object.keys(numbersOptions).length < 3) {
//   var num = Math.floor(Math.random() * 20) + 1;

//   if (numberOptions[num] != "undefined") {
//     numbersOptions[num] = num;
//   }
// }

// console.log(Object.keys(numbers));

// for(var i = 0; i < 3; i++) {
//   var numberIsInArray = false;
//   var rand = randomNumber(1, 21);
//   for(var j = 0; j < numberOptions.length; j++){
//       if(rand === numberOptions[j]) {
//           numberIsInArray = true;
//           i--;
//       }
//       console.log(numberOptions)
//   }
//   if(!numberIsInArray){
//      $("#crystals").push(rand);
//   }
// var counter = 0;
// var numberOptions = randomNumber(1, 21);

// for (var i = 0; i < 4; i++) {
//   var count = 0;
 
//   for (var j = 0; j < numberOptions.length; j++) {
//       count++;
//   }
//   console.log(count);
// }