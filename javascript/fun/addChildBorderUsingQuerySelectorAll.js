elements = document.querySelectorAll("body *")
for(item in elements){
  addBorder(elements[item]);
}
function addBorder(element){
  if(element.style != undefined){
    element.style.border= "1px solid rgb(238, 62, 128)";
    element.style.borderRadius= "50%";
    element.style.overflow= "visible";
  }
}