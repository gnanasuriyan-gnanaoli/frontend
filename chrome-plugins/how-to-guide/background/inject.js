

function injectScripts(tab){
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['js/inject-script.js', 'js/highlight.js', 'js/handlebars.min-v4.7.7.js', 'js/screen-share-download.js']
  });
}

function insertCss(tab){
  chrome.scripting.insertCSS({
    target: {tabId: tab.id},
    files: ['css/inject-css.css'],
  });
}

export{
  injectScripts,
  insertCss
}