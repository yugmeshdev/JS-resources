// if(something){
//     do something;
// }
// else{
//     do something else;
// }
let id='100';

//equal to
if(id==100){
    console.log('Correct');
}
else{
    console.log('incorrect')
};


//not equal to
if(id!=101){
    console.log('Correct');
}
else{
    console.log('incorrect')
};


////equal to value and type
if(id===100){
    console.log('Correct');
}
else{
    console.log('incorrect')
};

////equal to value and type
if(id!==100){
    console.log('Correct');
}
else{
    console.log('incorrect')
};

id='100';
if(id){
    console.log(`The id is ${id}`);
}
else{
    console.log('NO ID')
}
//if there is no id define

if(typeof id){
    console.log(`The id is ${id}`);
}
else{
    console.log('NO ID')
}
//if else

const color='blue';
if(color === 'red'){
    console.log('color is red');
}
else if(color==="blue"){
    console.log('color is blue')
}
else{
    console.log("color npt");
}

//logical operators
//AND &&
const name='Steve';
const age=75;
if(age >0 && age<12){
    console.log(`child ${name}`);
}
else if(age>=12 && age<=19){
    console.log
    (`${name} is teen`)
}

else{
    console.log
    (`${name} is adult`)
}

//OR ||
if(age<16 || age>65){
    console.log(`${name} dont race`)
}
else{
    console.log(`${name} race`)
}

//Ternary operator
console.log(id===100?'Correct':'incorrect')

//without braces

if(id == 100)
    console.log('correct')
else
    console.log('incorrect')