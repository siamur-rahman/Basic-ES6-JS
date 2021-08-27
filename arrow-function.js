// function declare AGER NIOM......
function add(num1, num2) {
   const sum = num1 + num2;
   return sum;
}
const sum = add(15, 17);
console.log(sum);

// function declare PEKE GELAM TAI NEW NIOM.....
function add(num1, num2) {
   return num1 + num2;
}
const sum1 = add(15, 17);
console.log(sum1);

//functio declaration.................
function add(num1, num2) {
   return num1 + num2;
}
const sum0 = add(28, 20);
console.log(sum0);

// function expression..................... 
const add2 = function add2(num1, num2) {
   return num1 + num2;
}
const sum2 = add2(15, 38);
console.log(sum2);

// function expression (anonymous)...........
const add3 = function (num1, num2) {
   return num1 + num2;
}
const sum3 = add3(15, 38);
console.log(sum3);

// Arrow function............................
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(15, 17);
console.log(sum4);


/*
// document.getElementById('my-btn').onclick=function handkeEvent (){}

//doument.getElementById('by-btn').addEventListener(event=>{

})*/


//arrow function likhte gele 1)variable declare korba  2)parameter thakbe 3)arrow thakbe 4)simple calculation 
//5)kothin calculation multiline hole third bracket er vitor likhte hoi 6)tarpor zodi output lage output k return lorte hobe....(simple calculation {single line calculation hole} hole return kora lagbe na karon oita emni return hoye zabe)