// 1 - uyga vazifa
var keywords = 'Lorem dolor amet consectetur, adipisicing.'.split(' ');

for(var text of keywords){
  if(keywords < text){
    keywords = text
  }
}
console.log(keywords);

// 2 - uyga vazifa
var numbers = [23, 38, 24, 71, 14, 55, 11];

function number(num){
  var result = 0;

  for(var number of num){
    result += number
  }
  return result;
}
console.log(number(numbers));