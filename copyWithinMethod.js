/**
 * copyWithin(target, start, end)
 * ++++++++++++++++++++++++
 * Characteristics
 * ++++++++++++++++++++++++
 * target is required *
 * start defaults to 0
 * end defaults to array.length
 * never changes array.length
 * overwrite original array
 * returns modified array
 * ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'Rust']
 */

let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'Rust'];

// a.copyWithin(3, 2);
// a.copyWithin(6, 1, 2);
// a.copyWithin(3);
a.copyWithin(-3, -2, -1);

console.log(a);