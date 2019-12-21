(function() {
  'use strict';
  var body = document.body;
  darkModeAnditerateChildNodes(body);
  function darkModeAnditerateChildNodes(element){
    darkMode(element);
    iterate(element);
  }
  function iterate(element){
    for(let item in element.children){
      let childItem = element.children[item];
      darkMode(childItem);
      if(childItem.children != undefined && childItem.children.length > 0){
        darkModeAnditerateChildNodes(childItem);
      }
    }
  }
  function darkMode(element){
    if(element.style != undefined){
      element.style.setProperty("background", "black", 'important');
      element.style.setProperty("color", "white", 'important')
    }
  }
}());

