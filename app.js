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