var wins = 0;
var losses = 0;
var targetScore;
var yourScore = 0;


function randomNumber(min, max) {
  targetScore = Math.floor(Math.random() * (max - min) + min);
  $("#number-to-guess").text(targetScore);
  return targetScore;
}
randomNumber(19, 120);

var numberOptions = [];
for (var i = 0; i < 4; i++) {
  numberOptions.push(Math.round(Math.random() * 12))
}
console.log("numberOptions" + numberOptions)

for (var i = 0; i < numberOptions.length; i++) {
  var fourCrystals = ["assets/images/Heart.jpg", "assets/images/Lotus.jpg", "assets/images/snowflake.jpg", "assets/images/rose.jfif"];
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  imageCrystal.attr("src", fourCrystals[i]);
  $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  yourScore += crystalValue;

  if (yourScore === targetScore) {
    wins++;
    resetVariables();
  }
  else if (yourScore > targetScore) {
    losses++;
    resetVariables();
  }

  $("#your-score").text(yourScore);
  $("#wins").text(wins);
  $("#losses").text(losses);

  function resetVariables() {
    yourScore = 0;
    randomNumber(19, 120);
    numberOptions = [];
    console.log("reset numberOptions" + numberOptions)
  }
});
