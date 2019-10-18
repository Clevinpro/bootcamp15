import users from "./users.js";
console.log("users :", users);

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

const id = "701b29c3-b35d-4cf1-a5f6-8b12b29a5081";

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

// // Задание 2
// // Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   // твой код
//   return users
//     .filter((el) => el.eyeColor === color);
// }
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// // mutable function
// const newUsers = [...users];

// const updateEl = (arr, id, newData) => {
//   arr.forEach((el,indx) => {
//     if(el.id === id) {
//       arr[indx] = {...el, ...newData};
//     }
//   });
//   return arr;
// };

// const updateArr = updateEl(newUsers, '701b29c3-b35d-4cf1-a5f6-8b12b29a5081', { name: "Ramsi Bolton" });

// console.log('updateArr', updateArr);
// console.log('newUsers', newUsers);

// immutable function
const newUsers = [...users];

// const updateEl = (arr, id, newData) => {
//   const newArr = [...arr];
//   newArr.forEach((el,indx) => {
//     if(el.id === id) {
//       newArr[indx] = {...el, ...newData};
//     }
//   });
//   return newArr;
// };

// with [].map
// const updateEl = (arr, id, newData) => {
//   return arr.map(el => {
//     if(el.id === id) {
//       return { ...el, ...newData };
//     }

//     return el;
//   });
// };

// const updateArr = updateEl(newUsers, '701b29c3-b35d-4cf1-a5f6-8b12b29a5081', { name: "Ramsi Bolton" });

// console.log('updateArr', updateArr);
// console.log('newUsers', newUsers);

// class Car {
//   constructor() {
//     this._speed = 0;
//   }

//   set speed(newSpeed) {
//     this._speed = newSpeed;
//   }

//   get speed() {
//     return this._speed;
//   }
// }

// const car1 = new Car();

// car1.speed = 200;

// console.log('car1.speed', car1.speed);

// const getEachOther = (arr, friendName) => {
//   // return arr.filter(el => el.friends.some(friend => friend.name === friendName));

//   return arr.filter((el) => {
//       return el.friends.some((friend) => {
//         return  friend.name === friendName;
//       });
//   });
// };

// const checkBalance = (arr, balance) => arr.some(el => el.balance > balance);

// console.log('getEachOther(users, "Cline Miller")', getEachOther(users, "Cline Miller").map(el => el.name));
// console.log('checkBalance(users, 3000)', checkBalance(users, 3000));

// const checkBalanceEvery = (arr, balance) => arr.every(el => el.balance > balance);

// console.log('checkBalanceEvery(users, 3000)', checkBalanceEvery(users, 1000));

// const sortArr1 = [{ arr: [1, 2, 3] }, { arr: [1, 2] }, { arr: [1, 2, 3, 4] }].sort((a, b) => {
//   if (a.arr.length > b.arr.length) {
//     return -1;
//   } else if (a.arr.length < b.arr.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// const sortArr2 = [{ arr: [1, 2, 3] }, { arr: [1, 2] }, { arr: [1, 2, 3, 4] }].sort((a, b) => {
//   if (a.arr.length > b.arr.length) {
//     return 1;
//   } else if (a.arr.length < b.arr.length) {
//     return -1;
//   } else {
//     return 0;
//   }

// });

// const sortArr3 = [{ arr: [1, 2, 3, 4] }, { arr: [1, 2] }, { arr: [1, 2, 3, 4, 5, 6] }].sort((a, b) => {
//   return b.arr.length - a.arr.length;
// });

// console.log('sortArr1', sortArr1);
// console.log('sortArr2', sortArr2);
// console.log('sortArr3', sortArr3);


// const getUniqueSkills = (arr) => {
//   const skills = [];
//   arr.forEach(element => {
//     skills.push(...element.skills);
//   });
//   console.log('skills', skills);
//   const unique = [];
//   skills.forEach(el => {
//     console.log('el', el);
//     console.log('skills.includes(el) !== true', skills.includes(el) !== true)
//     // !unique.includes(el) ? unique.push(el) : null;
//     !unique.includes(el) && unique.push(el);
//   });
//   console.log('unique', unique);
// }

const getUniqueSkills = (arr) => {
  // const skills = [];
  // arr.forEach(element => {
  //   skills.push(...element.skills);
  // });
  // console.log('skills', skills);
  // const unique = [];
  // skills.forEach(el => {
  //   console.log('el', el);
  //   console.log('skills.includes(el) !== true', skills.includes(el) !== true)
  //   // !unique.includes(el) ? unique.push(el) : null;
  //   !unique.includes(el) && unique.push(el);
  // });
  const unique = arr
    .reduce((acc, el) => {
      acc.push(...el.skills);
      return acc;
    }, [])
    .reduce((acc, el) => {
      // !acc.includes(el) ? acc.push(el) : null;
      // !acc.includes(el) && acc.push(el);
      // return acc;
      return !acc.includes(el) && acc.push(el) && acc || acc;
    }, [])
    .sort();
  console.log('unique', unique);
}

getUniqueSkills(users);


const sum = users.reduce((acc, el) => el.balance + acc, 0);
console.log('sum', sum);

const updData = {
  title: null,
  cost: 0,
  description: '',
  size: undefined,
};

const cleanData = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if(obj[key] || obj[key] === 0) {
      acc[key] = obj[key];
      return acc;
    }
    return acc;
  }, {});
};

console.log('cleanData(updData)', cleanData(updData));
