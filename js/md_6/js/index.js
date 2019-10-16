import users from './users.js';
console.log('users :', users);

// Если нужно перебрать масив и вывести данные
// users.forEach(function(el, idx, arr) {
//   const li = document.createElement('li');
//   li.textContent = el.name;
//   document.body.appendChild(li);
// });

// const getNameArr = (el) => el.name;
// const newArr = users.map(getNameArr);

// const newArr = users.map((el) => el.name);



// const newArr = users.map(({ name, age, balance }) => 
// ({name, age, balance: Math.round(balance * 25)}));

// Return undefined
// const newArr = users.map((el) => {
//   const { name, age, balance } = el;
//   if(age > 23)
//   return {name, age, balance: Math.round(balance * 25)};
// });





// console.log('newArr', newArr);


const id = '5da6ca6a1ec99d9f45cb1c29';

// const newArr = users.map((el) => {
//   if(el.id === id) {
//     // el.isActive = !el.isActive
//     return {...el, isActive: !el.isActive, name: "Bart Simpson"}
//   }
//   return el;
// });

// console.log('newArr', newArr);


// const filterArr = users.filter((el) => el.age > 23 && el.isActive);
// const filterArr = users
//   .filter(el => !el.isActive)
//   .map(el => ({ name: el.name, balance: el.balance}));

// console.log('filterArr', filterArr);


// delete el
// const filterArr = users.filter((el) => el.id !== id);

// fiend one
// const filterArr = users.filter((el) => el.id === id);
// console.log('filterArr[0]', filterArr[0]);


// const findOne = users.find((el) => el.id === id);
// console.log('findOne', findOne);

// console.log('filterArr', filterArr);




// Задание 1
// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   // твой код
//   // const usersArr = users.map(el => el.name);
//   // return usersArr;
//   let usersArr = [];
//   users.forEach(el => usersArr.push(el.name));
//   return usersArr;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]




// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users
    .filter((el) => el.eyeColor === color);
}
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
