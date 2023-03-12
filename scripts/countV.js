let visitors = 0;

if (sessionStorage.getItem('visitors')) {
    visitors = parseInt(sessionStorage.getItem('visitors'));
  } else {
    visitors = 0;
  }

visitors++;

localStorage.setItem('visitors', visitors);

const visitorCount = document.getElementById('visitor-count');

visitorCount.textContent = visitors;

