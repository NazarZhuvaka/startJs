// JSDoc

// /**
//  * Повертає x у ступені n
//  * 
//  * @param {number} x число яке треба піднести до степення
//  * @param {number} n степень у яку треба піднести x
//  * @return {number} повертається x піднесений у n степінь   
// */
// function pow(x, n) {
//     return x**n
// }



// Помилки (Error)

// function sum(a, b) {
//     if (a < 0 || b < 0) {
//         // маємо "викинути" помилку
//         const error = new RangeError('Якесь з чисел менше 0')
//         // console.log(error);
//         throw error // return, тільки для помилки
//     }

//     if (typeof a !== 'number' || typeof b !== 'number') {
//         throw new TypeError('А та B мають бути числами')
//     }

//     return a + b
// }

// Викидання помилок - throw (викидання помилки)
// throw "об'єкт помилки"

// Виключення try... catch

try {
    // прописуємо якийсь код, очікуючи, що тут виникне помилка
    // sum(1, -2)
} catch (error) { // error прийде помилка яка повернеться від виклику sum
    console.log(error);
}


function MyArray() {
  this.length = 0;
}

function MyArrayPrototype() {
    this.push = function (value) {
        // value add to end of array
    
        for (let i = 0; i < arguments.length; i++) {
          this[this.length] = arguments[i];
          this.length++;
        }
        // this[this.length] = value;
        // this.length++;
        return this.length;
    },
    this.pop = function () {
        if (this.length > 0) {
          const lastItem = this[this.length - 1];
    
          delete this[this.length - 1];
          this.length--;
    
          return lastItem;
        } else {
          return undefined;
        }
      },
    this.myforEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
          callback(this[i], i, this);
        }
    }
};

MyArray.prototype = new MyArrayPrototype();