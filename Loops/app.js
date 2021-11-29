// //for loop
// for(let i=0;i<=10;i++){
//     //console.log('Number '+i)
//     if(i===2){
//         console.log('2 is my fav');
//         continue; //stop the loop here and get  to  the  next iteration

//     }

//     if(i==5){
//         console.log('Stop  the loop');
//         break;
//     }
//     console.log('Number '+i)
// }


//While loop
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }


//DO WHILE
// let i=100;
// do{
//     console.log('Number '+i);
//     i++;
// }while(i<10)


//Loop through array

const cars=['Ford','Chevy','Honda','Toyota'];
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }


// //foreach
// cars.forEach(function(car,index,array){
//     console.log(`${index}:${car}`)
//     console.log(array)
// })

//Map
// const users=[{id:1,name:'John'},
//     {id:2,name:'Sara'},
//     {id:3,name:'Karen'}

// ]
// const ids=users.map(function(user){
//     return user.id;
// });
// console.log(ids)

//For in loop
const user={
    firstName:'John',
    lastName:'doe',
    age:40
}
for(let x in user){
    console.log(`${x}:${user[x]}`)
}