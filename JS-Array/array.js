const salad = ['tomato','carot', 'cucumber', 'chili','avocado','lempon'];
const newSalad = new Array('tomato','carot', 'cucumber', 'chili')

console.log(salad===newSalad);


const ssd = new Array(2);
// console.log(ssd);

const saladDeleted = salad.splice(1,0,'brockly');
console.log(salad)
// console.log(saladDeleted)


let languages = ['C', 'C++', 'Java', 'JavaScript'];
let updateLan = languages.splice(1,2,'Python','Go','Swift');

console.log(languages);
