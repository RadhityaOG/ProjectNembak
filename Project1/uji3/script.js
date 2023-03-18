const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const jawaban = document.querySelector('#jawaban').value;
  const message = encodeURIComponent(jawaban);
  const url = `https://wa.me/6287877082802?text=Halo%20radhit,%20Jawaban%20aku%20Adalah%20${message}`;
  window.location.href = url;
});
