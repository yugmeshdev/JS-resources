//Create some arrays

const numbers=[43,56,33,23,44,35,6];
const number2=new Array(22,45,33,76,44);
const fruit=['Apple','Banana','orange','Pear'];
const mixed=[22,'Hello',true,undefined,null,{a:1,b:1},new Date()];

console.log(mixed);

let val;

//Array Length

val=numbers.length;

//check if is array

val=Array.isArray(numbers);

//get single value

val=numbers[2];
val=numbers[0];

//inserting
numbers[2]=100;


//find index of value

val=numbers.indexOf(100);

// //mutating array

// numbers.push(250);
// //add on front
// numbers.unshift(120);
 
// //take off  from end
// numbers.pop();
// //take off from front
// numbers.shift();


// //splice values

// numbers.splice(1,3);

// //Reverse
// numbers.reverse();

//concatnate array

val=numbers.concat(number2);

//sort

val=fruit.sort();
val=numbers.sort();

//use the compare function
val=numbers.sort(function(x,y){
    return x-y;
});


//reverse sort
val=numbers.sort(function(x,y){
    return y-x;
});

//find
function under50(num){
    return num<50;
}
val=numbers.find(under50);
console.log(numbers);
console.log(val);