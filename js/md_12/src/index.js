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


// console.log('todoForm.elements.todo', todoForm.elements.todo)
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
    deleteTodo(id, e.target);
  }
});



todoUL.addEventListener('dblclick', e => {
  if(e.target.nodeName === 'LI') {
    // st. 1
    const oldEl = todoData.find(todo => todo.id === +e.target.dataset.id);
    // console.log('oldEl', oldEl);

    // st. 2
    const form = document.createElement('form');
    const input = document.createElement('input');
    form.id = 'update';
    input.name = 'update';
    input.type = 'text';
    input.value = oldEl.title;
    form.append(input);
    const formAction = formEv => {
      formEv.preventDefault();

      const title = formEv.target.elements.update.value;

      // st. 3
      updateTodo({...oldEl, title}, e.target);
      form.removeEventListener('click', formAction);
    }
    form.addEventListener('submit', formAction);
    e.target.innerHTML = '';
    e.target.append(form);
  }
});


// st. 3
function updateTodo(newData, target) {
  fetch(`${basicUrl}/todo/${newData.id}`, {
    method: "PUT",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newData),
  })
    .then(res => res.json())
    .then(resData => {
      console.log('upd resData', resData);
      target.innerHTML = resData.title;
    })
}



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

