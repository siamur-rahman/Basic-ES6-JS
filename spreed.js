const numbers = [23, 65, 99, 21, 34];
console.log(numbers);
console.log(...numbers);

const max = Math.max(23, 99, 65);
const min = Math.min(23, 99, 65);

console.log(max, min);

const numbers1 = [23, 65, 99, 21, 34];
const max1 = Math.max(23, 99, 65);
const maxInArray1 = Math.max(numbers1);
console.log(max1, maxInArray1);

const max2 = Math.max([23, 99, 65]);
const maxInArray2 = Math.max(...numbers1);
console.log(max2, maxInArray2);

const numbers3 = [23, 65, 99, 21, 34];
const numbers4 = numbers3;
numbers3.push(55);
console.log(numbers3);
console.log(numbers4);


/*
const numbers = [23, 65, 99, 21, 34];
const numbers2 = [...numbers];
numbers.push(55);
console.log(numbers);
console.log(numbers2);


f

const numbers = [23, 65, 99, 21, 34];
const numbers2 = [22, ...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2)*/

