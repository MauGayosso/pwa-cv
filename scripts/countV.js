let visitors = 0;
const currentHour = new Date()

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();

const currentHourV = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
localStorage.setItem('currentHour', currentHourV);

const savedHour = localStorage.getItem('currentHourV');

const savedHourNumber = parseInt(savedHour);

console.log(savedHourNumber);



if (localStorage.getItem('visitors')) {
    visitors = parseInt(localStorage.getItem('visitors'));
  } else {
    visitors = 0;
  }

visitors++;

localStorage.setItem('visitors', visitors);

const visitorCount = document.getElementById('visitor-count');
const visitorHour = document.getElementById('visitor-hour');
visitorHour.textContent = savedHourNumber;
visitorCount.textContent = visitors;

