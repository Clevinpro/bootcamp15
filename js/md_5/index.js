console.log('work');
// this = new Object

// prototype - function
// __proto__ || [[Prototype]]

// function User(name = "Bart", age) {
//   this.name = name;
//   this.age = age;
//   this.points = 0;
//   // this.getInfo = function() {
//   //   return `${this.name}, age: ${this.age}`;
//   // }
// }

// User.prototype.getInfo = function (params) {
//   return `${this.name}, age: ${this.age}`
// }

// function Admin(type, name, age) {
//   // this = {};
//   User.call(this, name, age);
//   // this.name = name;
//   // this.age = age;
//   this.type = type;
// }

// // Admin.prototype.constructor
// // Admin.prototype.__proto__ = User.prototype;
// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.getType = function(params) {
//   return `${this.type}`;
// }
// Admin.prototype.constructor = Admin;
// // {
// //   constructor: Admin, 
// //   __proto__ : User.prototype
// // }

// // {}.__proto__ = User.prototype; 



// console.dir(User);
// // console.log('User.prototype', User.prototype);

// const user1 = new User(undefined, 25);
// const user2 = new User("Susana", 30);



// console.log('user1', user1)
// console.log('user2', user2)

// console.log(
//   'user1.getInfo() :',
//   user1.getInfo()
//  );

//  console.log(
//   'user2.getInfo() :',
//   user2.getInfo()
//  );

//  const admin1 = new Admin('moderator', 'Alex', 40);

//  console.log('admin1.getType()', admin1.getType())
//  console.log('admin1', admin1);

//  console.log('admin1.getInfo()', admin1.getInfo());


// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;   
//   }

//   getInfo() {
//     return `${this.name}, age: ${this.age}`;
//   }
// }

// const classUser1 = new User('Lans', 25);

// console.log('classUser1', classUser1);

// console.log('classUser1.getInfo()', classUser1.getInfo());


// class Admin extends User {
//   constructor(type = Admin.TYPES.USER_MOD, name, age) {
//     super(name, age);
//     this._type = type;
    
//   }

//   static TYPES = {
//     USER_MOD: 'moderator',
//     USER_SUPPER: 'superUser',
//   }

//   // getType() {
//   //   return this.type;
//   // }

//   get type() {
//     return this._type;
//   }

//   // setType(type) {
//   //   return this.type = type;
//   // }

//   set type(type) {
//     return this._type = type;
//   }

// }

// // Admin.TYPES = {
// //   USER_MOD: 'moderator',
// //   USER_SUPPER: 'superUser',
// // }

// const classAdmin = new Admin('mod', 'Bob', 50);

// console.log('classAdmin', classAdmin);

// console.log('classAdmin.getInfo()', classAdmin.getInfo());

// // console.log(
// // 'classAdmin.type',
// //  classAdmin.getType()
// // );
// console.log('classAdmin.type', classAdmin.type)
// console.log('classAdmin.type', classAdmin.type = 'superUser')
// console.log('classAdmin.type', classAdmin.type);

// console.log('Admin.TYPES', Admin.TYPES);
// console.log('classAdmin.TYPES', classAdmin.TYPES);




// Задание 1
// Напиши функцию-конструктор Account, 
// которая создает объект со свойствами
// login и email. В prototype функции-конструктора
// добавь метод getInfo(), который выводит в 
// консоль значения полей login и email объекта 
// который его вызвал.

function Account(login, email) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function() {
  return `Login: ${this.login}, Email: ${this.email}`;
}

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com