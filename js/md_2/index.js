// const arr = ['Luck', 'Joe', 'Rob', 'Sansa'];

// const findedId = arr.indexOf('Rob');
// arr[findedId] = 'Rokky';
// console.log('arr :', arr);

// console.log(
//   'arr.indexOf("sss") :',
//   arr.indexOf('sss')
// );

// console.log(
//   'arr.includes("Sansa") :',
//   arr.includes("Sansa")
// );

// console.log(arr.push('Adam', 'Lola', 'Sergey'));
// console.log('arr :', arr);

// console.log(arr.pop());

// // !arr.includes('Joe')

// if(arr.includes('Joe') === false) {
//   arr.push('Joe');
// }

// console.log('arr :', arr);

// arr.unshift('Jozzy', 'Frank');

// console.log('arr :', arr);
// console.log(arr.shift());
// console.log('arr :', arr);

// const newArr = arr.slice();
// newArr.pop();
// console.log('newArr :', newArr);

// const arr1 = arr;
// console.log('arr1 :', arr1);
// arr1.push('Unknown');
// arr.unshift('What?');
// console.log('arr :', arr);
// console.log('arr1 :', arr1);

// let a = 5;
// let b = a;
// b = 6;
// console.log('a :', a);

// const matrix = [[1, 2, 3], [4, 5, 6]];

// console.log(
//   'matrix 2th arr & 1th el :',
//   matrix[1][0]
// );


// const numbers = matrix[0];
// const numbers = matrix[0].slice();
// numbers[0] = 5;

// console.log('matrix :', matrix);
// console.log('numbers :', numbers);


// ----- Last section -----

// const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit." 

// const arrOfStr = str.split(" ");
// // console.log('arrOfStr :', arrOfStr);
// console.log('arrOfStr[1] :', arrOfStr[1]);
// console.log('arrOfStr[1][0] :', arrOfStr[1][0]);
// console.log('arrOfStr[1][0].toUpperCase() :', arrOfStr[1][0].toUpperCase());
// console.log('arrOfStr[1][0] :', arrOfStr[1][0]);
// console.log('arrOfStr[1].slice(1) :', arrOfStr[1].slice(1));

// for(let i = 0; i < arrOfStr.length; i += 1) {
//   const firstEl = arrOfStr[i][0].toUpperCase();
//   arrOfStr[i] = firstEl + arrOfStr[i].slice(1);
//   console.log(arrOfStr[i]);
// }



// console.log('arrOfStr :', arrOfStr);

// const newStr = arrOfStr.join(', ');

// console.log('newStr :', newStr);

// "LOrem &".replace('&', '');

// Splice

// console.log('arr :', arr);

// Remove el from arr - arr.splice(index, deleteCount);

// console.log(arr.splice(1, 1));
// console.log('arr :', arr);

// Replace el or els arr -
// arr.splice(index, deleteCount, ...els)

// console.log(
//   "deleted els :",
//   arr.splice(0, 2, "Chucky", "Romeo", "Frank")
// );
// console.log('arr :', arr);

// Add el or els to arr :
// arr.splice(index, 0, ...els);

// console.log(
//   arr.splice(
//     arr.length - 1,
//     0,
//     "Jessika"
// )
// );

// console.log('arr :', arr);

// const newUsers = ["Unknown"];

// console.log('newUsers :', newUsers);

// const users = newUsers.concat(arr);

// console.log('users :', users);





// const players = ['Bob', 'Pinky', 'Jack', 'Alan'];
// const winnerPlayers = ['Bob', 'Pinky'];
// const winner = 'Jack';
// let winnerIndex;

// for(let i = 0; i < players.length; i += 1) {
//   if(players[i] === winner) {
//     winnerIndex = i;
//     break;
//   }
// }

// alert(`Winner player with id: ${winnerIndex}. ${players[winnerIndex]}`);


// const userName = 'Alex';
// const userSurname = 'Surname';

// // `Hello ${userName} ${userSurname}`;
// // `Hello ${userName} ${userSurname}`;
// // `Hello ${userName} ${userSurname}`;
// // `Hello ${userName} ${userSurname}`;

// function getUserInfo(name, surname) {
//   return `Hello ${name} ${surname}`;
// }

// console.log(
//   getUserInfo(userName, userSurname)
// )

// console.log(
//   getUserInfo(userName, 'userSurname +++')
// )


// const salary = [1000, 1200, 1200, 1500];
// const currencyUSD = 25;
// const currencyEURO = 28;

// function getSalarySum(salaryArr, currencyValue = 25, ...args) {
//   // console.log(arguments);
//   // console.log(Array.from(arguments));
//   console.log('args :', args);
//   let sum = 0;
//   for(const el of salaryArr){
//     sum += el * currencyValue;
//   }
  
//   return sum;
// }


// const sumUSD = getSalarySum(salary)

// console.log(sumUSD);
// console.log(getSalarySum(salary, currencyEURO));

// const getSalarySum = function() {

// }

// const getSalarySum = () => {

// }









// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию
//  calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) 
// и цену гравировки одного слова, и возвращающую цену гравировки.

// Вызовы функции для проверки работоспособности твоей реализации.

// calculateEngravingPrice

// function calculateEngravingPrice(message, pricePerWord) {
//   const arr = message.split(' ');
//   return arr.length * pricePerWord;
// }

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100



// Задание 5
// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку.
// Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное
// слово то функция возвращает true, если запрещенных слов нет функция возвращает
// false. Слова в строке могут быть в произвольном регистре.

// Вызовы функции для проверки работоспособности твоей реализации.

// function checkForSpam(str) {
//   return str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale");
// }


// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
















// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром
//  произвольную строку (в строке будут только слова и пробелы) и возвращает
//  самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'


// const findLongestWord = function(string){
//   const words = string.split(' ');
//   let maxWordsLength = '';
  
//   for (const word of words ) {
//     if (word.length > maxWordsLength.length ){
//       maxWordsLength = word
//     }
//   }

//   return maxWordsLength 
// }
// console.log(findLongestWord('asd werewrrwer fggfh qweqweq dfg wert'));