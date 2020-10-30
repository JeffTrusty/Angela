/*
var output = [];
var count = 1;

while(count <= 100) {
  fizzBuzz();
}
 console.log(output);

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0)
  {
    output.push("FizzBuzz");
  } else if (count % 3 === 0)
  {
    output.push("Fizz");
  } else if (count % 5 === 0)
  {
    output.push("Buzz");
  } else
  {
    output.push(count);
  }
  count++;
}
*/

/*
names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
  return names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today!";
}
*/
/*
function fibonacciGenerator(n) {
  if (n === 1)
  {
    return [0];
  } else if (n === 2)
  {
    return [0, 1];
  }
  var returnArray = [0, 1];
  while (returnArray.length < n)
  {
    returnArray.push(returnArray[returnArray.length-2] + returnArray[returnArray.length-1]);
  }
  return returnArray;
}
*/
var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    // alert('I got clicked');
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  });
}

/*
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// use the name of the operator function name when calling. IE calculator(num1, num2, add);
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

*/
