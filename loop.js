// for loop, for in, for of

let i = 1;

for (; ; i++) {
    if ( i <= 5 )
        console.log(i);
    else 
        break;
}

// for in
const myObj = {
    name: "javascript",
    estd: '1995',
    founder: 'Brendan Eich'
};

for(property in myObj) {
    console.log(property);
}

// for on
const myArray = [1, 2, 3, 4, 5];
for (element of myArray) {
    console.log(element);
}

const myString = "I love javascript";
for (element of myString) {
    console.log(element);
}