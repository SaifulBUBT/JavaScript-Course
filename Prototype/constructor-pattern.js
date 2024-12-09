function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}


const p1 = new Person('Saiful', 'Islam');
console.log(p1.getFullName());



/************* ====== Inheritance ==== ********* */
const obj1 = {
    firstName: 'Alex',
    lastName: 'Bob',
    hasPssport: false,
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const obj2 ={
    country: 'Bangladesh',
    dist: 'Narayangonj',
    address: function (){
        return `${this.dist}, ${this.country}`;
    }
}
Object.setPrototypeOf(obj2, obj1);
console.log(obj2.address());
console.log(obj2.getFullName());
