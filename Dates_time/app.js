let val;
const today = new Date();
let birthDay = new Date("9-10-2912 11:25:00");

birthDay = new Date("September 10 1981");
birthDay = new Date("9/10/1981");

val = today.getMonth(); //gives 1 month short because 0 based
//val=today.toString();

val = today.getDay();

val=today.getFullYear();
val=today.getHours();
val=today.getMinutes();

//TIMESTAM:seconds pass from 1970
val=today.getTime();

birthDay.setMonth(2);
birthDay.setDate(12);
birthDay.setFullYear(1985);
console.log(birthDay)
console.log(val);
