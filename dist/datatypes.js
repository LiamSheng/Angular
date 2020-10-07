"use strict";
// boolean (true/false)
var flag = true;
// number
var num = 12.3;
// string
var str = "This a string";
var ans = "This another string";
var sentence = "What I want to say is " + str + ". I want you to say " + ans + "!";
// array
var arr = [1, 2, 3];
var arr = [1, 2, 3];
// tuple
var tuple = [1, "2", true];
// enum
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
var Flag;
(function (Flag) {
    Flag[Flag["true"] = 1] = "true";
    Flag[Flag["false"] = -1] = "false";
    Flag[Flag["unknown"] = 0] = "unknown";
})(Flag || (Flag = {}));
;
var flag2 = Flag.true;
// any
// null & undefined
var un;
var nu;
// void
// Function without any return value
function alertName() {
    alert("My name is Linzi");
}
var unusable = undefined;
// never
