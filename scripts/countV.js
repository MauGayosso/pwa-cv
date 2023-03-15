let visitors = 0;
const currentDate = new Date()

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();

const currentHour = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
localStorage.setItem('currentHour', currentHour);

const savedHour = localStorage.getItem('currentHour');


console.log(savedHour);



if (localStorage.getItem('visitors')) {
    visitors = parseInt(localStorage.getItem('visitors'));
  } else {
    visitors = 0;
  }

visitors++;

localStorage.setItem('visitors', visitors);

const visitorCount = document.getElementById('visitor-count');
const visitorHour = document.getElementById('visitor-hour');
visitorHour.textContent = savedHour;
visitorCount.textContent = visitors;

