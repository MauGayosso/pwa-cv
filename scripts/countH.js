const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();


if (localStorage.getItem('visitors-date')) {
    visitors = localStorage.getItem('visitors-date');
  } else {
    visitors = " ";
  }



localStorage.setItem('visitors-date', visitors);

const visitorCount = document.getElementById('visitor-date');
visitorCount.textContent = visitors;