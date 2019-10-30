import './styles.css';

// const apiForm = document
//   .querySelector('.api__form');
// const peopleUL = document.querySelector('#people');


// let peopleData = [];


// apiForm.addEventListener('submit', e => {
//   e.preventDefault();

//   console.log(
//     'e.target.elements.api.value',
//     e.target.elements.api.value
//   );

//   console.dir(e.target);

//   const href = e.target.elements.api.value;

//   function renderPeople(arrPeoples) {
//     const markup = arrPeoples.reduce((acc, el) => {
//       return acc += `
//         <li>
//           <p>${el.name}</p>
//           <p>hair color:${el.hair_color}</p>
//         </li>
//       `
//     }, "");

//     peopleUL.innerHTML = markup;
//   }

//   fetch(href, {
//     method: "GET"
//   })
//     // .then((response) => console.log('response', response))
//     .then((response) => response.json())
//     .then(resData => {
//       console.log('resData', resData)

//       peopleData =
//       resData.results ? resData.results :
//       [resData]
//       // resData.results && resData.results ||
//       // [resData];
//     })
//     .then(() => renderPeople(peopleData));
// })




const todoForm = document
  .querySelector('.todo__form');
const todoUL = document.querySelector('#todo');
const basicUrl = 'http://localhost:3000';

let todoData = [];

function renderTodo(arrTodo) {
    const markup = arrTodo.reduce((acc, el) => {
      return acc += `<li data-id=${el.id}>${el.title}</li>`;
    }, "");
    todoUL.innerHTML = markup;
}

fetch(`${basicUrl}/todo`)
  .then(response => response.json())
  .then(resData => {
    console.log('get resData', resData);
    todoData = resData;
  })
  .then(() => renderTodo(todoData));

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = e.target.elements.todo.value;
  createTodo(title);
  e.target.reset();
});

function createTodo(title) {
  return fetch(`${basicUrl}/todo`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({title})
  })
    .then(res => res.json())
    .then(resData => {
      console.log('create resData', resData);
      const newLi = `
        <li data-id=${resData.id}>${resData.title}</li>
      `;
      todoUL.insertAdjacentHTML('beforeend', newLi);
      todoData.push(resData);
    });
}

todoUL.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  if(e.target.nodeName === 'LI') {
    const id = e.target.dataset.id;
    console.log('id', id);
    deleteTodo(id, e.target)
  }
});

function deleteTodo(id, element) {
  fetch(`${basicUrl}/todo/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(resData => {
      console.log('del resData', resData);
      element.remove();
    })
}

