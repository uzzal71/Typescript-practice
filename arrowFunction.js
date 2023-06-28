const userInfo = () => {
    return {
        name: "Uzzal Roy",
        age: 26
    };
}
console.log(userInfo());

const singleReturn = () => 5 * 5;
console.log(singleReturn());

let number = (a, b) => {
    return a + b;
};
console.log(number(10, 7));

var javascript = {
    name: "JavaScript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function() {
        this.libraries.forEach((lib) => console.log(`${this.name} loves ${lib}`));
    }
};
javascript.printLibraries();

// New keyword is fat arrow function
function Person(name) {
    this.name = name
};

var uzzal = new Person("Uzzal");