const firstName = "Yugmesh";
const lastName = "Sonawane";
let val = firstName + lastName;
const str='Hello there my name is yugmesh';
const  tags='web design,web devlopment, apis';
//Concatention

val = firstName + " " + lastName;

//Append
val = "Yugmesh";
val += "Sonawane";
const age = 23;
val = "Hello my name is " + firstName + " and I am " + age;

//Escaping

val = "That's awesome,I can't wait";

//Length
val = firstName.length;

//concat

val = firstName.concat("", lastName);

//change case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[1];

//indexOf

val = firstName.indexOf("g");
val = firstName.lastIndexOf("g");

//charAt
val = firstName.charAt("2");

//Get last char

val = firstName.charAt(firstName.length - 1);


//substring

val=firstName.substring(0,2);


//slice
val=firstName.slice(0,3);

val=firstName.slice(-3);


//split
val=str.split(' ');
val=tags.split(',');



//replace
val=str.replace('yugmesh','sonawane');

// includes

val=str.includes('Hello');
console.log(val);