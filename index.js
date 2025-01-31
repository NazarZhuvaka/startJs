// --------- Task 1 -----------

for (let i = 1; i < 10; i++) {
  let result = i ** 2;
  console.log(result);
}

// --------- Task 2 -----------

function isCorrect() {
  const correctPass = "qwerty1234";

  while (true) {
    const userPass = prompt("Enter your password: ");

    if (userPass === correctPass){
        console.log("Ви успішно увійшли в систему !");
        break
    }
  }
}

isCorrect();

// --------- Task 3 -----------

let result = 0;

for (let i = 1; i < 100; i++) {
    result = result + i;
    console.log(result);
}

// --------- Task 4 -----------

for(let i = 10; i < 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// --------- Task 5 -----------

function doTriangle(size) {
  let star = "";

  for (let i = 0; i < size; i++) {
    star += "*";
    console.log(star);
  }
}

doTriangle(7);

// --------- Task 6 -----------

function doSquare(size) {
  for (let i = 0; i < size; i++) {
    let row = "";

    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
        row += "*";
      } else {
        row += " "; 
      }
    }
    console.log(row);
  }
}

doSquare(16);

// --------- Task 7* -----------

function doSquare(size) {
  for (let i = 0; i < size; i++) {
    let row = '';

    for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i + j === size - 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}
}

doSquare(16);