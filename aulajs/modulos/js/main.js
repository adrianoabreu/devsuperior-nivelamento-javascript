//import * as nb from './numbers.js';
import {sum,round} from './numbers.js';
import Product from './product.js';

console.log(sum(3,4));
console.log(round(3.1234,2));

const obj = new Product("Computador", 800.0, 10);

console.log(obj);
