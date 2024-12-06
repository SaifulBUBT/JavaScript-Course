// Modifying array elements

const numbers = [1, 2, 3,10];

numbers.forEach((num, index, array) => {
    array[index] = num*2;
    
})

console.log(numbers);
