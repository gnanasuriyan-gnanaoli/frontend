
var locations = ["1","2","3","4","5","6"].sort(function() {
                  return .5 - Math.random();
                }).slice(0,3);
document.write(locations)
var currentGuess;
var shipSank = false;
var guesses = 1;
var hits = 0;

while(!shipSank && guesses <= 4){
  guesses = guesses + 1;
  currentGuess = prompt("Ready aim fire!!!! (Guess a number 0-6):");
  document.write(currentGuess);
  if (locations.includes(currentGuess)) {
    alert("HIT!!!")
    hits = hits + 1;
  }
  else {
    alert("MISS!!!")
  }
  if (hits == 3) {
    shipSank = true;
  }
}
if(shipSank){
  alert('Congratulations You Won');
}
else{
  alert('You Lost');
}