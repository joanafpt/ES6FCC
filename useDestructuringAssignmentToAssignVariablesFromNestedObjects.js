//ES6: Use Destructuring Assignment to Assign Variables from Nested Objects

//Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const  {tomorrow : {max : maxOfTomorrow}} = forecast; // change this line
    // change code above this line
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6