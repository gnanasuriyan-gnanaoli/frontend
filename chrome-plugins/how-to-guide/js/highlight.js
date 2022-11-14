// https://stackoverflow.com/questions/51925804/javascript-highlight-an-element-on-hover
// http://jsbin.com/filelavegu/1/edit?html,css,js,output
// https://jsbin.com/jimezomima/1/edit?html,css,js,output
window.addEventListener('mouseover', function (e) {
    updateMask(e.target);
}, true);

window.addEventListener('focus', function (e) {
    updateMask(e.target);
}, true);


function updateMask(target) {
    let elements = document.getElementsByClassName("highlight-wrap");
    let hObj;
    if (elements.length !== 0) {
        hObj = elements[0]
    } else {
        hObj = document.createElement("div");
        hObj.className = 'highlight-wrap';
        document.body.appendChild(hObj);
    }
    if(target.getBoundingClientRect){
      let rect = target.getBoundingClientRect();
      hObj.style.top = (rect.top - 8 + window.scrollY) + "px";
      hObj.style.left = (rect.left - 8  + window.scrollX) + "px";
      hObj.style.height = (rect.height + 16) + "px";
      hObj.style.width = (rect.width+16)+ "px";
    }
    
}