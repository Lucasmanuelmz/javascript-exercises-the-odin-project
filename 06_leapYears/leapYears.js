const leapYears = function( year) {
    //My solutions:
   if(!Number.isInteger(year)) {
   return "Ano Inválido!"
   } else {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
   }
    
};

// Do not edit below this line
module.exports = leapYears;
