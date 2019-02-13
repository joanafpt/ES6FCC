//ES6: Write Arrow Functions with Parameters
//Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  // test your code
  console.log(myConcat([1, 2], [3, 4, 5]));
  
  