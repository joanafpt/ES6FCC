//ES6: Use the Spread Operator to Evaluate Arrays In-Place

//Copy all contents of arr1 into another array arr2 using the spread operator.


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);