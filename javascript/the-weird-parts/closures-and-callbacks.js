function sayHiLater(){
  var hi = "Hi!!!";
  setTimeout(function(){
    console.log(hi)
  }, 3000);
}

sayHiLater();



function runWhenDone(callback){
  console.log("I am running");
  console.log("I am done");
  console.log("Okay relax i will execute you");
  callback();
}



runWhenDone(function(){
  console.log("Passed Function Running");
});



