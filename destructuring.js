// destructuring
const user = {
    id: 854,
    name: "Uzzal",
    age: 27
};
const { name: title } = user;
console.log(title);

// destructuring nested
const userInfo = {
    id: 854,
    name: "Uzzal",
    age: 28,
    education: {
        degree: "B.sc"
    }
};
// default value assigne because education are missing
// const { education: { degree } = {} } = userInfo;
const { education: { degree } } = userInfo;
console.log(degree);

// array destructuring
var numbers = [1, 2, 3, 4, 6];
var [a, b] = numbers;
console.log(a, b)
var [,c,,,d] = numbers;
console.log(c, d);

var newNumbers = [1, 2, [3, 100, 500], 4, 6];
var [, , [, x, y]] = newNumbers;
console.log(x, y);

// swaping
var a = 1;
var b = 2;
// the old way
var temp = a;
a = b;
b = temp;
console.log(a, b);

var x = 1;
var y = 2;

[y, x] = [x, y];
console.log(x, y);