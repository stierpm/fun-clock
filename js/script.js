const monthElement = document.getElementById("month");
const dayElement = document.getElementById("day");
const yearElement = document.getElementById("year");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const suffixElement = document.getElementById("suffix");

let d = new Date();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear();
let hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
hours = hours < 10 ? "0" + hours : hours;
let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
let seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
let suffix = d.getHours() >= 12 ? 'PM' : "AM";

monthElement.innerHTML = month;
dayElement.innerHTML = day;
yearElement.innerHTML = year;
hoursElement.innerHTML = hours;
minutesElement.innerHTML = minutes;
secondsElement.innerHTML = seconds;
suffixElement.innerHTML = suffix;
