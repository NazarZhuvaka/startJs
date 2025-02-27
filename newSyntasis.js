// // /*
// //     class MyClass {
// //         // методи класу 
// //         constructor() {

// //         }

// //         method1() {...}
// //         method2() {...}
// //         method3() {...}

// //     }

// //     const user = new MyClass();
// // */


// // // class User {
// // //     constructor(name, lastName, age) {
// // //         this.name = name;
// // //         this.lastName = lastName;
// // //         this.age = age;
// // //     }

// // //     getFullName() {
// // //         return `${this.name} ${this.lastName}`;
// // //     }
// // // }

// // // const user1 = new User('Alex', 'Dane', 20);
// // // const user2 = new User('Dari', 'Dane', 23);


// // // Правила класу
// // /*
// //     1. constructor() при створенні класу - обов'язковий
// //     2. Ми не можемо самостійно звернутися до конструктора
// //     3. Конструктор має бути тільки один
// //     4. Назва класу пишеться з великої літери

// // */

// // const MIN_ZP = 2101
// // const WORK_DAYS = 21
// // const MIN_RATE = MIN_ZP / WORK_DAYS

// // class Worker {
// //     constructor(name, lastName, rate = MIN_RATE, days = WORK_DAYS, coef) {
// //         this.name = name;
// //         this.lastName = lastName;
// //         this.rate = Number(rate.toFixed(2));
// //         this.days = days;
// //         this.coef = coef
// //     }

// //     /*
// //         Сеттер - метод для встановлення значення
// //         Геттре - метож для отриманння значення

// //     */

// //     set days(newValue) {
// //         if(newValue < 0 || newValue > 31) {
// //             throw RangeError('Days must be in 0 to 31')
// //         }

// //         this._days = newValue
// //     }

// //     get days() {
// //         return this._days;
// //     }

// //     set coef(newValue) {
// //         if(newValue < 0) {
// //             throw RangeError("Coefficient must be a positive")
// //         }

// //         this._coef = newValue
// //     }

// //     get coef() {
// //         return this._coef;
// //     }

// //     set rate(newValue) { // назва сеттеру - приватного поля БЕЗ знаку нижнього підкреслення
// //         if(newValue) {
// //             throw new RangeError('Rate must be a positive number')
// //         }
// //         if(typeof newValue !== 'number') {
// //             throw TypeError('Rate must be a number')
// //         }

// //         // АЛЕ в середені сеттеру ми працюємо з приватним полем
// //         this._rate = newValue;
    
// //     } 

// //     get rate() { // назва геттеру - приватного поля БЕЗ знаку нижнього підкреслення
// //         // АЛЕ в середені геттеру ми працюємо з приватним полем
// //         return this._rate;
// //     }

// //     // getRate() { // геттер
// //     //     return this._rate
// //     // }

// //     // setRate(value) { // сеттер
// //     //     if (typeof value !== 'number') {
// //     //         throw new TypeError('Rate must be number')
// //     //     }
        
// //     //     if (value < 0) {
// //     //         throw new RangeError('Rate must be a positive number')
// //     //     }

// //     //     this._rate = value
// //     // }

// //     getFullSalary() {
// //         if (this.coef) {
// //             return this.rate * this.days * this.coef
// //         } else {
// //             return this.rate * this.days
// //         }
// //     }
// // }

// // const worker1 = new Worker('Alex', 'Doe', 178 , 23);
// // const worker2 = new Worker('Jon', 'Doe', 120 , 31);


// // /*
// //     В середині класу , геттери та сеттери працюють з приватними полями,
// //      а при звернені ззовні ми працюємо з геттерами і сеттерами
// // */

// // class Test {
// //     constructor(value1, value2) {
// //         this.key1 = value1
// //         this.value2 = value2
// //     }

// //     method() {
// //         // тіло методу
// //     }

// //     // Варіант 2 для оголошення статичного методу (більш розповсюджений)
// //     static myStaticMethod(param){
// //         // тіло функції 
// //         console.log(param);
// //     }
// // }
// // Статичні методи - методи, якими ми можемо скористатися не відбудовуючи екземпляр класу
// // Всередині статичних методів ми не використовуємо this


// // Варіант 1 для оголошення статичного методу

// // Test.myStaticMethod = function(param) {
// //     // тіло функції
// //     console.log(param);
// // }

// // Test.myStaticMethod('123')


// // const obj1 = new Test('test1' , 'test2'); // створення нового екземпляру класу Test
// // obj1.method();


// // class RangeValidator{
// //     constructor(from, to) {
// //         this.to = to;
// //         this.from = from;
// //     }

// //     set from(newValue) {
// //         if (newValue < 0 || newValue > this._to){
// //             throw new RangeError("From must be positive")
// //         } else if (typeof newValue !== 'number') {
// //             throw new TypeError("From must be a number")
// //         }
// //         this._from = newValue;
// //     }

// //     get from() {
// //         return this._from
// //     }

// //     set to(newValue){
// //         if(newValue < this._from) {
// //             throw new RangeError("To must be smaller, than From")
// //         } else if (typeof newValue !== 'number') {
// //             throw new TypeError("To must be a number")
// //         }
// //         this._to = newValue;
// //     }

// //     get to(){
// //         return this._to;
// //     }

// //     getRange() {
// //         let result = []
// //         for(let i = this.from; i <= this.to; i++){
// //             result.push(i)
// //         }
// //         return result;
// //     }
// // }

// // const obj = new RangeValidator(2, 5);
// // console.log(obj.getRange());

// // class Animal {
// //     constructor(nickname, color) {
// //         this.nickname = nickname
// //         this.color = color
// //     }

// //     eat() {
// //         return `${this.nickname} is eating`;
// //     }
// // }

// // // const anim = new Animal('black', 'Tuzik');

// // // клас Собаки розширює клас Тварини (наслідує цей клас)
// // class Dog extends Animal {
// //     constructor(nickname, color){
// //         // виклик консруктора батьківського класу
// //         super(nickname, color)
// //     }

// //     gav(){
// //         return `${this.nickname} gav-gav-gav`;
// //     }
// // }

// // const dog = new Dog('Tuzik', 'grey') 


// class User{
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }

//     getFullName() {
//         return `${this.name} and ${this.surname}`
//     }
// }

// class Moderator extends User{
//     constructor(name, surname, age) {
//         super(name, surname, age);
//     }

//     createPost(text) {
//         console.log('Post success created');
//     }

//     deletePost(id) {
//         console.log('Post success delete');
//     }
// }


// class Admin extends Moderator{
//     constructor(name, surname, age, prefix) {
//         super(name, surname, age);
//         this.prefix = prefix;
//     }

//     makeModerator(userID) {
//         console.log('Moder successfully set');
//     }

//     deleteModerator(userID){
//         console.log('Moder successfully del');
//     }
// }


// // function reduce(accumulator, item) {
//     //     return (accumulator + item) / arr.length
//     // }
    
//     // console.log(arr.reduce(reduce, 0));
//     // arr.reduce((accumulator, item) => (accumulator + item) / arr.length)
// const arr = [90, 85, 70 , 78]
// console.log(arr.reduce((accumulator, item) => (accumulator + item) / arr.length, 0));