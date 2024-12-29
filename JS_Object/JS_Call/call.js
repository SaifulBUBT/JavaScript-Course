const messenger = {
    greetings: 'Hello'
}

function say(name){
    console.log(this.greetings +" "+ name);
    
}

say.call(messenger, 'Alex');


// Using the JavaScript call() method to chain constructors for an object

function Box(height, width){
    this.height = height;
    this.width = width;
}

function Widget(height, width, color){
    Box.call(this, height, width);
    this.color = color;
}

const widget = new Widget(200, 100, 'Red');
console.log(widget);


// Using the JavaScript call() method for function borrowing

const car = {
    name: 'car',
    start(){
        console.log('Start the '+ this.name);    
    },

    speedUp(){
        console.log('Speed up the '+ this.name);    
    },
    stop(){
        console.log('Stop the '+ this.name);    
    }
}

const aircraft = {
    name: 'aircraft',
    fly(){
        console.log('Fly the '+ this.name);
        
    }
}

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly()



/**************** */

const person1 = {
    firstName: 'John',
    lastName: 'Smith'
}
const person2 = {
    firstName: 'Alex',
    lastName: 'Smith'
}

function getFullName(greeting){
    console.log(greeting+" "+ this.firstName, this.lastName);
    
}
getFullName.call(person1, 'Hi');
getFullName.call(person2, 'Hello');