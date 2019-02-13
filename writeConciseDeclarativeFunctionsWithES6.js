//ES6: Write Concise Declarative Functions with ES6

//Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

// change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);