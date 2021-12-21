//document.getElementsByClassName

const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[3].textContent = "Hello";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");
console.log(listItems);

///document.getElementsByTagNamr

let lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "red";
// items[3].textContent='Hello';

//covert Html collection into array
lis = Array.from(lis);
lis.reverse();

lis.forEach((li,index)=>{
    console.log(li.className);
    li.textContent=`${index}:Hello`
})
console.log(lis);


//document.querySelectorAll
//NodeList
const itemss=document.querySelectorAll('ul.collection li.collection-item'); //gives same o/p as li

//do not have to convert it into array
itemss.forEach((li,index)=>{
    console.log(li.className);
    li.textContent=`${index}:Hello`
})

const liOdd=document.querySelectorAll('li:nth-child(odd)');
const liEven=document.querySelectorAll('li:nth-child(even)');
liOdd.forEach((lim,index)=>{
    lim.style.background="#ccc";
})
for(let i=0;i<liEven.length;i++){
    liEven[i].style.background="black"
}

console.log(itemss);
