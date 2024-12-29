const person = {
    name: 'John Doe',
    getName: function (){
        console.log(this.name);
        
    }
}

// setTimeout(function(){
//     person.getName()
// }, 1000)

setTimeout(person.getName.bind(person), 1000);


// Using bind() to borrow methods from a different object

const runner = {
    name: 'Runner',
    run: function(speed){
        console.log(this.name + ' runs at '+ speed + ' mph');
    }
}

// runner.run(20)

const flyer = {
    name: 'Flyer',
    fly: function(speed){
        console.log(this.name + ' flies at '+ speed + ' mph');
    }
}
// flyer.fly(30)
const run = runner.run.bind(flyer)
run(40)

const fly = flyer.fly.bind(runner, 50)
fly()