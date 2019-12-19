wordObj = document.getElementById('word');
words = ["design", "frontend", "backend", "testing"];
var i = 0;
var j=0;
var word = "";
while(i < words.length)
{
  wordObj.innerHTML = "";
  j = 0;
  word = words[i];
  printEach();
  i = i+1;
}

function sleepFor(){
  now = new Date().getTime() + 100;
  while(new Date().getTime() < now){
    console.log('waiting');
  }
}

function printEach(){
  while(j < word.length){
    // debugger
    document.getElementById('word').innerHTML += word[j];
    console.log(wordObj.value);
    j++;
    // sleepFor();
    setTimeout(printEach, 1000);
  }
}