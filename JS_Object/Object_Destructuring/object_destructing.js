const person = {
    firstName : 'John',
    lastName: 'Doe',
    middleName: 'Smith',
    currentAge: 28
}

let {firstName, middleName ='Alex', lastName, currentAge: age=20} = person;
console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(age);


// Nested object destructuring

const employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
}

let {id, name:{firstName:first, lastName:last}}= employee;
console.log(id);
console.log(first);


// Destructuring function arguments

const player = {
    name:'Martin',
    country: 'New Zealand',
    role: 'Batsman'
}

// function display(player){
//     console.log(`${player.name} ${player.country} ${player.role}`);
    
// }

function display({name, country, role}){
    console.log(`${name} ${country} ${role}`);
    
}

display(player);