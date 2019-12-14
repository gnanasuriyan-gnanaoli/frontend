function makeFunction(language){
  return function(name){
    if(language === "en"){
      console.log("Hello "+name);
    }
    else{
      console.log("Hola "+name);
    }
  }
}

greetEnglish = makeFunction("en");
greetSpanish = makeFunction("es");

greetEnglish("Surya");
greetSpanish("Surya");
