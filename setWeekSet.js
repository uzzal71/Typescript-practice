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

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);
log(union);

let intersection = new Set([...a].filter(x => b.has(x)));
log(intersection);

let difference = new Set([...a].filter(x => !b.has(x)))
log(difference);

// WeakSet
