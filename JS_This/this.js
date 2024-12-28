// method -> obj
// function -> global, window

const player = {
    name: 'Messi',
    play: function(){
        console.log(this)
    }
}

player.sleep = function(){
    console.log(this)
}

//player.sleep()


/***************** */
function playerName (){
    console.log(this)
}
playerName()


/***************** */

function CreateUser(name){
    this.name = name;
    console.log(this);
    
}
const user = new CreateUser('Alex')


/******************* */
const video ={
    title: 'a',
    tags: ['a','b','c'],
    showTags: function(){
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
            
        },this)
        
    },
    displayTags: function(){
        console.log(this.tags);
        
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
            
        })// use arrow function inside forEach funciton
        
    }

}

video.showTags();
video.displayTags();