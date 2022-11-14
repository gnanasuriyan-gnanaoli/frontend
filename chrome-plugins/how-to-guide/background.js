import { captureVideo, myCapture } from './background/capture-video.js'
import { injectScripts, insertCss } from './background/inject.js'

var output = []

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function screenCapture(){
  const promise = await chrome.tabs.captureVisibleTab();
  console.log(promise);
  return promise;
}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    injectScripts(tab);
    insertCss(tab);
  }
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  var event =  message.event;
  // if(event.target.id === 'record'){
  //   getCurrentTab().then(tab => {
  //     myCapture(tab);
  //   })
  // }
  
  // Popup
  if(event.target.id === 'htg-actions'){
    chrome.storage.local.set({output: output}, function() {
      // Storage is updated, it's showtime!
      chrome.tabs.create(
        { url: 'preview.html' },
        callbackFromNewTab
      );
      // And now, we die, inevitably. Goodbye, cruel world.
    });
  }
  if(event.type === 'focusout'){
    if(['text', 'textarea', 'select', 'radio'].includes(event.target.type)){
      recordEvent(event);
    }
  }
  if (event.type === 'click' && !(['text', 'textarea', 'select', 'radio'].includes(event.target.type))) {
    recordEvent(event);
  }

  // chrome.tabs.captureVisibleTab().then((message) =>{
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, {type: 'screenshot', captured: message}, function(response) {
  //       console.log(response);
  //     });
  //   });
  // });
  console.log(output);
  sendResponse({"captured": output});
});

function recordEvent(event){
  screenCapture().then(screenshot => {
    output.push({
      action: 'input',
      type: event.target.type,
      value: event.target.value,
      label: event.target.label,
      screenshot: screenshot
    });
  })
}


function logOutput(output){
  console.log(output);
}


function callbackFromNewTab(tab){
  // https://stackoverflow.com/questions/54708537/pass-data-or-modify-extension-html-in-a-new-tab-window/54715122#54715122
  // https://stackoverflow.com/questions/40173752/send-message-to-background-page-update-the-html-and-then-show-it-in-a-tab/40174149#40174149
  
}
