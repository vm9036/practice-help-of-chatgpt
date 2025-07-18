const toggle = document.getElementById('pricingToggle');
const prices = document.querySelectorAll('.price');

toggle.addEventListener('change', () => {
  prices.forEach(price => {
    price.textContent = toggle.checked
      ? price.getAttribute('data-year')
      : price.getAttribute('data-month');
  });
});