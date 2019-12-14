function greet(whattosay){
  return function(name){
    console.log(whattosay+" "+name);
  };
};

sayHello = greet("Hello");
sayHello("Surya");


greet("Hi")("Surya");
