let visitors = 0;

if (localStorage.getItem('visitors')) {
    visitors = parseInt(localStorage.getItem('visitors'));
  } else {
    visitors = 0;
  }

visitors++;

localStorage.setItem('visitors', visitors);

console.log('Número de visitantes: ' + visitors);

