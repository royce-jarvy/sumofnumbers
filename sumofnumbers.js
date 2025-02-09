"use strict";
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function sumWhile(number) {
    let sum = 0;
    let i = 0;
    while (i < number.length) {
        sum += number[i];
        i++;
    }
    return sum;
}
function sumRecursion(number) {
    const i = 0;
    if (i === number.length) {
        return 0;
    }
    return number[i] + sumRecursion(number);
}
function sumTheFunctionalWay(number) {
    const sum = number.reduce((acc, curr) => acc + curr);
    return sum;
}
const array1 = [1, 2, 3, 4, 5]; // 15
const array2 = [5, 5, 5, 5, 5]; // 25
console.log(sumFor(array1));
console.log(sumWhile(array1));
console.log(sumRecursion(array1));
console.log(sumTheFunctionalWay(array1));
console.log(sumFor(array2));
console.log(sumWhile(array2));
console.log(sumRecursion(array2));
console.log(sumTheFunctionalWay(array2));
