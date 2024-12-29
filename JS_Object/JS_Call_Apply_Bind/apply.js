// 1) Simple JavaScript apply() method example

const person = {
    firstName: 'Jhon',
    lastName: 'Doe'
}
 
function greet(greeting, message){
    return `${greeting} ${this.firstName}, ${message}`;
}

let result = greet.apply(person, ['Hello', 'How are you?'])
console.log(result);


// 2) Function borrowing

const computer = {
    name: 'MacBook',
    isOn: false,

    turnOn(){
        this.isOn = true;
        return `The ${this.name} is on`;
    },
    turnOff(){
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
}

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
}
console.log(computer.turnOn());

let res = computer.turnOn.apply(server)
console.log(res);
