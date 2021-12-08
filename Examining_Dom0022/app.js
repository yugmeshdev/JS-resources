let val;

val = document;
val = document.all;
val = document.all[2];

val = document.all.length;
val = document.head;
val=document.body;
val=document.doctype;
val=document.domain;
val=document.URL;
val=document.characterSet;
val=document.contentType;



val=document.forms;

val=document.forms[0].id;

val=document.forms[0].method;

val=document.links;

val=document.links[0].className;

val=document.links[0].classList;
val=document.images;
val=document.scripts;
val=document.scripts[2].getAttribute('src');

let scripts=document.scripts;

//scripts arent array so we have to make it
//The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
let scriptsArr=Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(scripts);
})

console.log(val);
