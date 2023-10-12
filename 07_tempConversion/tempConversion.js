const convertToCelsius = function(degreesF) {
  let celsius = (degreesF-32) * (5/9);
  var cRounded = Math.round(celsius*10)/10;
  return cRounded;
};

const convertToFahrenheit = function(degreesC) {
  let fahrenheit = (degreesC*(9/5)) + 32;
  var fRounded = Math.round(fahrenheit*10)/10;
  return fRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};