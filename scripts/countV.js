let visitors = 0;

if (localStorage.getItem('visitors')) {
  visitors = parseInt(localStorage.getItem('visitors'));
} else {
  visitors = 0;
}

const visitorCount = document.getElementById('visitor-count');
visitorCount.textContent = visitors;
    