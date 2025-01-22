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

// let user_name = prompt("Вкажість своє ім'я")

function getName(user_name) {
  console.log("Привіт " + user_name);   
}

getName(prompt("Вкажість своє ім'я"));
