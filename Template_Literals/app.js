const nam = "John";
const age = 30;
const job = "best jpb in the woorld";
const city = "Miami";

let html;
//without template string(es5)

html =
  "<ul><li>Name: " +
  nam +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>city: " +
  city +
  "</li></ul>";

//with template strings/literals(es6)
function hello(){
    return 'Hello';

}


html = `<ul>
    <li>Name:${nam}</li>
    <li>Age:${age}</li>
    <li>Job:${job}</li>
    <li>City:${city}</li>
    
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age>30?'Over30':'Under 30'} 
    <ul>
`;

document.body.innerHTML = html;
