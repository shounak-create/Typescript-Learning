// Write a function describeValue(value: string | number) that uses typeof narrowing to print differently for strings vs numbers.

function describeValue(value:string | number){
    if(typeof value == "string"){
        console.log(value.toUpperCase());
    } else{
        console.log(value.toFixed(2));
    }
}
describeValue(20)
describeValue("twenty")

// Create type Vehicle = { wheels: number } and type Powered = { engine: string }, combine into type MotorVehicle using &, and create an object of that type.

type Vehicle = {
    wheels:number;
}

type Powered = {
    engine:string;
}

type MotorVehicle = Vehicle & Powered;

let M1:MotorVehicle = {wheels:2,engine:"v4"}
console.log(M1);


// Create a literal type Role = "admin" | "editor" | "viewer". Write a function checkAccess(role: Role) that logs a different permission message per role.

type Role = "admin"|"editor"|"viewer";

function checkAccess(role:Role) {
    console.log("access Granted to: "+role);
}
checkAccess("admin")

// Write an overloaded function format — if given a string, return it uppercased; if given a number, return it fixed to 2 decimals.

function overloaded(a:number,b:number):number
function overloaded(a:any,b:any):any{
    return a+b;
}
overloaded(22,23)
// overloaded(22,"ABV")

// Create a class BankAccount with a private balance, public readonly accountNumber, methods deposit(amount: number) and withdraw(amount: number) (throw an error if withdrawal exceeds balance).

class BankAccount {
  constructor(
    private balance: number,
    public readonly accountNumber: number
  ) {}

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): string | void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      return "You don't have enough balance";
    }
  }

  display(): void {
    console.log(this.balance);
    console.log(this.accountNumber);
  }
}

let s1 = new BankAccount(5000, 3467543);
s1.deposit(25);
s1.display();
s1.withdraw(26)
s1.display();
// Create an abstract class Shape with an abstract method getArea(): number. Create two subclasses Circle and Rectangle implementing it, and log both areas.

abstract class Shape{
    abstract getArea(): number;
    describe(): string{
        return `Area is ${this.getArea()}`;
    }
}

class Circle extends Shape{
    constructor(private radius:number){
        super();
    }
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

let C2 = new Circle(4);
console.log(C2.getArea());