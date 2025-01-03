// class Person {
//     constructor(name){
//         this.name = name;
//     }
// }
// let person = new Person('John');
// console.log(person.name);
// Sometimes, you don’t want the name property to be accessed directly like this:


class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        newName = newName.trim();
        if(newName === ''){
            throw 'The name can not be empty';
        }
        this._name = newName;
    }
}

let person = new Person('John');
let name = person.name
console.log(name);

person.name = 'Alex';
console.log(person.name);



/******************* */

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password;
    }
    set password(value){
        this._password = value;
    }
}

const user = new User('bob@gmail.com', 'Bob123');
console.log(user.email);

user.password = 90987;
console.log(user.password);

