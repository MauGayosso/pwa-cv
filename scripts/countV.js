let visitors = 0;
const currentHour = new Date()

localStorage.setItem('currentHour', currentHour);

const savedHour = localStorage.getItem('currentHour');

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

