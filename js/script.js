const monthElement = document.getElementById("month");
const dayElement = document.getElementById("day");
const yearElement = document.getElementById("year");

let d = new Date();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear();

monthElement.innerHTML = month;
dayElement.innerHTML = day;
yearElement.innerHTML = year;
