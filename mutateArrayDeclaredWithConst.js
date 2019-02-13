//ES6: Mutate an Array Declared with const

//An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

  s [0] = 2; //assigning new values to each element at a time
  s [1] = 5;
  s [2] = 7;

  console.log(s);

  // change code above this line
}
editInPlace();