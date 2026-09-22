"use strict";
// Write a generic function getLastElement<T>(arr: T[]): T that returns the last element of any array.
function getLastElement(arr) {
    const len = arr.length;
    return arr[len - 1];
}
console.log(getLastElement([2, 4, 1, 5]));
let pair = { first: "age", second: true };
console.log(pair);
// Create a generic class Stack<T> with methods push(item: T): void, pop(): T | undefined, and peek(): T | undefined. Use it with numbers.
// Write a generic function logProperty<T extends { name: string }>(item: T): void that logs item.name. Test it with an object that has extra properties too.
// Create a generic function wrapInArray<T>(value: T): T[] that returns the value wrapped in an array. Test with a string and a number.
