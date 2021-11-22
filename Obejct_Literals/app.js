const person = {
  firstName: "steve",
  lastName: "Smoth",
  age: 31,
  email: "yug@bill",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 2017 - this.age;
  },
};
let val = person;
val = person.firstName;
console.log(val);

//get specific  vals
val = person["firstName"];
val = person.address.state;
val = person.getBirthYear();

console.log(val);
const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 30 },
];
for(let i=0;i<people.length;i++){
    console.log(people[i]) //.name to get only names
}
