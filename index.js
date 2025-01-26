// // --------- Task 1 -----------

// const firstNum = Number(prompt("Введіть перше число"));
// const secondNum = Number(prompt("Введіть друге число"));

// if ((firstNum + secondNum) % 5 === 0) {
//   alert("Сума кратна 5");
// } else {
//   alert("Сума НЕ кратна 5");
// }

// // --------- Task 2 ------------

// function squareArea(side) {
//   return Math.pow(side, 2);
// }

// console.log(squareArea(2));

// // --------- Task 3 ------------

// const userNumber = Number(prompt("Введіть число "));

// switch (userNumber) {
//   case 1: {
//     console.log("Ви обрали сік");
//     break;
//   }
//   case 2: {
//     console.log("Ви обрали воду");
//     break;
//   }
//   case 3: {
//     console.log("Ви обрали каву");
//     break;
//   }
//   case 4: {
//     console.log("Ви обрали чай");
//     break;
//   }
//   case 5: {
//     console.log("Ви обрали лимонад");
//     break;
//   }

//   default: {
//     console.log("Такого напою у нас нема");
//   }
// }

// // --------- Task 3.1 (калькулятор) ------------

// function culculate() {
//   const firstNum = Number(prompt("Введіть перше число "));
//   const secondNum = Number(prompt("Введіть друге число "));
//   const operation = prompt("Введіть дію ");

//   switch (operation) {
//     case "+": {
//       return plusNumber(firstNum, secondNum);
//     }
//     case "-": {
//       return minusNumber(firstNum, secondNum);
//     }
//     case "*": {
//       return insemNumber(firstNum, secondNum);
//     }
//     case "/": {
//       return divisNumber(firstNum, secondNum);
//     }

//     default: {
//       console.log("Error");
//     }
//   }
// }

// console.log(culculate());

// function plusNumber(num1, num2) {
//   return num1 + num2;
// }

// function minusNumber(num1, num2) {
//   return num1 - num2;
// }

// function insemNumber(num1, num2) {
//   return num1 * num2;
// }

// function divisNumber(num1, num2) {
//   return num1 / num2;
// }

// // --------- Task 4 ------------

// const sum = Number(prompt("Введіть суму покупки "));

// function calcSum(param1) {
//   const endSum =
//     param1 > 800
//       ? param1 * 1.05
//       : param1 > 500
//       ? param1 * 1.03
//       : "Менше суми знижки";

//   return endSum;
// }

// console.log(calcSum(sum));

// // --------- Task 5 ------------

// function dropFunc(num1, num2) {
//   const endNum = num1 % num2 === 0 ? true : false;

//   return endNum;
// }

// console.log(dropFunc(5, 5));

// // --------- Task 6* ------------

// function solveQuadratic(num1, num2, num3) {
//   const D = Math.pow(num2, 2) - 4 * num1 * num3;

//   if (D > 0) {
//     let result = ((-num2 + Math.sqrt(D)) / 2) * num1;
//     console.log(result);
//     result = ((-num2 - Math.sqrt(D)) / 2) * num1;
//     console.log(result);
//   } else if (D === 0) {
//     let result = (-num2 / 2) * num1;
//     console.log(result);
//   } else {
//     console.log("Розв'язків немає !");
//   }
// }

// console.log(solveQuadratic(1, -3, 2));
