console.log('work');

// const users = [
//   {
//     id: 1,
//     name: 'Susana',
//     salary: 1000,
//   },
//   {
//     id: 2,
//     name: 'Leon',
//     salary: 3000,
//   },
//   {
//     id: 3,
//     name: 'Sansa',
//     salary: 2000,
//   },
//   {
//     id: 4,
//     name: 'Rob',
//     salary: 4000,
//   }
// ];

// const getSalaryBy = function(arrUsers, currency, tax, action) {
//   const usersSalary = [];
//   for(const user of arrUsers) {
//     const { salary } = user;
//     // usersSalary.push(salary * currency);
//     usersSalary.push(action(salary, currency, tax));
//   }
//   return usersSalary;
// }

// const updateWithTax = (salary, currency, tax) => salary * currency * tax;

// console.log(
//   'getSalaryBy(users, 25, 0.6, updateWithTax) :',
//   getSalaryBy(users, 25, 0.6, updateWithTax));

// const filterBy = function(arr, action) {
//   const filterArr = [];
//   for(const user of arr) {
//     // if(user.salary >= 2000) {
//     if(action(user)) {
//       filterArr.push(user)
//     }
//   }

//   return filterArr;
// }

// const getMore = el => el.salary >= 2000;
// const getByNames = el => el.name === 'Rob';

// console.log('filterBy(users)', filterBy(users, getMore));
// console.log('filterBy(users)', filterBy(users, getByNames));



// const a = () => console.log('func a');
// const b = () => {
//   a();
//   console.log(' func b')
// };
// const c = () => {
//   console.log('start c');
//   b();
//   console.log('finish c');
// };

// c();


// const counter = function() {
//   let increment = 0;

//   const onIncrement = function() {
//     return increment += 1;
//   }

//   return onIncrement;
// }


// const counter1 = counter();
// const counter2 = counter();


// console.log('counter1()', counter1());
// console.log('counter2()', counter2());
// console.log('counter2()', counter2());
// console.log('counter2()', counter2());
// console.log('counter2()', counter2());
// console.log('counter2()', counter2());
// console.log('counter1()', counter1());
// console.log('counter1', counter1);






console.log('this :', this);
let a = [];

const user = {
  name: 'Boris',
  age: 20,
  salary: 3000,
  // getInfo: function() { 
  //   const getAge = () => { 
  //     return this.age;
  //   }
  //   return `${this.name}, age: ${this.age}`;
  // }
  getSalary: function() {
    console.log('tihs', this);
    console.log('a', a);
    return this.salary * 25;
  }
};

const user1 = {
  name: 'Marry',
  age: 20,
  salary: 3000,
  // getInfo: function() { 
  //   const getAge = () => { 
  //     return this.age;
  //   }
  //   return `${this.name}, age: ${this.age}`;
  // }
  getSalary: function() {
    console.log('tihs', this);
    console.log('a', a);
    return this.salary * 25;
  }
};


// const getInfo = () => `${this.name}, age: ${this.age}`;

const getInfo = function(message = '') { 
  // this
  const getAge = () => this.age;
  return `${this.name}, age: ${getAge()}. ${message}`;
}

user.getInfo = getInfo;

console.log('user.getInfo()', user.getInfo());

// console.log('getInfo', getInfo());

console.log('user.getSalary()', user.getSalary());

const someFunc = function(action) {
  console.log('this :', this);
  return action();
};

const str =  someFunc(user.getInfo.bind(user));

console.log('str', str);

// const str2 = getInfo.call(user);
const str2 = getInfo.apply(user, ['lolololol']);

console.log('str2', str2);

console.log('user.getInfo.call(user1)', user.getInfo.call(user1, 'How are you?'))