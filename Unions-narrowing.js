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
function overloaded(a, b) {
    return a + b;
}
overloaded(22, 23);
// overloaded(22,"ABV")
// Create a class BankAccount with a private balance, public readonly accountNumber, methods deposit(amount: number) and withdraw(amount: number) (throw an error if withdrawal exceeds balance).
class BankAccount {
    balance;
    accountNumber;
    constructor(balance, accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            return "You don't have enough balance";
        }
    }
    display() {
        console.log(this.balance);
        console.log(this.accountNumber);
    }
}
let s1 = new BankAccount(5000, 3467543);
s1.deposit(25);
s1.display();
s1.withdraw(26);
s1.display();
// Create an abstract class Shape with an abstract method getArea(): number. Create two subclasses Circle and Rectangle implementing it, and log both areas.
class Shape {
    describe() {
        return `Area is ${this.getArea()}`;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
let C2 = new Circle(4);
console.log(C2.getArea());
