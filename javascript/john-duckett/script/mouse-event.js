var sx = document.getElementById('sx');
var sx = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPosition(event){
  debugger
  sx.innerHTML = event.screenX;
  sy.innerHTML = event.screenY;
  px.innerHTML = event.pageX;
  py.innerHTML = event.pageY;
  cx.innerHTML = event.clientX;
  cy.innerHTML = event.clientY;
}
window.addEventListener("mouseover", showPosition);
