const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

//   > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// The filter and map methods.
// How to access an object property.
// You'll also need to find out how to verify whether a string is the prefix for another string.
// Use the toEqual() Jest matcher.

// Questions
// Write tests for this function in a file searchCandies.test.js. There should be at least 4 tests to reflect the different examples above.
// Implement the function searchCandies and make sure your tests pass.
// Add one test to verify that the search prefix works when given in lowercase too:
// > searchCandies('ma', 10);
// [ 'Mars', 'Maltesers' ]
// Implement that new change and make sure the tests pass.


const searchCandies = (sweetItem, maxPrice) => {
    return candies
    .filter((candy) => candy.name.startsWith(sweetItem) && candy.price < maxPrice)
    .map((candy) => candy.name);
  };

  module.exports = candies;
  module.exports = searchCandies;