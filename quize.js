const name = 'Hero';
// const greetings = 'Welcome Home!' + ' ' + name;
const greetings = `Welcome Home! ${name}`;

// console.log(greetings);

function getSum(a, b = 9) { return a + b; } console.log(getSum(2, 7));

const y = x => x * x; const x = y(5);
console.log(x);

// const division = (num1, num2) => console.log(num1 / num2);
// const call = division(4, 2);
// console.log(call);
const numbers = [23, 65, 99, 21, 34];
const max = Math.max(...[23, 99, 65]);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

const cars = ['toyota', 'honda', 'mercedes'];
const newCars = [...cars, 'ferrari'];
console.log(newCars);


