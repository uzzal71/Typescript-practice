// imports / exports
import {pi, a} from "./external.js"; // named import
import * as test from "./external.js"; // alias import
import { pi as varPi, a as varA } from "./external.js"
import external, {pi as dPi, a as dA, myFunc} from "./external.js";

console.log(pi, a);
console.log(test);
console.log(varA, varPi);
console.log(external, dA, dPi);
myFunc();