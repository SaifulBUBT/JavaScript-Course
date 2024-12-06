function User(name){
    this.name = name;
}

User.prototype.greet = function(){
    return `hello ${this.name}`;
}

const user1 = new User('Saiful');
//console.log(user1);

/************* */
function CreateUser (name, price){
    this.name = name;
    this.price = price;
}

CreateUser.prototype.printPrice = function (){
    console.log(this.name+ " Price is: "+this.price);
    
}

const chai = new CreateUser('chai', 20);
// chai.printPrice()
const tea = new CreateUser('tea', 240);
// tea.printPrice();


/******************** */

const heros = ['Hulk','Superman', 'Spiderman'];

const heroPower = {
    hulk: 'Body transfrom',
    superman: 'Speed',
    spiderman: 'Sling'
}

Object.prototype.sayHi = function (){
    console.log('Hello everyone!');
    
}

// heros.sayHi();
// heroPower.sayHi()



/************** Inheritance  ************* */

const PS = {
    name: "saiful",
    email: "s.saifulbubt@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// console.log(TASupport.isAvailable);


Teacher.__proto__ = PS; //by this Teacher can access all the property of PS object.

console.log(Teacher.email);


//Modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher); //TeachingSupport object can access all the property of Teacher Object
console.log(TeachingSupport.isAvailable);
console.log(TeachingSupport.makeVideos);


//********** */
String.prototype.trueLength = function (){
    console.log(`${this}`);

    console.log(`True length is: ${this.trim().length}`);
    
}
let name = "saiful  islam    ";
name.trueLength();
