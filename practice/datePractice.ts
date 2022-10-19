const date: Date = new Date();

const year = date.getFullYear();
const month: number = date.getMonth() + 1;
const day = date.getDay();
const hour = date.getHours();
const min = date.getMinutes();
const getDate = date.getDate();

console.log("year :" + year);
console.log("month :" + month);
console.log("day :" + day);
console.log("hour :" + hour);
console.log("minutes :" + min);
console.log("getDate :" + getDate);
console.log(date);

console.log("get time : " + date.getTime());
// console.log(date.toTimeString());
