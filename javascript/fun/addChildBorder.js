var body = document.getElementsByTagName("body")[0];
addBorderAnditerateChildNodes(body);
function addBorderAnditerateChildNodes(element){
  addBorder(element);
  iterate(element);
}
function iterate(element){
  for(item in element.children){
    childItem = element.children[item];
    addBorder(childItem);
    if(childItem.children != undefined && childItem.children.length > 0){
      addBorderAnditerateChildNodes(childItem);
    }
  }
}
function addBorder(element){
  if(element.style != undefined){
    element.style.border= "1px solid rgb(238, 62, 128)";
    element.style.borderRadius= "50%";
    element.style.overflow= "visible";
  }
}

