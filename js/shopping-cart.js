const checkoutBtn = document.querySelector('.summary__checkout');
const modal = document.getElementById('checkoutModal');
const closeModalBtn = document.getElementById('closeModal');

checkoutBtn.addEventListener('click', () => {
  modal.classList.add('modal--active');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('modal--active');
});

modal.querySelector('.modal__overlay').addEventListener('click', () => {
  modal.classList.remove('modal--active');
});
