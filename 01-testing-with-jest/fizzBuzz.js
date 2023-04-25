const fizzBuzz = a => {
  const fizz = a % 3 === 0;
  const buzz = a % 5 === 0;
  if(fizz && buzz) {
    return "FizzBuzz";
  } else if(fizz) {
    return "Fizz";
  } else if(buzz) {
    return "Buzz";
  } else {
    return a;
  }
};

module.exports = fizzBuzz;