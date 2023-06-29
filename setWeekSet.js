// set is reference data type
function log(anything) {
    return console.log(anything)
}
// sets
// * set is not a array
// let myArray = []; // literal syntax
let myArray = [1, 2, 3, 2];
// let mySet = new Set();

// mySet.add(5).add(6).add("Bangldesh").delete(5);
// mySet.add("Uzzal Kumar Roy");
// mySet.delete("Uzzal Kuamr Roy")
// log(mySet.has("Uzzal Kumar Roy"));
// log(mySet.size);
// log(mySet);

let mySet = new Set(myArray);

log([...mySet]);
log(Array.from(myArray));