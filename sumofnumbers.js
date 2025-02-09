"use strict";
const array1 = [1, 2, 3, 4]; // sum: 10
const array2 = [5, 5, 5, 5]; // sum: 20
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log('Test sumFor: ');
console.log(sumFor(array1));
console.log(sumFor(array2));
function sumWhile(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
console.log('\nTest sumWhile: ');
console.log(sumWhile(array1));
console.log(sumWhile(array2));
function sumRecursion(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers[0] + sumRecursion(numbers.slice(1));
}
console.log('\nTest sumRecursion: ');
console.log(sumRecursion(array1));
console.log(sumRecursion(array2));
function sumTheFunctionalWay(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr);
    return sum;
}
console.log('\nTest sumTheFunctionalWay: ');
console.log(sumTheFunctionalWay(array1));
console.log(sumTheFunctionalWay(array2));
