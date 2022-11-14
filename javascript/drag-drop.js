function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id)
}
function allowDrop(ev) {
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var parent1 = document.getElementById(data).parentElement;
  parent1Html = parent1.getInnerHTML();
  samplediv = document.createElement('div');
  samplediv.appendChild(document.getElementById(data));
  ev.target.appendChild(samplediv);
  parent1.innerHTML = parent1Html;
}