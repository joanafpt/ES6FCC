//ES6: Create Strings using Template Literals

//Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.

//Note: FCC won't accept this solution, although the result is correct

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    // change code below this line
    const resultDisplayArray = [`<li class="text-warning"> ${result.failure[0]} </li>`,
  `<li class="text-warning"> ${result.failure[1]} </li>`,
  `<li class="text-warning"> ${result.failure[2]} </li>`];
  
    // change code above this line
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`, 
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);
  console.log(resultDisplayArray);