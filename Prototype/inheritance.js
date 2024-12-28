function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype =  {
  eat: function(){
     return `${this.name} is eating`;
  }
}


function Cricketer(name, age, type, country){
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Cricketer.prototype = Object.create(Person.prototype)

Cricketer.prototype.constructor = Cricketer;

// Cricketer.prototype.sleep = function (){
//     return `${this.name} is sleeping`
// }

const taskin = new Cricketer('Taskin', 32, 'Fast Bowler', 'Bnagladesh');
console.log(taskin.eat());
// console.log(taskin.sleep());
