// 1) Basic Array reduce() method example

const numbers = [1, 2, 3,4,5];

const total = numbers.reduce(function(acc, currentValue){
    return acc + currentValue;
})
console.log(total);


// function reduceArr(accumulator, currentItem){
//   return accumulator + currentItem;
// }
// const sum = numbers.reduce(reduceArr, 0);
// console.log(sum);


// 2) Using reduce() method with an initial value

const cart = [
    {
      product: 'phone',
      qty: 1,
      price: 500,
    },
    {
      product: 'Screen Protector',
      qty: 1,
      price: 100,
    },
    {
      product: 'Memory Card',
      qty: 2,
      price: 20,
    },
];

function reducer(acc, currentItem){
  return acc + (currentItem.qty * currentItem.price);
}
const cartTotal = cart.reduce(reducer, 0);
console.log(cartTotal);
