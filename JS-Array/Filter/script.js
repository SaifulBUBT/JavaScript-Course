// 1) Basic JavaScript array filter() example
const numbers = [1,3,2,7];
const result = numbers.filter(function(n){
    return n>2;
});

console.log(result);

// 2) Using the filter() method with an array objects
const cities = [
    { name: 'Los Angeles', population: 3_792_621 },
    { name: 'New York', population: 8_175_133 },
    { name: 'Chicago', population: 2_695_598 },
    { name: 'Houston', population: 2_099_451 },
    { name: 'Philadelphia', population: 1_526_006 },
];

const bigCities = cities
.filter((city) => {
    return city.population > 3000000;
})
.map(city => city.name)
console.log(bigCities);


// 4) Using the thisArg argument

function isInRange(value){
    if(typeof value !== 'number'){
        return false;
    }  
    return value >= this.lower && value <= this.upper;
}

const range = {
    lower: 1,
    upper: 10
}

let data = [10, 20, '30', 1, 5, 'JS', undefined];
const results = data.filter(isInRange, range)

console.log(results);
