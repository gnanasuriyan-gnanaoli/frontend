
console.log('inject-script reached');

document.getElementById('body');

var actions = document.createElement('div');
actions.className = 'htg-actions'
actions.id = 'htg-actions'
document.body.appendChild(actions);
var id = chrome.runtime.id;
actions.innerHTML = `
  <div class='action' id='done'><img src='chrome-extension://${id}/assets/complete.svg' alt=""></div>
  <div class='action' id='resume'>Resume</div>
  <div class='action' id='pause'>Pause</div>
  <div class='action' id='discard'>Discard</div>
  <div class='action' id='record'>Record video</div>
`

function serialiseEvent(event){
  var target = event.target
  if(target.labels && target.labels.length)
    var label = target.labels[0].innerText;
  return {event: {type: event.type, target: { value: target.value, type: target.type, label: label, id: target.id, class: target.class }}}
}

function appendScreenshot(screenshot){
  var image = document.createElement('img');
  image.className = 'htg-screenshot'
  image.src = screenshot;
  document.body.appendChild(image);
}


document.querySelector('.action').addEventListener('click', (event)=> {
  // if(event.targe.id === 'record'){
    return screenShareDownload();
  // }
  chrome.runtime.sendMessage(serialiseEvent(event), (response) => {
    // 3. Got an asynchronous response with the data from the service worker
    console.log('received user data', response);
  });
})
// document.addEventListener('click', (event) => {
//   if(event.target.id === 'htg-actions') return;
//   // send message to extension
//   chrome.runtime.sendMessage(serialiseEvent(event), (response) => {
//     // 3. Got an asynchronous response with the data from the service worker
//     appendScreenshot(response.captured[response.captured.length - 1].screenshot);
//     console.log('received user data', response);
//   });
// })
// 
// window.addEventListener('focusout', function (event) {
//       chrome.runtime.sendMessage(serialiseEvent(event), (response) => {
//       // 3. Got an asynchronous response with the data from the service worker
//       console.log('received user data', response);
//       appendScreenshot(response.captured[response.captured.length - 1].screenshot);
//     });
// }, true);

chrome.runtime.onMessage.addListener(
  // receive message from extension
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log(request);
    if(request.type === 'screenshot'){
      appendScreenshot(request.captured);
    }
    sendResponse({farewell: "goodbye"});
  }
);
// chrome-extension://hhnigonbiimcifcbammppemblmnogmfd/assets/complete.svg
