// Task 1

const textValue = '1234';
textValue.split('').reverse().join('');

// Task 2

function intValue(num) {
    return num.toFixed()
}

console.log(intValue(8.11212));

// Task 3

const userName = prompt('Enter your name: ')

function makeUpperName(name) {
    alert(`${name} -> ${name.toUpperCase()}`)
}

makeUpperName(userName)


// Task 4 (?)


function changeDate(date) {
    const parts = date.split("-").reverse();

    const firstElement = parts.shift()
    const lastElement = parts.pop()

    parts.push(firstElement, lastElement)
    return parts.join('.')
}

console.log(changeDate('2021-22-09'));


// Task 5

function isEqual(firstSrt, secStr) {
    if(firstSrt.toLowerCase() === secStr.toLowerCase()){
        return true
    }
    return false
}

console.log(isEqual('pApA', 'papa'));

// Task 6

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('А та B мають бути числами')
    }
    return a + b
}

try {
    sum(1, null)
} catch (error) {
    console.log(error);
}