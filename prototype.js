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

'use strict';
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

//   showArticles: function() {
//     this.articles.forEach((item, index) => {
//       console.log(`${index} --> ${item.author}`);
//     })
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




