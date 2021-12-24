//REPLACE ELEMENTS

//CREATE ELEMENT
const newHeading=document.createElement('h2');

//add id
newHeading.id='task-title';

//new text  node
newHeading.appendChild(document.createTextNode('Task List'));

//get the old heading
const oldHeading=document.getElementById('task-title');

//parent 
const cardAction=document.querySelector('.card-action');

//Replace child
cardAction.replaceChild(newHeading,oldHeading);


//console.log(newHeading);

//remove element

const lis=document.querySelectorAll('li');
const list=document.querySelector('ul');

//remove list item
lis[0].remove();


//remove child element
list.removeChild(lis[3]);

//classes and attr
const firstLi=document.querySelector('li:first-child');
console.log(firstLi.children[0]);

const link=firstLi.children[0];
let val;

val=link.className;
val=link.classList; //gives dom token list
val=link.classList[0];
link.classList.add('test');
link.classList.remove('test');

val=link;

//attributes
val=link.getAttribute('href');
val=link.setAttribute('href','http://google.com');
link.setAttribute('title','Google')
val=link.hasAttribute('title')
link.removeAttribute('title')
val=link; 

console.log(val);

