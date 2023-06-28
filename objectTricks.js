// Important object methods
var myObj = {
    name: "JavaScript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1
};

var keys = Object.keys(myObj);
var values = Object.values(myObj);
var entries = Object.entries(myObj);

console.log(keys);
console.log(values);
console.log(entries);

// Object Shorthand
var x = 4;
var y = 5;
var z = x * y;

var myObj2 = {
    name: "JavaScript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1,
    x,
    y,
    z
};

console.log(myObj2);