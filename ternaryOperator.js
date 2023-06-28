// ternary operator
var age = 15;

var type;
// full detail
/*
if (age >= 18) {
    type = "adult";
} else {
    type = "child"
}
*/

// short hand
var type = (age >= 18) ? "adult" : "child";

// Multi ternary
var type = (age >= 18) ? "audlt" : (age < 10) ? "child" : "young";

console.log(type)

var isLoggedin = true;
var access = isLoggedin ? true : false;
console.log(access);

var a = 9;
var isResult = a > 5;
console.log(isResult);