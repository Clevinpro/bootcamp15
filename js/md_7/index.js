console.log('work');
import users from './users.js';

// const body = document.body;
// const main = document.querySelector('main');
// const firstTitle = main
//   .querySelector('.first__title');
// const titlesArr = main
//   .querySelectorAll('[class*="title"]');
// const contactUL = document
//   .querySelector('#contacts');

// // const h1 = document.querySelector('#first');
// const h1 = document.getElementById('first');

// console.log('body', body);

// console.log('main', main);

// console.log('firstTitle', firstTitle);

// console.log('titlesArr', titlesArr);

// titlesArr.forEach(el => {
//   el.textContent = "+++   " + el.textContent + "   +++" ;  
// });

// console.log('h1', h1);

// const contacts = ['+38 099 999 99 99', '+38 099 999 91 91'];

// const renderContacts = (arr) => {
//   const arrLI = [];
//   arr.forEach(el => {
//     const li = document.createElement('li');
//     li.textContent = el;
//     li.style.backgroundColor = "yellow";
//     li.className = "class2 class1";
//     li.classList.add('active');
//     function onHandleLi(event) {
//       console.log('event.target', event.target);
//       event.target.removeEventListener('click', onHandleLi);
//       event.target.remove();
//     }
//     li.addEventListener('click', onHandleLi);
//     console.log('li.classList.contains("active")', li.classList.contains("active"))
//     // contactUL.innerHTML += `<li class="class1 class 2">${el}</li>`;
//     // contactUL.appendChild('asdasd')
//     // console.log('li', li);
//     contactUL.append(li);

//   });

// };

// // contactUL.addEventListener('click', function(e){
// //   console.log('e.target', e.target);
// //   console.log('e.currentTarget', e.currentTarget);
// // })

// renderContacts(contacts);

// const form = document.querySelector('form');
// // const contactsInput = document
// // .querySelector('[name="phone"]');


// // contactsInput.addEventListener('input', function(e) {
// //   console.log('e.target', e.target.value);
// // });

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   console.log(e.target.elements.phone.value);
//   // console.log(contactsInput.value);
//   const li = document.createElement('li');
//   li.textContent = e.target.elements.phone.value;
//   contactUL.append(li);
//   e.target.reset();
// });




// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в 
// ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке 
// ul#categories, найдет и выведет в консоль 
// текст заголовка элемента (тега h2) и количество
//  элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// const ourCategories = document.querySelector('#categories');
// const liItem = document.querySelectorAll('.item');
// console.log(`В списке ${liItem.length} категории.`)
// console.log('liItem', liItem);
// liItem.forEach(el => {
//   console.log('Category', el.querySelector('h2').textContent);
//   console.log('Quantity', el.querySelectorAll("ul > li").length);
// });

const usersUL = document.getElementById('users');

function renderUsers(arrUsers, ref) {
  // let acc = '';
  const markup = arrUsers.reduce((acc, el) => {
    const li = `
      <li data-modal="${el.about}" class="users__item">
        <img class="users__img" src=${el.picture} />
        <p class="users__name">${el.name}</p>
        <span class="users__email">${el.email}</span>
        <button data-action="DEL" class="delete">x</button>
      </li>
    `;
    return acc += li;
  }, "");
  console.log('markup______________:', markup);
  ref.insertAdjacentHTML('beforeend', markup);
}


renderUsers(users, usersUL);

const modalWrapper = document.querySelector('.modal__wrapper');
const modalTitle = modalWrapper.querySelector('.modal__title');
// const modalClose = document.querySelector('.close');

modalWrapper.addEventListener('click', function(e) {
  console.log('e.target', e.target);
  console.log('e.currentTarget', e.currentTarget);
  if(
    e.target.nodeName === 'BUTTON' ||
    e.target === e.currentTarget
  ) {
    modalWrapper.classList.remove('active');
  } 
  // else if(e.currentTarget === modalWrapper) {
  //   modalWrapper.classList.remove('active');
  // }
})

usersUL.addEventListener('click', function(e) {
  // console.log('e.target', e.target);
  // console.log('e.currentTarget', e.currentTarget);
  // console.log('e.target.nodeName', e.target.nodeName)
  // console.log('e.target.parentNode', e.target.parentNode)
  // console.log(
  //   'e.target.parentNode.parentNode.classList.contains("users__list")',
  //    e.target.parentNode.classList.contains("users__list")
  // )
  if(
    e.target.nodeName === "BUTTON" &&
    e.target.dataset.action === "DEL"
  ) {
    console.log(e.target.closest('.users__item'));
    e.target.closest('.users__item').remove();
  } else if(e.target !== e.currentTarget) {
    let description;
    if(e.target.nodeName !== "LI") {
      description = e.target
        .closest('.users__item').dataset.modal;
    } else {
      description = e.target.dataset.modal;
    }

    modalTitle.textContent = description;
    modalWrapper.classList.add('active');
  }
});


window.addEventListener('keydown', function(e) {
  // console.log('e.keyCode', e.keyCode);
  // console.log('e.keyData', e.key);
  if(
    e.keyCode === 27 
    // && modalWrapper.classList.contains('active')
  ) {
    modalWrapper.classList.toggle('active');
  }
})


// console.log(
//   usersUL.contains(document.querySelector('.users__item'))
// );

// console.log(
//   usersUL.querySelector('.users__item') !== null
// );