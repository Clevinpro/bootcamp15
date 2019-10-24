import usersData from './usersData';
// import Handlebars from 'handlebars/dist/handlebars.min';
import userTemplate from '../templates/user.hbs';
import usersTemplate from '../templates/users.hbs';

// console.log('userTemplate()', userTemplate(usersData[0]));

// const markup = usersData.reduce((acc, el) => {
//   return acc += userTemplate(el);
// }, '');

// console.log('markup', markup);
const filter = usersData.filter(el => el.age > 24);
const markup1 = usersTemplate(filter);
// console.log('markup1', markup1);

const jsonUsers = JSON.stringify(usersData);
// console.log('JSON.stringify(usersData)', jsonUsers);

const normalUsers = JSON.parse(jsonUsers);
console.log('normalUsers', normalUsers);

localStorage.setItem('users', jsonUsers);

const localUsers = localStorage.getItem('users');

// localStorage.setItem('user', JSON.stringify(usersData[0]));

console.log('localUsers', JSON.parse(localUsers));

const getUser = JSON.parse(localStorage.getItem('user'));
const loginText = document.querySelector('.login');

if(getUser) {
  loginText.textContent = getUser.name;
}
console.log('getUser', getUser);





const form = document.querySelector('.form');
const todos = document.querySelector('.todos');
let todosArr = JSON.parse(
  localStorage.getItem('todos'));

// Check our todos in LS
if(!todosArr) {
  todosArr = [];
} else {
  todosArr.forEach(el => {
    todos.append(createTodo(el));
  })
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.target.elements.text.value;
  todos.append(createTodo(inputValue));
  todosArr.push(inputValue);
  // add updated arr of todos to LS
  localStorage.setItem('todos', JSON.stringify(todosArr));
  e.target.reset();
});

function createTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}
