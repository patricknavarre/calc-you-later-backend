/******************
 * YOUR CODE HERE *
 ******************/
const calculate = function(num1, num2, calculation) {
  // Number function converts the object argument to a number that represents the object's value.  
  num1 = Number(num1);
  num2 = Number(num2);

  // assigning multiple 'string' tasks to each calculation
  const addition = calculation === '+' || calculation === 'plus' || calculation === 'added to';
  const subtraction = calculation === '-' || calculation === 'minus' || calculation === 'subtracted from';
  const multiplication = calculation.toLowerCase() === 'x' || calculation === 'times' || calculation === 'multiplied by';
  const division = calculation === '/' || calculation === 'divided by';
  const modulus = calculation === '%' || calculation === 'modulus' || calculation === 'mod';
// if/else through all possible calculations until 'Sorry...' which will close the function.
  if (addition) {
    return num1 + num2;
  } else if (subtraction) {
    return num1 - num2;
  } else if (multiplication) {
    return num1 * num2;
  } else if (division) {
    return num1 / num2;
  } else if (modulus) {
    return num1 % num2;
  } else {
    return `Sorry, that's not a mathematical operation!`
  }
}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;