import "./node_modules/jquery/dist/jquery.min.js";
import './node_modules/slick-carousel/slick/slick.js';

// console.log('slick', slick);
// console.log('work');

$('.slider__center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
});

const contactUs = document.querySelector('.contactus');
const modalForm = document.querySelector('.modal__form');
const form = modalForm.querySelector('.modal');

// Show modal
contactUs.addEventListener('click', () => {
  modalForm.classList.add('show');
});

// Close modal
modalForm.addEventListener('click', (e) => {
  if(
    e.currentTarget === e.target ||
    e.target.dataset.action === 'CLOSE'
  ) {
    modalForm.classList.remove('show');
  } 
});


// Submitting form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // console.log('e.target.elements.name', e.target.elements.name)
  const elements = e.target.elements;
  const submData = {
    name: elements.name.value,
    email: elements.email.value,
    phone: elements.phone.value,
    message: elements.message.value,
  }
  console.log('submData', submData);
});
