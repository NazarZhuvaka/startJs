// const cat = {
//     name: "Barsik",
//     color: "Red",
//     age: 1,
// }

// const cat4 = {
//     name: "Murzik",
//     color: "Black",
//     age: 4,
// }

// const catMethods = { // прототип
//     run: function() {
//         console.log(`${this.name} is runing`);
//     },
//     meow: function() {
//         console.log(`${this.name} said meow`);
//     }
// }

// cat.__proto__ = catMethods; // прототипне посилання
// cat4.__proto__ = catMethods;

// function Cat(name, color, age) {
//     this.name = name;
//     this.color = color;
//     this.age = age
// }

// const cat1 = new Cat("Barsik", "Red", 1);
// const cat2 = new Cat("Murzik", "Black", 4);

// function MyArray() {
//   this.length = 0;
// }

// function MyArrayPrototype() {
//     this.push = function (value) {
//         // value add to end of array
    
//         for (let i = 0; i < arguments.length; i++) {
//           this[this.length] = arguments[i];
//           this.length++;
//         }
//         // this[this.length] = value;
//         // this.length++;
//         return this.length;
//     },
//     this.pop = function () {
//         if (this.length > 0) {
//           const lastItem = this[this.length - 1];
    
//           delete this[this.length - 1];
//           this.length--;
    
//           return lastItem;
//         } else {
//           return undefined;
//         }
//       },
//     this.myforEach = function (callback) {
//         for (let i = 0; i < this.length; i++) {
//           callback(this[i], i, this);
//         }
//     }
// };

// MyArray.prototype = new MyArrayPrototype(); // прототипне посилання

// різниця між __proto__ та .prototype ?

// __proto__ працює тільки тоді, коли ми літерально створюєсо об'єкт --> const obj = {}

// .prototype коли об'єкти створюється за допомогою конструктора


// function Ladder() {
//   this.currentStairs = 0;
// }

// function LadderMethods() {
//   this.up = function() {
//     this.currentStairs++
//     return this;
//   }
//   this.down = function() {
//     this.currentStairs--
//     return this;
//   }
//   this.shownstairs = function() {
//     return this.currentStairs;
//   }
// }

// Ladder.prototype = new LadderMethods()

// const ladder = new Ladder()




// this - в глобальній області видимості посилається на Window (вікно браузера)

// 'use strict';
// строге виконання коду strict mode

/*
  strict mode - запустив такий механізм , що у функціях(Declarative and Expression) з'являється свій власний контекст виконання  функції і ним стає сама функція,
  а не глобальний об'єкт Window | І цих функція з'являється свій власний контекст
*/

// const test3 = () => console.log(this); // this вкаже на глобальний об'єкт Window
// Адже стрілочна функція немає свого власного контексту виконання

// const newspaper = {
//   title: "News news news",
//   articles: [{
//     author: "John",
//     date: "23-07-2002",
//     text: "lorem"
//   }, {
//     author: "Richard",
//     date: "25-01-2002",
//     text: "lorem"
//   }, {
//     author: "Sam",
//     date: "23-07-2008",
//     text: "lorem"
//   }],

//   // showArticles: function() {
//   //   this.articles.forEach(function (item, index){
//   //     console.log(`${index} --> ${item.author}`);
//   //   })
//     // this.articles.forEach((item, index) => {
//     //   console.log(`${index} --> ${item.author}`);
//     // })

//     showArticles: () => {
//       this.articles.forEach((item, index) => {
//           console.log(`${index} --> ${item.author}`);
//     });
  
  
  
//   }
// }

// newspaper.showArticles()

//

// function sum (a, b) { // Function Declaration
//   return a + b
// } 

// const sumOne = (a, b) => { // Arrow function
//   return a + b
// };

// const sum2 = (a, b) => a + b;


// // якщо один аргумент, то круглі дужки можна упустити:

// const sum3 = number => number**2;

// // АЛК ! Якщо функція не приймає аргументів взагалі - круглі дужки(пусті) треба писати ОБОВʼЯЗКОВО


// const SuperFunc = () => { // this вказує на глобальну область видимості
//   this.value = 'Hello'; // а нам потрібно , щоб функція конструктор вказувала на свій контекст виконання
//   // Тому стрілочна функція не може бути функцією-конструктором
// }

// arguments - псевдомасив з аргументами,які ми передаємо нашій функції при виклику


// Особливості Arrow Function
/*

  1. Стрілочна функція немає свого власного контексту виконання (вона завжди буде брати 
       найближний їй доступний this, СВОГО this вона нематиме)

  2. Стрілочна функція не може бути функцією-конструктором

  3. Стрілочна функція немає колекції arguments

*/

'use strict';

// Operations

// function sum(a, b){
//   return a + b
// }

// sum(3,4) // 7

// sum(1, 2, 5, 10) // 3


// rest operator (rest - залишок)

// function sum(a, b, ...arrayOfRestArgs){
//   console.log(arrayOfRestArgs);
//   return a + b
// }

// console.log(sum(1, 2, 5, 10));

// const arrowFunc = (...arrayOfRestArgs) => {
//   // let sum = 0

//   // for(let i = 0; i < arrayOfRestArgs.length; i++){
//   //   sum += arrayOfRestArgs[i]
//   // }

//   return arrayOfRestArgs.reduce((accumulator, item) => accumulator + item , 0)
//   // accumulator - де накопичуємо
//   // item(currentValue) - елементи масиву
// }

// const arrowFunc = (...arrayOfRestArgs) => arrayOfRestArgs.reduce((accumulator, item) => accumulator + item , 0)

// console.log(arrowFunc(1, 5, 10 ,342));



// spread operator (розпокувати)
// [] --> .., .., ..,

// const number = [1, 2, 3, 4, 5];

// function sum (a, b, ...restArr){
//   console.log(restArr);
//   return a + b
// }

// // console.log(sum(number[0], number[1], number[2], number[3], number[4]));

// console.log(sum(...number)); // spread operator

// розпакували всі значення масиву numbers у виклик функції sum

// Як розрізняти rest і spread оператор

/*
  1. Якщо оператор стоїть в аргументах функції, то це rest - він просто бере і збирає всі залишки параметрів

  2. Якщо ми використовуємо оператор на масиві, то це spread - він бере і розбиває масив на купу елементів
*/

// const numbersMath = [2, 3, 1, 5, 6];

// const copyArray = [...numbersMath]; // spread operator --> робить поверхневі копії 

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [10, 11, 12, 13, 14, 15];

// const array3 = [...array1, ...array2];



// Вкладенні цикли

// for (let i = 1; i <= 5; i++){ // число для якого ми виводимо таблицю множення
//   for (let j = 1; j <= 5; j++) { // 1*1, 1*2 , 1*3, 1*4, 1*5 - числа на які ми множисо число із зовнішнього циклу
//     console.log(`${i}x ${j} = ${i*j}`);
//   }
// }

// const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let sum = 0

// for (let i = 0; i < numbers.length; i++) { // контролює масив який ми переглядаємо
//   for(let j = 0; j < numbers[i].length; j++) { // сумує всі елменти поточного вкладеного масиву
//     sum += numbers[i][j] // отримуємо доступ до поточного елементу просматріваємого вкладеного масиву
//   }
// }

// console.log(sum);