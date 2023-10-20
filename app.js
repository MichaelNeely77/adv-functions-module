//Pure function because we can prdict the outcome
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(4, 6));
console.log(add(12, 15));

// Impure functin because we cannot predict teh outcome
function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

let prevResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    prevResult = sum;
    return sum;
}

console.log(addMoreNumbers(1,5));

const hobbies = ['Sports', 'Cooking'];
function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);


// Factory functions - a function that produces another function

