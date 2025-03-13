const arr = [2, 4, 1, 3, 7, 10, 4, 6, 8, 9, 2, 5];

function linerSearch(array, value) { // лінійна складність алгоритму
    for(let i = 0; i < array.length; i++) {
        if (array[i] === value){
            return i;
        }
    }
    return -1
}

console.log(linerSearch(arr, 3));

// Лінійна складність, коли Big O, тобто, коли стільки ітерацій(операцій) скільки в нас вхідних даних



// Квадратична складність:

function multyTable(limit) { // квадратична складність
    const table = []

    for(let i = 0; i <= limit; i++){
        for(let j = 0; j <= limit; i++){
            table.push(`${i} * ${j} = ${i * j}`)
        }
    }

    return table
}

multyTable(1) // 1 (1^2 = 1)
multyTable(2) // 2 (2^2 = 4)
multyTable(3) // 3 (3^2 = 9)

// Квадратична складність, коли ми на виході отримуємо кількість вхідних даних (n) в квадраті


// Логарифмічна складність --> вхідних данних припадає приблизно 6 операцій 

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array, whatToFind) { // need review!
    if(whatToFind > array[array.length - 1]) {
        return -Infinity; // на випадок, якщо такого числа точно немає у масиві
    }

    let start = 0;
    let end = array.length - 1;
    let middle = Math.round((start + end) / 2);

    while (true) {
        if(array[middle] === whatToFind) {
            return middle;
        }
        if(array[middle] < whatToFind){
            start = middle;
            middle = Math.ceil((start + end) / 2);  
        } else {
            end = middle
            middle = Math.ceil((start + end) / 2);
        }
    }
}



// LIFO; last in - first out

// Stack overflow - помилка, яка виникає при переповнення стеку


/*

    push - вставляємо елемент на вершину стеку
    pop - видалення елементи з вершини стеку і повернення видаленного елементу
    isEmpty - повертає true, якщо стек пустий // false - якщо сетк не пустий
    pick - повертає останнй елемент, але нічого не робить з ним і не видаляє зі стеку

*/

