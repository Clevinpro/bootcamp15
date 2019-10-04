console.log("work");

// const PI_CASE = 3.14;
// const a = 5 + 1;
// let b = a + 6;

// console.log(b);

// b = b + 10;

// console.log('b:', b);

// console.log(typeof b);
// console.log(typeof "Word");
// console.log(typeof g);

// b = '5' + b;

// console.log('b is string :', b);

// // b = +b;
// b = Number(b);

// console.log('b :', b);
// console.log('typeof b :', typeof b);

// console.log('String(b) :', String(b));
// console.log('b :', b);

// // console.log('5 == 5 :', 5 == 5);
// // console.log('5 == 5 :', 5 == '5');

// console.log('5 === 5 :', 5 === 5);
// console.log("5 === '5' :", 5 === '5');

// console.log('5 !== 10 :', 5 !== 10);
// console.log('5 !== "5" :', 5 !== '5');

// let message = "Some word";

// console.log(
//   '"Some word".toLowerCase() :',
//   "Some word".toLowerCase()
// );

// console.log(
//   'message.toLowerCase() :',
//   message.toLowerCase()
// );

// console.log('message.length :', message.length);

// message = message.toLowerCase();
// console.log('message :', message);

// console.log('message[1] :', message[1]);
// console.log(
//   'message[message.length] :',
//   message[message.length]
// ); // undefined

// console.log(
//   'message[message.length - 1] :',
//   message[message.length - 1]
// );

// console.log(Number.parseInt('12.123asdasd'));
// console.log(Number.parseFloat('12.123asdasd'));

// console.log(Number('12.123asdasd'));

// console.log(NaN === NaN);
// Number('12.123asdasd') return NaN
// Number.isNaN(NaN) return true
// true !== true => false

// Number('12') return 12
// Number.isNaN(12) return false
// false !== true => true

// console.log(
//   'Number.isNaN() :',
//   Number.isNaN(Number('12.123asdasd')) !== true
//   // isNaN('12.123asdasd');
// );

// let cash = 1000;
// const price = 500;

// cash = cash - price;
// // cash = cash - price;

// if(cash >= price) {
//   alert('success');
// } else {
//   alert('no cash');
// }

// console.log('cash :', cash);

// if("asdasd" && 0 && 100 || true && 100 > 90 ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let userInput = prompt('What is your name?');

// if(userInput && userInput !== '') {
//   alert('Welcome ' + userInput);
// } else {
//   alert('Enter your name please');
//   userInput = prompt('What is your name? You have last chance!');
//   alert('Welcome ' + userInput);
// }

// console.log('userInput :', userInput);
// const userIsAdult = confirm('Do you have 18 years?');
// console.log('userIsAdult :', userIsAdult);

// const cash = +prompt('How many cash do you have?');
// const credit = 1000;
// const price = 800;

// if(cash >= price) {
//   console.log('pay with cash');
// } else if(credit >= price) {
//   console.log('pay with credit');
// } else {
//   console.log('check your balance');
// }

// console.log('cash', cash);

// const name = 'Alan';

// const userType = name === 'Alan' ? 'admin' : null;

// const day = prompt('What is the day now?');

// switch(day) {
//   case 'monday':
//   case 'friday': {
//     alert('Good morning');
//     break;
//   }
//   case 'thursday':
//     alert("Sorry. We don't working now.")
//     break;
//   default:
//     alert('Are you sure?');
// }

// Задание 1
// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится:
//  'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится:
//  'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// const name = "Generator";
// let price = 1000;

// console.log(`Choused ${name}. Price: ${price}`);

// price = 2000;

// // console.log(`Choused ${name}. Price: ${price}`);
// console.log("Choused " + name + ". Price: " + price);

// Задание 2
// Напиши скрипт проверки количества товаров на складе.
// Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, 
// то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 50;


// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением
// константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
// записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.


// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const userInput = prompt("Password");
// if (userInput === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';

// } else if(userInput === null) {
// message = 'Отменено пользователем!';

// }else  {
//   message = 'Доступ запрещен, неверный пароль';
// }

// alert(message);


// let a = 5;

// if (true) {
//   let a = 10;
//   a = 15;

//   if(true) {
//     let b = 15;
//   }

//   // console.log('b :', b); // b is not defined
//   console.log('a in block :', a);
// }

// console.log('a :', a);

// // i += 1

// let cash = 1000;

// for(let i = 1; i <= 10; i = i + 1) {
//   cash =  cash / 10 * 1.8 + cash;
//   // if(i % 3 === 0) {
//   //   console.log('hello');
//   // } else if( i % 5 === 0) {
//   //   console.log('nice');
//   // }
//   cash = Math.round(cash);
//   console.log(`cash ${i}`, cash);
// }

// let count = 0;

// while(count < 10) {
//   console.log('count', count)



//   count = count + 1;
// }

// let userInput;

// do {
//   userInput = prompt('What are you doing?')

// }while(!userInput)

// let whileCount = 0;

// while(whileCount < 10) {

//   if(whileCount % 2 === 0 && whileCount !== 0){
//     whileCount += 1;
//     continue;
//   } 

//   if(whileCount === 5) {
//     alert('Wellcome');
//     break;
//   }
//   console.log('whileCount :', whileCount);
//   whileCount += 1;
// }

// for(let i = 0; i < 10; i += 1) {
//   if(i % 2 === 0 && i !== 0){
//     continue;
//   } 

//   console.log('i :', i);
// }



// Задание 4
// На счету пользователя есть 23580 кредитов, значение хранится
// в переменной credits (создай и присвой). Пользователь решает
// купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
// Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество
// дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение
// 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и 
// вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// let credits = 23580;
// const pricePerDroid = 3000;

// const userInput = prompt('How many droids would you want to buy?');
// if(userInput === null){
//   alert('Cancel');
// }
// else {
//   let totalPrice = pricePerDroid * userInput;
//   if(totalPrice <= credits) {
//     credits = credits - totalPrice;
//     console.log(`You buy ${userInput} droids, and your credits is ${credits}`);
//   }
//   else {
//     console.log('You do not have enough money');
//   }
// }


// Задание 5
// Пользователь может оформить доставку товара к себе в страну,
// указав ее при посещении страницы в prompt. Учти, пользователь 
// может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки 
// в указанную страну. Обязательно используй switch. Формат 
// сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке,
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const CHINA = 'Китай';
const CHINA_DELIVERY = 100;
const CHILI = 'Чили';
const CHILI_DELIVERY = 170;
const INDIA = 'Индия';
const INDIA_DELIVERY = 80;
// 'Доставка в [страна] будет стоить [цена] кредитов'.
const userInput = prompt("What country?");
switch(userInput.toLowerCase()) {
case CHINA.toLowerCase():
    alert(`Доставка в ${CHINA} будет стоить ${CHINA_DELIVERY} кредитов`);
    break;
  case CHILI.toLowerCase():
    alert(`Доставка в ${CHILI} будет стоить ${CHILI_DELIVERY} кредитов`);
    break;
  case INDIA.toLowerCase():
    alert(`Доставка в ${INDIA} будет стоить ${INDIA_DELIVERY} кредитов`); 
    break;
  default:
    alert('В вашей стране доставка не доступна');
}

console.log(userInput);





























