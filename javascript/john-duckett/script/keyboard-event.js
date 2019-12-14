keyPress = document.getElementById("keypress");
keyDown = document.getElementById("keydown");
keyUp = document.getElementById("keyup");

function appendKeyPress(event){
  keyPress.innerHTML += String.fromCharCode(event.keyCode);
}
function appendKeyDown(event){
  debugger
  keyDown.innerHTML += String.fromCharCode(event.keyCode);
}
function appendKeyUp(event){
  debugger
  keyUp.innerHTML += String.fromCharCode(event.keyCode);
}
document.addEventListener('keypress', appendKeyPress, false);
document.addEventListener('keydown', appendKeyDown, false);
document.addEventListener('keyup', appendKeyUp, false);



