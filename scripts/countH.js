
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();

const currentDateTimeString = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

localStorage.setItem('currentDateTime', currentDateTimeString);


const storedDateTimeString = localStorage.getItem('currentDateTime');

const visitorDate = document.getElementById('visitor-date');
visitorDate.textContent = storedDateTimeString;

const storedDateTime = new Date(storedDateTimeString);
console.log(storedDateTime);
console.log(storedDateTimeString);