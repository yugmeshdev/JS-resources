let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

//GET child nodes
//returns nodes list
val = list.childNodes; //it contains linebreak as text
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType; //gives number as below

// 1.Element
// 2.Attribute
// 3.Text node
// 8.comment
// 9.Document iteself
// 10.doctype

//get childrent element nodes(no linebreak as text)
//returns HTML collection
val = list.children;
val = list.children[0];
list.children[1].textContent = "helo";
val = list.children[3].children[0];

//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;

val = listItem.parentElement;

val = listItem.parentNode.parentNode;

//get next siblings
val = listItem.nextSibling;
val=listItem.nextElementSibling.nextElementSibling;

//get prev siblings

val=listItem.previousElementSibling;


console.log(val);
