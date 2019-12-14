var arr = [1, 3, 5];

function multiplyByTwo(input_arr){
  var new_arr = []
  for(let i = 0; i < input_arr.length; i++ ){
    new_arr.push(input_arr[i] * 2);
  }
  return new_arr;
}
console.log(multiplyByTwo(arr));

var arr = [1, 3, 5];

function mapEach(arr, operation){
  var new_arr = [];
  for(let i = 0; i < arr.length; i++){
    new_arr.push(operation(arr[i]));
  }
  return new_arr;
}

output = mapEach(arr, function(element){
  return element * 2;
})

console.log(output);