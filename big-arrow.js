// double parameter......
const add = (num1, num2) => num1 + num2;
const sum = add(33, 44);
console.log(sum);

// thripple parameter...........
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);
console.log(result);

// single parameter...........
const tenTimes = (num) => num * 10;
const output = tenTimes(17);
console.log(output);

// single parameter (without bracket)......///Parameter 1 er beshi hole bracket lagbe ekta hole na dileo chole///
const fiveTimes = num => num * 5;
const value = fiveTimes(17);
console.log(value);

// no parameter (must need bracket)....////parameter na thakle obossoi bracket dite hobe////
const getName = () => 'Brandon Sam';
const name = getName();
console.log(name);

// multiline with parameter...(must return lora lagbe,second bracket er vitor sob likha lagbe)....
const doMath = (x, y) => {
   const sum = x + y;
   const diff = x - y;
   const result = sum * diff;
   const output = result * 5;
   return output;
}
const total = doMath(12, 5);
console.log(total);

// document.getElementById('my-btn').addEventListener(EVENT => {

// })