// // // // SOLID
// // // /*

// // //     S -

// // // */

// // // // KISS

// // // /*

// // // */

// // // // YAGNI

// // // /*

// // // */

// // // // Черги (структура данних) Queue

// // // // first in - first out;

// // // /*

// // //     1. Enqueue - вставляє елемент в кінець черги
// // //     2. Dequeue - видаляє елемент з початку черги

// // // */

// // // class Queue{
// // //     constructor() {
// // //         this._head = 0;
// // //         this._tail = 0;
// // //     }

// // //     get size() {
// // //         return this._tail - this._head; // тому що індексація починається з нуля
// // //     }

// // //     enqueue(value) {
// // //         // tail відповідає на питання: кий елемент має бути останнім
// // //         this[this._tail] = value;
// // //         this._tail++
// // //         return this.size
// // //     }

// // //     dequeue() {
// // //         if(this.size > 0) {
// // //             const firstItem = this[this._head];
// // //             delete this[this._head];
// // //             this._head++

// // //             return firstItem;
// // //         } else {
// // //             return undefined
// // //         }
// // //     }

// // // }

// // // Колекції Map

// // /* Map(Карта, Словник, Мапа)

// //     Зберігає пари: "ключ: значення"
// //     Map має розмір (size)

// //     Відмінності від звичайного  об'єкта:

// //         1. Map запам'ятовує елементи в тому ж порядку , в якому ми їх додаємо
// //         2. Ключем може бути будь-який тип данних (навіть функція)

// //     Ключ в мапі має бути унікальним

// // */
// // // const obj = {
// // //     // ключем у об'єкті може бути тільки String або Symbol
// // //     key1: 'value1'
// // // }

// // // const map = new Map();

// // // map.set(1, {});
// // // map.set("1", "value");

// // // map.get("1"); // "value"
// // // map.get(1); // {}

// // // map.has(1) // чи є цей ключ в мапі

// // // по ключу отримуємо доступ до значення

// // const schedule = new Map();

// // // додавання занять до розкладу
// // schedule.set('Понеділок', ['Математика', "Фізика"]);
// // schedule.set('Вівторок', ['Укр.мова', "Анг.мова"]);
// // schedule.set('Середа', ['Історія', "Географія"]);
// // schedule.set('Четвер', ['Фізкультура', "Історія"]);
// // schedule.set('П\'ятниця', ['Біологія', "Математика"]);

// // console.log(schedule);

// // console.log(schedule.has('Середа'));

// // // schedule.size
// // console.log(schedule.size);

// // // Map.prototype.entries - метод який повертає ітератор. Ітератор повертає ключ => значення для кожного елемента

// // const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
// // const entriesIterotor = map1.entries();

// // // Map.prototype.keys - метод який повертає ітератор з усіма ключами з об'єкта Map
// // const keysIterator = map1.keys();

// // keysIterator.next().value;

// // const valuesIterator = map1.values();

// // valuesIterator.next().value;

// // // Map.prototype.forEach - використовується для ітерації (перебору) всіх елементів у Map і виклику певної функції (callback) для кожного елементу

// // map1.forEach((value, key, map) => {
// //     console.log(`${key} --> ${value}`);
// // })

// // //Map.prototype.delete - використовується для видалення пари ключ-значення з об'єкта map відповідно до якогось ключа
// // map1.delete('key1');

// // map1.has('key1'); // true
// // map1.get('key1');

// // // Map.prototype.clear - використовується для повного очищення об'єкта Map видаляючи всі пари ключ-значення які знаходяться там
// // map1.clear()

// // map1.size // 0

// // console.log(...map1);
// // console.log(...map1.keys());
// // console.log(...map1.values());

// // // Set - множинна набір унікальних значень

// // const set = new Set();

// // // Set.prototype.add - додає новий елемент із заданним значенням у кінець об'єкта Set

// // set.add(1);
// // set.add(4);
// // set.add('Hello')

// // // Set.prototype.has - перевіряє наявність елементу у множині
// // set.has(1);

// // // Set.prototype.delete - видаляє унікальний елемент з множини

// // set.delete(1);

// // // Set.prototype.values - використовується для отримання ітератора, який повертає нам всі значення об'єкта

// // const valuesIterator1 = set.values();

// // valuesIterator.next().value // 4

// // const arrayFormSet = [...set.values()];

// // const setNewSt = new Set();
// // const myArray = [2, 3, 4, 6, 77, 77, 5, 1, 1, 12, 12, 13];

// // for (let i = 0; i < myArray.length; i++) {
// //   setNewSt.add(myArray[i]);
// // }

// // function sortArray(a, b) {
// //   if (b > a) {
// //     return -1
// //   } else {
// //     return 1
// //   }
// // }

// // const sortedArray = Array.from(setNewSt)

// // sortedArray.sort(sortArray);

// // console.log(sortedArray);

// // const myArray = [2, 3, 4, 6, 77, 77, 5, 1, 1, 12, 12, 13];
// // const setNewSt = new Set(myArray);

// // const sortArr = [...setNewSt.values()]


// const arr1 = [4, 3, 7, 5, -12];
// const arr2 = [4, 5, 8, 7, 2, -11];


// function minusArr(arr1, arr2) {
//   // const result = [...arr1, ...arr2]
//   return [...new Set([...arr1, ...arr2])]
// }

// console.log(minusArr(arr1, arr2));


const monitor = {
  sizes: {
    height: {
      value: 30,
      scale: 'cm // 1'
    },
    width: {
      value: 50,
      scale: 'cm // 2'
    }
  },
  brightNess: 750,
  refresh: {
    value: 144,
    scale: 'Ggrc'
  },
  color: 'black',
  resolution: '4K'
}

// height = monitor.sizes.height.value;

// const {resolution, color: monitorColor} = monitor;

// console.log(resolution);
// console.log(monitorColor);

//

const {sizes: {height: {value: heightValue, scale: heightScale}, width: {value: widthValue, scale: scaleWidthValue}}} = monitor;

console.log(heightValue);
console.log(heightScale);
console.log(scaleWidthValue);


const {brightNess, color, resolution, ...restOfMonitor} = monitor

console.log(restOfMonitor);