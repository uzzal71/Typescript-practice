// Spread Operator
var numbers = [1, 2, 3];
var a = [...numbers]; // exact copy of numbers
numbers.push(4);
var newNumbers = [...numbers, 4, 5, 6];
console.log(numbers);
var numbers2 = [5, 6, 7];
var numbers3 = [...numbers, ...numbers2];
console.log(numbers3);

// Object spreading
var myObj1 = {
    x: 1,
    y: 2
};

var myObj2 = {
    a: 1,
    b: 2
};

var result = {
    ...myObj1,
    ...myObj2
};

console.log(result);