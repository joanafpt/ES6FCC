//ES6: Use getters and setters to Control Access to an Object
/*Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

Now create getter and setter in the class, to obtain the temperature in Celsius scale.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale*/

//NOTE: IT PASSES BUT THERE IS A PROBLEM WITH THE TESTS...

function makeClass() {
    "use strict";
    /* Alter code below this line */
  
      class Thermostat {
        constructor(temperature){
          this.temperature = temperature;
          }
          get temp(){
            temperature = C * 9.0 / 5 + 32;
          }
          set temp(celsius){
           celsius =  5/9 * (F - 32);
         }
      }
    /* Alter code above this line */
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C
  console.log(temp)
  