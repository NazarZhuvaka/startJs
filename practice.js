// const firstNumber = Number(prompt("Введіть число: "));
// const secondNumber = Number(prompt("Введіть друге число: "));
// const userOperator = prompt("Введіть оператор: ");

// if (userOperator === "+") {
//   alert(firstNumber + secondNumber);
// } else if (userOperator === "*") {
//   alert(firstNumber * secondNumber);
// } else {
//   alert("Щось пішло не так");
// }

// && ("і")
// && бінарний оператор , коли обидва операнди є істина , тоді тільки поверне true

// || ("або")
// коли хобач одна з умов виконується , то повертає (true)

// !== ("не дорівнює")
// перевіряє чи обидва операнти НЕ рівне одне одному, якщо операнди НЕ рівні , то повретає (true)

// let result = Number(prompt("Введіть число"));

// if (Number.isNaN(result)) {
//   console.log("Введіть правильне число");
// } else {
//   console.log(result);
//   console.log(typeof result);
// }

// Функції

/*

    1. Блок коду який виконує певні дії при виклику
    2. Функція може приймати аргументи(значення які передаються у функцію)
    3. Функція може повертати значення(а може і ні)
    4. Функція - це фрагмент програмного коду до якого можна вернутися з іншого місця програми

*/

// Синтаксис

/*

    function functionName (params) {
        body of func
    }

*/

// function firstFunc(number) {
//     return number + 10
// }

// function secFunc(num1, num2) {
//     const result = num1 + num2
//     return result
// }

// const result2 = firstFunc(secFunc(3, 5))
// console.log(result2)


// Види функцій     

/*
    <=========== Існує три види функцій ============>

        1. Об'явлена функція --> Function Declaration

            function functionName(param1, param2){
                body of func
            }
            виклик функції ->
                 functionName(param1, param2)

            hoisting - оголошення функції піднімається до верхньої частини коду
                == МОЖЕМ ВИКЛИКАТИ В БУДЬ-ЯКОМУ МІСЦІ КОДУ == 


        2. Функціональний вираз --> Function Expresssion (анонімна функція)

            const functionName = function(param1 , param2 , ..) {
                function`s body
            }
            виклик функції ->
                 functionName(param1, param2)
            
            hoisting НЕ відбувається

            == НЕ можем викликликати ДО об'явою функції ==


        3. Стрілкові функції --> Arrow function

            const functionName = (param1, param2 , ..) => {
                body of function    
            }

            виклик функції ->
                 functionName(param1, param2)

            hoisting НЕ відбувається

            == НЕ можем викликликати ДО об'явою функції ==
*/  