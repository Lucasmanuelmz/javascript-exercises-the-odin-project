const convertToCelsius = function(F) {
  //My solutions:
    let C = (F - 32) / 1.8;

    if(C === 0) {
      return C;
    } else {
    return Number(C.toFixed(1));
  }
};

const convertToFahrenheit = function(C) {
  //My solutions:
  let F = C * 1.8 + 32;

  if(F === 0) { 
    return F
    } else {

  return Number(F.toFixed(1));
}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
