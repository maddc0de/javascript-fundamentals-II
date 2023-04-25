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

// const prefix_candy = (menu, prefix) => {
//   return menu.map(includes(prefix))
// }

const searchCandies = (prefix, maxPrice) => {
  const filteredArr = candies
                  .filter(candy => candy.name.includes(prefix))
                  .filter(candy => candy.price < maxPrice)
                  .map(candy => candy.name);

  return filteredArr;
};


// console.log(searchCandies('S', 4));

module.exports = searchCandies;