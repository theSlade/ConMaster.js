// Math Functions
function add(number1, number2) {
  let count = number1 + number2;
  return console.log(`${number1} + ${number2} = ${count}`);
}

function subtract(number1, number2) {
  let count = number1 - number2;
  return console.log(`${number1} - ${number2} =  ${count}`);
}

module.exports = {
  addNumber: add,
  subtractNumber: subtract,
};
