//ES6: Set Default Parameters for Your Functions

//Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

const increment = (function() {
    "use strict";
    return function increment(number, value=1) { //value=1 defines that value is = 1 if no other value is specified (default)
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6
  
