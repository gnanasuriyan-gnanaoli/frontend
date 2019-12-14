//function currying
function multiply(a,b){
  return a*b;
}

multiplyByTwo = multiply.bind(this, 2); // bind will create a copy of the method with the parameters and this variable


console.log(multiplyByTwo(3));

console.log(multiply.call(this, 2, 3)); // Call will invoke the method
console.log(multiply.apply(this, [2, 3])); // Apply will do the same thing but accepts variables as array

