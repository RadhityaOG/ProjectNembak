const form = document.querySelector('form');
const jawabanInput = document.querySelector('#jawaban');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const jawaban = jawabanInput.value.toLowerCase().trim();

  if (jawaban === 'iya') {
    window.location.href = 'jawaban.html?jawaban=iya';
  } else if (jawaban === 'tidak') {
    window.location.href = 'jawaban.html?jawaban=tidak';
  } else {
    window.location.href = 'jawaban.html?jawaban=other';
  }
});
