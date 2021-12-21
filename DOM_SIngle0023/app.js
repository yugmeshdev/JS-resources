//jquery previously used for Dom manipulation

//getElementbyId()

//Get things  from element
console.log(document.getElementById("task-title"));

console.log(document.getElementById("task-title").id);


const taskTitle=document.getElementById('task-title');
//change styling
document.getElementById("task-title").style.background = "#333";

document.getElementById("task-title").style.color = "#fff";

document.getElementById("task-title").style.padding = "5px";

//document.getElementById("task-title").style.display = "none";

//Change content

document.getElementById('task-title').textContent="Task List";
taskTitle.innerText="My Task";

//insert html
taskTitle.innerHTML='<span style="color:red">Heyya</span>';


//Query Selector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));


//if there is more h5 its gonna get first one only
console.log(document.querySelector('h5'));



document.querySelector('li').style.color='red';
//subclass
document.querySelector('ul li').style.color='blue';

document.querySelector('li:last-child').style.color='blue';

document.querySelector('li:nth-child(3)').style.color='yellow';
document.querySelector('li:nth-child(4)').textContent='Hello';
//only gonna do the first
document.querySelector('li:nth-child(odd)').style.background='#ccc';
