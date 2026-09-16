"use strict";
// Write a function describeValue(value: string | number) that uses typeof narrowing to print differently for strings vs numbers.
function describeValue(value) {
    if (typeof value == "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
describeValue(20);
describeValue("twenty");
let M1 = { wheels: 2, engine: "v4" };
console.log(M1);
function checkAccess(role) {
    console.log("access Granted to: " + role);
}
checkAccess("admin");
// Write an overloaded function format — if given a string, return it uppercased; if given a number, return it fixed to 2 decimals.
// Create a class BankAccount with a private balance, public readonly accountNumber, methods deposit(amount: number) and withdraw(amount: number) (throw an error if withdrawal exceeds balance).
// Create an abstract class Shape with an abstract method getArea(): number. Create two subclasses Circle and Rectangle implementing it, and log both areas.
