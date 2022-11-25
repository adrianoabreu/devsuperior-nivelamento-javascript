console.log("Um String é um literal que fica entre aspas duplas");
console.log('Um String é um literal que fica entre aspas simples');
console.log(`Um String é um literal que fica entre craze`);

console.log("Concatenação e interpolação:");
const num = 14.5;
console.log("O valor do produto é: " + num);
console.log('O valor do produto é: ' + num);
console.log(`O valor do produto é: ${num}`);


console.log("Conversão entre number e string");

const str1 = num.toString();
console.log(`Tipo de ${str1}: ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`Tipo de ${str2}: ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${typeof num1}`);

const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2}: ${typeof num2}`);

const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${typeof num3}`);

const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);

const str = "Adriano Abreu ";

console.log(`const str = "Adriano Abreu"`);

const resultado = str.toLowerCase();
console.log(resultado);

console.log(`toLowerCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);

console.log(`charAt: ${str.charAt(3)}`);

console.log(`replace: ${str.replace("A", "$")}`);
console.log(`replace: ${str.replace(/A/g, "$")}`);

console.log(`length: ${str.length}`);

console.log(`indexOf: ${str.indexOf("A")}`);

console.log(`lastIndexOf: ${str.lastIndexOf("A")}`);

console.log(`substring: ${str.substring(3,9)}`);

const data = "14/10/2022";

const mes = data.substring(3,5);
console.log(mes);

const mes2 = Number(data.substring(3,5));
console.log(mes2);


const valor = 200.99;

const novoValor = valor.toString().replace(".",",");

console.log(novoValor);


console.log(`trim: ${str.trim()}`);
