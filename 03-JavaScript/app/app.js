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
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

// Handle keyboard events
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});


function makeSound(key) {
        switch (key) {
          case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
          case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
          case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
          case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
          case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
          case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
          case 'l':
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
          default:
            console.log(buttonInnerHTML);
            break;
        }

}



// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
//   this.yearsOfExperience = yearsOfExperience;
//   this.name = name;
//   this.cleaningRepertoire = cleaningRepertoire;
//   this.clean: function() {
//   alert('Cleaning in progress');
//   }
// }

// let houseKeeper1 = new HouseKeeper(12, 'Martha', ['Lobby', 'Bedroom', 'Bathroom'])
// houseKeeper.clean();

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
