const rates = {
    usd: 0.01149,
    eur: 0.01087,
    jpy: 0.100
  };
  
  function customRound(number, digits) {
    const power = 10 ** digits;
    return Math.round(number * power) / power;
  }
  
  const amountInput = document.getElementById('amount');
  const usdBox = document.getElementById('usd');
  const eurBox = document.getElementById('eur');
  const jpyBox = document.getElementById('jpy');
  
  function updateValues() {
    const amount = parseFloat(amountInput.value);
  
    if (!amount) {
      usdBox.style.display = 'none';
      eurBox.style.display = 'none';
      jpyBox.style.display = 'none';
    } else {
      usdBox.style.display = 'flex';
      eurBox.style.display = 'flex';
      jpyBox.style.display = 'flex';
  
      usdBox.querySelector('.value').textContent = customRound(amount * rates.usd, 2);
      eurBox.querySelector('.value').textContent = customRound(amount * rates.eur, 2);
      jpyBox.querySelector('.value').textContent = customRound(amount * rates.jpy, 2);
    }
  }
  
  amountInput.addEventListener('input', updateValues);