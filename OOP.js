// // // ООП 

// // // Загальні ідеї ООП
// // /*
// //     1.ООП збудоване навколо об'єктів.
// //     2. Поділ потрібний для того, щоб було створювати, обслуговувати та перетворювати якісь 
// //         частини програми, не впливаючи на інші
// //     3.Сенс об'єкта у тому, що він має якісь методи, він вміє щось робити ,при чому ,
// //         інші об'єкти не знають як він це робить
// //     4.Об'єкт має поняття атрибуту та методу
// //         Атрибут - будь-яку дані, які зберігаються всередині об'єкта
// //         Методи - будь-які дії, які можна здійснювати над об'єктом, атрибувати об'єкта
// //         Атрибути зазвичай виражаються змінними, а методи функціями
// //     5. Об'єкти можна створювати за шаблоном - такі шаблони називають КЛАСАМИ

// // */

// // // Геттери та сеттери іх ще називають - аксесори(доступ)

// // /*
// //     Абстракція - коли ми зосереджуємося, тільки на суттєвих для завдання деталях(коли описуємо його)
// //         і ігноруємо все інше. Чим менше характеристик , тим краще Абстракція. 
// //     АЛЕ ключові характеристики не можна прибирати

// //     Щоб працювати з Абстракція, використовують інтерфейс. Інтерфейс - це спосіб взаємодії з об'єктом,
// //         який визначає, які операції можна здійснити з цим об'єктом та які дані можна отримати або змінити

// //     Скриваємо неважливу для користувача інформацію і надаємо тільки необхідну для користування.
// // */


// // /*
// //     Інкапсуляція - процес об'єднання даних та методів в обному об'єкті і приховування деталей
// //         реалізації від користувача.
// // */


// // // Різниця між Абстракцією та Інкапсуляції:
// // /*
// //   Інкапсуляція зосереджена на організації та приховуванні деталей реалізації об'єкта.

// //   Абстракція спрощує складність системи , шляхом виділення ключових аспектів та приховування
// //     незначних деталей  
// // */


// // // Спадкування - здатність до копіювання, можливість описати новий клас на основі вже існуючого.

// // /*
// //     Поліморфізм - дозволяє використовувати спільний інтерфейс (иетоди базового класу) через 
// //         екземпляри похідних класів

// //     Суть поліморфізму полягає в тому, що ми можемо один і той самий код використовувати для об'єків
// //         різних класів
// // */


// // class Figure { // Абстрактний клас
// //     constructor(sideQuantity) {
// //         this.sideQuantity = sideQuantity;
// //     }

// //     get sideQuantity (){
// //         return this._sideQuantity;
// //     }

// //     set sideQuantity(newValue) {
// //         if(newValue < 0) {
// //             throw new RangeError("Side can not be less than 0")
// //         }

// //         this._sideQuantity = newValue;
// //     }

// //     getArea() { // абстрактні методи

// //     }
// // }

// // class Triangle extends Figure{
// //     constructor(a, b, angle) {
// //         super(3);
// //         this.a = a;
// //         this.b = b;
// //         this.angle = angle;
// //     }

// //     get a (){
// //         return this._a;
// //     }

// //     set a(newValue) {
// //         if(newValue < 0) {
// //             throw new RangeError("Side can not be less than 0")
// //         }

// //         this._a = newValue;
// //     }

// //     get b (){
// //         return this._b;
// //     }

// //     set b(newValue) {
// //         if(newValue < 0) {
// //             throw new RangeError("Side can not be less than 0")
// //         }

// //         this._b = newValue;
// //     }

// //     get angle(){
// //         return this._angle;
// //     }

// //     set angle(newValue){
// //         if(newValue < 0) {
// //             throw new RangeError("Angle can not be less than 0")
// //         }

// //         this._angle = newValue;
// //     }

// //     getArea() { // віртуальний метод
// //         return this.a*this.b*Math.sin(this.angle);
// //     }
// // }

// // class Square extends Figure{
// //     constructor(a) {
// //         super(4);
// //         this.a = a;
// //     }

// //     get a() {
// //         return this._a;
// //     }
// //     set a(newValue){
// //         if(newValue < 0) {
// //             throw new RangeError("Side can not be less than 0")
// //         }

// //         this._a = newValue;
// //     }

// //     getArea() { // віртуальний метод
// //         return this.a**2
// //     }
// // }

// // const square = new Square(4);


// // function getFihureArea(figure) {
// //     if(figure instanceof Figure) {
// //         return figure.getArea()
// //     }

// //     throw new TypeError("Param is not a Figure")
// // }

// // /*

// //     Переваги ООП:

// //         1. Візуально код стає простішим
// //         2. Менше однакового коду 
// //         3. Складні програми пишуться простіше
// //         4. Збільшується швидкість написання (достатньо швидко можемо прийти до працюючого прототипу)

// //     Недоліки ООП:

// //         1. Важко зрозуміти та почати працювати
// //         2. Потребує більше пам'яті
// //         3. Іноді продуктивність коду може бути низька
// //         (із сучасними потужностями недолік номер 3 нівелюється)

// // */



// /*
//     Фабричний метод - спосіб створювати об'єкти, який дозволяє нам не вказувати конкретний клас об'єкта  

//     Використовуємо спеціальну "фабрику" для створення об'єктів
//     Фабрика знає, який саме об'єкт потрібно створити і повертає його нам.

//     new Student(); НЕ РОБИМО!

//     Звертаємося до фабрики, фабриці повідомляємо, що нам потрібно, уже фабрика буде робити відповідні об'єкти

// */

// // Абстрактний клас або інтерфейс
// class Animal {
//     constructor(nickname) {
//         this.nickname = nickname
//     }

//     makeSound() { // абстрактний метод

//     }
// } 

// // Конкретний клас для собаки
// class Dog extends Animal {
//     constructor(nickname) {
//         super(nickname)
//     }

//     makeSound() { // віртуальний метод
//         console.log("Gav-gav-gav");
//     }
// }

// // Конкретний клас для кота
// class Cat extends Animal {
//     constructor(nickname) {
//         super(nickname)
//     }

//     makeSound() { // віртуальний метод
//         console.log("Meow-meow-meow");
//     }
// }

// // Фабричний клас, який створює об'єкти

// class AnimalFactory {
//     static createAnimal(type, nickname) {
//         switch(type) {
//             case 'dog': return new Dog(nickname);
//             case 'cat': return new Cat(nickname);
//             default: throw new Error(`Невідомий тип тварини ${type}`)
//         }
//     }
// }

// // Використання фабрики для створення об'єктів:

// // const factory = new AnimalFactory()

// // створити об'єкт собаки
// const dog = AnimalFactory.createAnimal('dog', 'Tuxik')
// dog.makeSound() // gav-gav

// // створити об'єкт кота
// const cat = AnimalFactory.createAnimal('cat', 'Murzik')
// cat.makeSound() // meow-meow


class MyArray {
    constructor() {
        this.length = 0
    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }

    pop() {
        if (this.length > 0) {
            const lastItem = this[this.length -1]    
      
            delete this[this.length -1]
            this.length--;
      
            return lastItem
        } else {
            return undefined
        }
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }

    map(callback) {
        // 1. Ми просто створили пустий масив - він буде нашим результуючим масивом
        const reultArray = new MyArray();
    
        // 2. Пройтися по поточному масиву від початку до кінця
        for (let i = 0; i < this.length; i++) {
            // запихуємо у результуючий масив значення яке нам буде повертати (return) колбек
            reultArray.push(callback(this[i], i, this));
        }

        // 3. Повернути як результат роботи методу map - результуючий масив
        return reultArray;
    }
}


/*

    Symbol - представляє собою унікальний ідентифікатор
    Кожен створений символ має свій власний унікальний ідентифікатор, який ніде і ніколи не буде повторюватися

    Особливість символів - вони завжди унікальні

    Гарантія унікальносіт - єдине для чого символ існує

*/


// const mySymbol = Symbol() // без new!!

// const symb2 = Symbol('My sec symbol') // label for human


// const obj = {
//     // у об'єкта ключами можуть бути рядки або символи
//     'test': 1,
//     [mySymbol]: 123
// }


