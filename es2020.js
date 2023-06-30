// // ECMA = European computer manufacturers association
// global.setTimeout(() => console.log('Hello'), 200) // browser
// global.setTimeout(() => console.log('Hello'), 200) // node js

// // The global this was not standardized before ES11. solution was
// var setGlobal = function() {
//     if (typeof window !== 'undefined') { return window; }
//     if (typeof global !== 'undefined') { return global; }
//     throw new Error('unable to locate global object');
// }

// // var myGlobal = setGlobal();
// // myGlobal.setTimeout(() => console.log('Hello'), 200);

// // from ES11 we can use globalThis
// globalThis.setTimeout(() => console.log('Hello'), 200);

// window === globalThis // true in browser
// global === globalThis // true in node js

// BigInt
// let largest_number = Number.MAX_SAFE_INTEGER;
// largest_number += 1;
// largest_number = BigInt(largest_number) +  1n;
// console.log(largest_number);

// // Equality
// 10n === BigInt(10); // true
// 10n == 10; // true
// 10n === 10; // false

