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

// BigInt ***
// let largest_number = Number.MAX_SAFE_INTEGER;
// largest_number += 1;
// largest_number = BigInt(largest_number) +  1n;
// console.log(largest_number);

// // Equality
// 10n === BigInt(10); // true
// 10n == 10; // true
// 10n === 10; // false

// Optional Chaining ***
// let language = {
//     name: 'JavaScript',
//     creator: 'Brendan Eich',
//     library: {
//         react: {
//             company: 'Facebook'
//         }
//     }
// };

// let company = language.library.react.company;
// let company = language && language.library && language.library.react && language.library.react.company ? language.library.react.company : undefined;
// let company = language && language.library && language.library.react && language.library.react.company;
// let company = language?.library?.react?.company;
// console.log(company);
// let colors = ['red', 'greed', 'blue'];
// colors = null;
// console.log(colors?.[1]);

// Nullish Coalescing Operator *** 
// let language;
// language = 0;
// console.log( language ?? 'JavaScript' ); // JavaScript
// console.log( language || 'JavaScript' ); // JavaScript
// NaN
// JavaScript

// Dynamic Import ***
// (async function() {
//     const { add } = await import('./utils.js');
//     const { remove } = await import('./utils.js');
//     add();
//     remove();
// })();

// import('./utils.js')
//     .then(({add, remove}) => {
//         add();
//         remove();
//     });

// promise.allSettled() ***
// const promise1 = new Promise(resolve => resolve("Barger"));
// const promise2 = new Promise((_, reject) => reject("Apple"));
// const promise3 = new Promise(resolve => resolve("Cake"));

// Promise.all([promise1, promise2, promise3])
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// Promise.allSettled([promise1, promise2, promise3])
//     .then(response => console.log(response));

// String.prototype.matchAll()
const text = 'My favorite colors are #FFFFFF and #000000';
const regex = /#?(?<group1>[\da-fA-F]{2})(?<group2>[\da-fA-f]{2})(?<group3>[\da-fA-F]{2})/g;

const matchesAll = text.matchAll(regex);
for(let match of matchesAll) {
    console.log(match);
}
