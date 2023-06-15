const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else { 
        return num.toString();
    }
  };
  
//   const fizzbuzzUntil = (num) => {
//     const result = [];
//     for (let i = 1; i <= num; i++) {
//       result.push(fizzBuzz(i));
//     }
//     return result;
//   };
  
  module.exports = fizzBuzz;
//   module.exports = fizzbuzzUntil;