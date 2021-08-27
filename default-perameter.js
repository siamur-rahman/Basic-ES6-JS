
function add(num1, num2) {
   const total = num1 + num2;
   return total;
}
const result = add(15, 17);
console.log(result);
/*
function add(num1, num2) {
   const total = num1 + num2;
   return total;
}
const result = add(15, );
console.log(result);*/

/*
function add(num1, num2) {
   console.log(num1, num2);
   const total = num1 + num2;
   return total;
}
const result = add(15);
console.log(result);*/


//option-1.............................
function add2(num1, num2) {
   // console.log(num1, num2);
   if (num2 == undefined) {
      num2 = 0;
   }
   const total2 = num1 + num2;
   return total2;
}
const result2 = add2(15);
console.log(result2);



//option-2.................................
function add3(num1, num2) {

   num2 = num2 || 0;

   const total = num1 + num2;
   return total;
}
const result3 = add3(15);
console.log(result3);

/*option-3 ES-6..........................
function add(num1, num2 = 0) { //ekhane default parameter use kora hoiche

   // num2 = num2 || 0;

   const total = num1 + num2;
   return total;
}
const result = add(15);
console.log(result);


function add(num1, num2 = 0) {

   // num2 = num2 || 0;

   const total = num1 + num2;
   return total;
}
const result = add(15, 50);
console.log(result);
*/


function add4(num1, num2 = 33) {

   // num2 = num2 || 0;

   const total = num1 + num2;
   return total;
}
const result4 = add4(15,);
console.log(result4);



function fullName(first, last = 'chowdhury') {
   const name = first + ' ' + last;

   return name;

}
const names = fullName('siam');
console.log(names);

function fullName(first, last = 'chowdhury') {
   const name = first + ' ' + last;

   return name;

}
const names2 = fullName('siam', 'rahman');
console.log(names2);