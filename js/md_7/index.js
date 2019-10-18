console.log('work');

const body = document.body;
const main = document.querySelector('main');
const firstTitle = main
  .querySelector('.first__title');
const titlesArr = main
  .querySelectorAll('[class*="title"]');
const contactUL = document
  .querySelector('#contacts');

// const h1 = document.querySelector('#first');
const h1 = document.getElementById('first');

console.log('body', body);

console.log('main', main);

console.log('firstTitle', firstTitle);

console.log('titlesArr', titlesArr);

titlesArr.forEach(el => {
  el.textContent = "+++   " + el.textContent + "   +++" ;  
});

console.log('h1', h1);

const contacts = ['+38 099 999 99 99', '+38 099 999 91 91'];

const renderContacts = (arr) => {
  const arrLI = [];
  arr.forEach(el => {
    const li = document.createElement('li');
    li.textContent = el;
    li.style.backgroundColor = "yellow";
    li.className = "class2 class1";
    li.classList.add('active');
    function onHandleLi(event) {
      console.log('event.target', event.target);
      event.target.removeEventListener('click', onHandleLi);
      event.target.remove();
    }
    li.addEventListener('click', onHandleLi);
    console.log('li.classList.contains("active")', li.classList.contains("active"))
    // contactUL.innerHTML += `<li class="class1 class 2">${el}</li>`;
    // contactUL.appendChild('asdasd')
    // console.log('li', li);
    contactUL.append(li);

  });

};

// contactUL.addEventListener('click', function(e){
//   console.log('e.target', e.target);
//   console.log('e.currentTarget', e.currentTarget);
// })

renderContacts(contacts);

const form = document.querySelector('form');
// const contactsInput = document
// .querySelector('[name="phone"]');


// contactsInput.addEventListener('input', function(e) {
//   console.log('e.target', e.target.value);
// });

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e.target.elements.phone.value);
  // console.log(contactsInput.value);
  const li = document.createElement('li');
  li.textContent = e.target.elements.phone.value;
  contactUL.append(li);
  e.target.reset();
});
