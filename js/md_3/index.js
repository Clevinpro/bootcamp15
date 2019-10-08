console.log('work');

// const userData = {
//   id: 'aspidjoqiwhdjoqij',
//   name: 'Alex',
//   age: 25,
//   email: 'some@gmail.com',
//   getInfo: function(){ console.log('Hello') },
// };

// console.log('userData', userData);
// console.log(
//   'userData.name',
//   userData.name + ' age: ' + userData.age
// );

// userData.getInfo();

// userData.name = 'Maruf';

// delete userData.email;

// console.log('userData :', userData);
 
// const newUser = {
//   name: userData.name,
//   age: userData.age,
// }

// console.log('newUser :', newUser);


// const user2 = newUser;



// const goods = {
//   apple: 100,
//   banana: 300,
//   lemon: 50,
// };

// const goodsPrice = {
//   apple: 10,
//   banana: 24,
//   lemon: 20,
// };

// // const storeData = {
// //   goods: goods,
// //   // goodsPrice: goodsPrice,
// //   goodsPrice,
// // }

// const keys = Object.keys(goods);
// console.log('keys :', keys);

// console.log('goods["apple"] :', goods["apple"]);

// const goodsPriceTotal = {};

// for(const good of keys) {
//   // console.log(
//   //   `goods[good] - ${good} :`,
//   //    goods[good]
//   // );
//   // console.log(
//   //   `goodsPrice[good] - ${good} :`,
//   //    goodsPrice[good]
//   // );
//   // goods[good] * goodsPrice[good]
//   console.log(goods[good] * goodsPrice[good]);
//   goodsPriceTotal[good] = goods[good] * goodsPrice[good];
// }

// console.log('goodsPriceTotal :', goodsPriceTotal);

// function getSumFromTotal(objPriceTotal) {
//   const values = Object.values(objPriceTotal);
//   let sum = 0;
//   console.log('values :', values);

//   for(const value of values) {
//     sum += value;
//   }

//   return sum;
// }

// console.log(
//   getSumFromTotal(goodsPriceTotal)
// );

// for(const key in goodsPriceTotal) {
//   console.log('key :', key);
//   console.log('goodsPriceTotal[key] :', goodsPriceTotal[key]);
// }
// Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.

// function countProps(object) {
//   const keys = Object.keys(object);
//   console.log(object);
//   return keys.length;
// } 


// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
// и возвращает имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// Вызовы функции для проверки работоспособности твоей реализации.

// function findBestEmployee(employees){
//   const keys = Object.keys(employees)
//   // console.log(keys) 
//   // (4) ["ann", "david", "helen", "lorence"]
//   let bestEmployeed = 0;
//   let name;
//   for(const key of keys) {
//     if(employees[key] > bestEmployeed) {
//       bestEmployeed = employees[key];
//       name = key;
//     }
//   }
//   return name;
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// TASK 4

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
// Функция считает общую сумму запрплаты работников и возращает ее. 
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// Вызовы функции для проверки работоспособности твоей реализации.

// function countTotalSalary(employees) {
//   let totalCount = 0;
//   const salaries = Object.values(employees);

//   for(const salary of salaries) {
//     totalCount += salary;
//   }
//   return totalCount;
// }

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. 
// Возвращает массив значений определенного поля prop из каждого объекта в массиве.
// Вызовы функции для проверки работоспособности твоей реализации.

// function getAllPropValues(arr, prop) {
// const items = [];
// for(const item of arr) {
//   if (prop in item){
//   items.push(item[prop]) 
// }}

// return items;
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []


// const user = {
//   name: 'Bart',
//   surname: 'Simpson',
//   age: 21,
//   // getInfo: function name(params) { },
//   getInfo() {
//     // this
//     // console.log('this :', this);
//     // console.log('this.name :', this.name);
//     console.log(`Hello! I'm ${this.name} ${this.surname}`)
//   },
//   changeAge(age) {
//     this.age = age;
//   }
// }


// user.getInfo();
// user.changeAge(24);

// console.log('user.age :', user.age);



// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const transactionsTypes = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод отвечающий за добавление суммы к балансу
//    * Создает объект транзакции и вызывает addTransaction
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = {
//       id: this.transactions.length + 1,
//       type: transactionsTypes.DEPOSIT,
//       amount,
//     }
//     this.addTransaction(transaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Создает объект транзакции и вызывает addTransaction
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if(amount > this.balance) {
//       return alert('Cнятие такой суммы не возможно, недостаточно средств!')
//     } 

//     this.balance -= amount;
//     const transaction = {
//       id: this.transactions.length + 1,
//       type: transactionsTypes.WITHDRAW,
//       amount,
//     }

//     this.addTransaction(transaction);
//   },

//   /*
//    * Метод добавляющий транзацию в свойство transactions
//    * Принимает объект трназкции
//    */
//   addTransaction(transaction) {
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for(const transaction of this.transactions) {
//       if(transaction.id === id) {
//         return transaction;
//       }
//     }

//     alert('Транзакция не найдена');
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for(const transaction of this.transactions) {
//       if(transaction.type === type) {
//         total += transaction.amount;
//       }
//     }

//     return total;
//   },
// };


// account.deposit(1333);
// account.withdraw(300);
// account.withdraw(300);
// // account.withdraw(1300);


// console.log('account :', account);
// console.log('details :', account.getTransactionDetails(2));
// console.log(
//   'account.getTransactionTotal(type) :',
//   account.getTransactionTotal(transactionsTypes.WITHDRAW)
// );

// console.log('account.getBalance() :', account.getBalance());


// function name(a, b, ...ggg) {
//   console.log(ggg);
//   if(ggg.length === 2) {

//   }else if(ggg.length === 3) {

//   }

// }

// name(1, 'asdasd', [])

// const a = { value: 'asdsad', surname: 'Simpson' };

// // const b = a;
// // const b = Object.assign({}, a, { value: 100 });
// const b = {...a, ...{ value: 100 }};

// b.name = 'Bart';

// console.log('b :', b);
// console.log('a :', a);

// const arr1 = [1, 2, 3];
// // const arr2 = arr1.concat([4,5]);
// const arr2 = [...arr1, ...[4,5]];

// console.log('arr2 :', arr2);
// console.log('arr1 :', arr1);

// someFunc(...arr1)


// const user = {
//   name: "Bart",
//   surname: "Simpson",
//   sex: 'male',
//   age: 20,
//   free: true,
//   color: ['black', 'white'],
//   hobbies: ['jackes', 'tennis'],
// };
// // const name = user.name;
// // const sname = user.surname;
// const { name, surname: sname } = user;

// // user.name
// // user.surname
// // user.sex
// // ...

// console.log('name :', name);
// console.log('sname :', sname);


const arr = [255, 255, 255];
// cosnt a = arr[3];
// const r = arr[0];
const [r, g, b, a] = arr;


console.log('arr :', arr);
console.log('a :', a);