// app.js
const denom = document.getElementById('denom');
const qty = document.getElementById('qty');
const sheet = document.getElementById('sheet');
const generate = document.getElementById('generate');
const printBtn = document.getElementById('print');

function makeToken(value){
  const div = document.createElement('div');
  div.className = 'token';
  div.innerHTML = `
    <div class="s">PSYNVIS</div>
    <div class="v">${value}</div>
    <div class="s">moneda de juego</div>
  `;
  return div;
}

generate?.addEventListener('click', () => {
  sheet.innerHTML = '';
  const n = Math.max(1, Math.min(200, parseInt(qty.value || '1', 10)));
  const v = denom.value;

  for(let i=0;i<n;i++){
    sheet.appendChild(makeToken(v));
  }
  printBtn.disabled = false;
});

printBtn?.addEventListener('click', () => window.print());
