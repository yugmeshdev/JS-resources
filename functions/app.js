//functions declaration
function greet(firstName='John',lastName='doe'){
    //es5 if function call with undefined
    //if(typeof firstName='undefined'){
    //     firstName='John';
    // } Same for lastName

    //console.log('Hello');
    return `Hello ${firstName}`+" "+lastName;
}
//console.log(greet('Steve','Smith'));

//function Expression

const square=function(x=3){
    return x*x;

};

//console.log(square(8))

//Immediately invokable func expressions IIFEs

// (
//     function(){
//         console.log('IIFE Ran')
//     }
// )()

// (
//     function(name){
//         console.log('IIFE Ran.. '+name)
//     }
// )('Brad')

//PROPERTY METHODS
const todo={
    add:function(){
        console.log('Add todo')
    },
    edit:function(id){
        console.log(`edit todo ${id}`)
    }
}
todo.delete=function(){
    console.log('Delete todo')
}
todo.add();
todo.edit(22);
todo.delete();