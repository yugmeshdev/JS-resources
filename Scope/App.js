//Global scope
var a=1;
let b=2;

const c=3;

// function test(){
    
//     var a=4;
//     let b=5;
//     const c=6;
//     console.log('Function  scope',a,b,c);

// }
// test();

// if(true){
//     //block scope
//     var a=4;
//     let b=5;
//     const c=6;
    
// console.log('If scope',a,b,c);
    
// }
// for(var a=0;a<10;a++){
//     console.log(`Loop ${a}`)
// }
console.log('Global scope',a,b,c);

//var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.
//The main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope. So we can say that var is rather a keyword which defines a variable globally regardless of block scope.