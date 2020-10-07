// boolean (true/false)
var flag: boolean = true;

// number
var num: number = 12.3;

// string
var str: string = "This a string";
var ans: string = "This another string";
let sentence: string = `What I want to say is ${str}. I want you to say ${ans}!`;

// array
var arr: number[] = [1, 2, 3];
var arr: Array<number> = [1, 2, 3];

// tuple
var tuple: [number, string, boolean] = [1, "2", true];

// enum
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

enum Flag { true = 1, false = -1, unknown };
var flag2: Flag = Flag.true;

// any

// null & undefined
var un: undefined;
var nu: null;


// void
// Function without any return value
function alertName(): void {
    alert("My name is Linzi");
}
var unusable: void = undefined;
// never

