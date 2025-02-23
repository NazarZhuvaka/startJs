// Типи даних

// 7 примітивних типів даних: Number, String, Bigint, Boolean, null, undefined, Symbol
// 1 об'єкт

// Примітивні типи даних вони копіюються завжди за значенням і не мають властивостей методів
// Об'єкти можуть мати властивості та методи і вони завжди копіюються за посиланням


// Для кожного примітива створюється об'єкт обгортка, для якого доступні методи 

// null/undefined - вони не мають об'єктів обгорток


// const str = new String('Hello'); // поверне псевдо масив

// string.charAt - використовується для повернення символу з рядка за вказаним індексом


// function makeBigLetter(word) {
//     // розбиваємо рядок на окремі слова
//     let words = word.split(' ')

//     // проходимо по кожному слово і робимо першу літеру великою
//     for(let i = 0; i < words.length; i++ ){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     } 

//     // повертаємо з'єднаний рядок зі словами, розділеними пробілами
//     return words.join(' ');
// }

// makeBigLetter('go flower')


// function checkSpam(str) {
//     word = str.toLowerCase()

//     if (str.includes('xxx') | word.includes('viagra')){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkSpam('ad xxxxxxxxx'));


function checkStr(str) {
    word = Array.from(str).reverse().join('').toLowerCase()

    // if(str.toLowerCase() === word) {    
    //     return true
    // } else{
    //     return false
    // }
    // result = str.toLowerCase() === word ? true : false
    return str.toLowerCase() === word ? true : false
}

console.log(checkStr("Anasdasdna"));