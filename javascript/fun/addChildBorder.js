var body = document.getElementsByTagName("body")[0];
iterateChildNodes(body);
function iterateChildNodes(element){
  addBorder(element);
  for(item in element.children){
    childItem = element.children[item];
    addBorder(childItem);
    if(childItem.children.length > 0){
      iterateChildNodes(childItem);
    }
  }
}
function addBorder(element){
  debugger
  element.style.border= "1px solid rgb(238, 62, 128)";
  element.style.borderRadius= "100%";
}