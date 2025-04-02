// let sandwichName = 'Turkey with Mayonnaise';
// let sandwichPrice = 100;
// let vat = 0.14;
// let serviceTax = 12;

// let totalPrice = sandwichPrice + (sandwichPrice * vat) + serviceTax;

// console.log(totalPrice);

//----------------------------------------------------------------------
// let myName = "Mohamed";

// let age = 16;

// let favoriteSport = "Football";

// let favoriteQuote = "Never give up!";

// console.log(`my name is ${myName}\nmy age is ${age}\nmy favorite sport is ${favoriteSport}\nmy favoriteQuote is ${favoriteQuote}`)
//----------------------------------------------------------------------

// classroom :-

// const price = 15.00;
// const money = 15.00;

// if (money >= price) {
//     console.log("buy the hammer");
//   } else {
//     console.log("don't buy the hammer");
//   }

//----------------------------------------------------------------------
// classroom2 :-

// const money = 100.50;
// const price = 100.50;

// if (money > price) {
//   console.log("You paid extra, here's your change.");
// } else if (money === price) {
//   console.log("You paid the exact amount, have a nice day!");
// } else {
//   console.log("That's not enough, you still owe me money.");
// }

// let number = 10;
// if(number % 2 === 0){
//     console.log("even");
// }else {
//     console.log("odd");
// }
//----------------------------------------------------------------------
// var month = 2;

// switch(month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         days = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         days = 30;
//         break;
//     case 2:
//     days = 28;
// }

// console.log("There are " + days + " days in this month.");

//----------------------------------------------------------------------

// let x = 1;
// while (x <= 1000){
//     console.log(x + " Hello");
//     x = x + 1;
// }

//----------------------------------------------------------------------

// let x = 1;

// while (x <= 20) {
//   if(x % 3 == 0){
//     console.log("Julia");
//   }else if(x % 5 == 0){
//     console.log("James");
//   }else if(x%5==0 && x%3==0){
//     console.log("JuliaJames");
//   }else{
//     console.log(x)
//   }
//   x = x + 1;
// }

//----------------------------------------------------------------------

// for (let num = 2; num <= 10; num++) {
//   let numIsPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       numIsPrime = false;
//       break;
//     }
//   }
//   if (numIsPrime) {
//     console.log(num + " is prime");
//   } else {
//     console.log(num + " is not prime");
//   }
// }

//-----------------------------------------------------------------------

// let temperature = 30;

// while (temperature > 21) {
//   console.log("Current temperature: " + temperature);
//   temperature -= 1;
// }

// console.log("The required temperature 21 has been reached.");

//----------------------------------------------------------------------

// let integer = prompt("enter a number");
// function isPrime(integer) {
//   for (let x = 2; x < integer; x++) {
//     if (integer % x === 0) {
//       console.log(integer + " is divisible by " + x);
//       return false;
//     }
//   }
//   return true;
// }
// isPrime()

//-----------------------------------------------------------------------

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   readline.question(
//     'Player One, choose: rock, paper, scissors: ',
//     (playerOne) => {
//       readline.question(
//         'Player Two, choose: rock, paper, scissors: ',
//         (playerTwo) => {
//           playerOne = playerOne.toLowerCase();
//           playerTwo = playerTwo.toLowerCase();
//           if (playerOne === playerTwo) {
//             console.log("It's a tie!");
//           } else if (
//             (playerOne === 'rock' && playerTwo === 'scissors') ||
//             (playerOne === 'scissors' && playerTwo === 'paper') ||
//             (playerOne === 'paper' && playerTwo === 'rock')
//           ) {
//             console.log('Player One wins!');
//           } else {
//             console.log('Player Two wins!');
//           }
//           readline.close();
//         }
//       );
//     }
//   );

//-----------------------------------------------------------------------

// const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

// for (let i = 0 ; i<test.length ; i++){
//   if(i % 3 === 0){
//     test[i] += 100
//   }
// }

// console.log(test);

//-----------------------------------------------------------------------

// let numbers = [2, 5, 8];
// // Expected output: [4, 10, 16]
// let doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers);

//-----------------------------------------------------------------------

// let names = ["ahmed", "mohamed", "fatma"];
// // Expected output: ["AHMED", "MOHAMED", "FATMA"]
// let upperNames = names.map(name => name.toUpperCase());
// console.log(upperNames);

//-----------------------------------------------------------------------

// Last session Activity :-

// let name = "Mohamed Hassan";
// console.log(name);

// const PI = 3.14159;
// console.log(PI);

// let age = 25;
// let profession = "Web Developer";
// console.log(
//   `My name is ${name}, I am ${age} years old, and I work as an ${profession}.`
// );

// let colors = ["red", "green", "blue"];

// for (let color of colors) {
//   console.log(color);
// }

// let person = {
//   name: "Mohamed",
//   age: 25,
//   profession: "Web Developer",
// };

// let { name: personName, profession: personProfession } = person;
// console.log(personName, personProfession);

// let moreColors = ["yellow", "purple", "orange"];

// let allColors = [...colors, ...moreColors];
// console.log(allColors);

// let square = (num) => num * num;

// console.log(square(5));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index in numbers) {
//   console.log(index, numbers[index]);
// }

// let student = {
//   name: "John Doe",
//   age: 20,
//   grades: [90, 85, 88],
// };
// let { name: studentName, grades: studentGrades } = student;
// console.log(studentName, studentGrades);

// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));

// function sumNumbers(a, b, c) {
//   return a + b + c;
// }
// let numArray = [1, 2, 3];
// console.log(sumNumbers(...numArray));

//-----------------------------------------------------------------------

function rock(){
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  let randomNumber = Math.random();

  let computerMove ='';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = "rock";
  }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = "paper";   
  }else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = "scissors";  
  }

  let result = '';

  if (computerMove === rock) {
    result = 'Tie';
  }else if (computerMove === paper) {
    result = 'You Lose';
  }else if (computerMove === scissors) {
    result = 'You Win';
  }

  alert(`You Picked Rock, Computer picked ${computerMove}. ${result}`);
}
function paper(){
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  let randomNumber = Math.random();

  let computerMove ='';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = "rock";
  }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = "paper";   
  }else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = "scissors";  
  }

  let result = '';

  if (computerMove === rock) {
    result = 'You Win';
  }else if (computerMove === paper) {
    result = 'Tie';
  }else if (computerMove === scissors) {
    result = 'You Lose';
  }

  alert(`You Picked Paper, Computer picked ${computerMove}. ${result}`);
}
function scissors(){
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  
  let randomNumber = Math.random();

  let computerMove ='';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = "rock";
  }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = "paper";   
  }else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = "scissors";  
  }

  let result = '';

  if (computerMove === rock) {
    result = 'You Lose';
  }else if (computerMove === paper) {
    result = 'You Win';
  }else if (computerMove === scissors) {
    result = 'Tie';
  }

  alert(`You Picked Scissors, Computer picked ${computerMove}. ${result}`);
}