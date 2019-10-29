import './styles.css';

const interval = 1000;
const timeOut = 30000;
const hours = document
  .querySelector('.hours');
const minutes = document
  .querySelector('.minutes');
const seconds = document
  .querySelector('.seconds');
const dateRef = document
  .querySelector('.date');

function checkNumber(number) {
  if(number < 10) {
    return '0' + String(number);
  }
  return number;
}


let date = '';
const DateNow = new Date();

date += DateNow.getDate() + '.';
date += DateNow.getMonth() + 1 + '.';
date += DateNow.getFullYear();

console.log('date', date);

dateRef.textContent = date;

// const timerId = setInterval(() => {
//   const DateNow = new Date();
//   let time = '';
//   time += DateNow.getHours() + ':';
//   time += DateNow.getMinutes() + ':';
//   time += DateNow.getSeconds();
//   console.log('time', time);

//   hours.textContent = checkNumber(DateNow.getHours());
//   minutes.textContent = checkNumber(DateNow.getMinutes());
//   seconds.textContent = checkNumber(DateNow.getSeconds());

//   // console.log('interval', new Date());
// }, interval);

// setTimeout(
//   () => {
//     clearInterval(timerId);
//     console.log('clearInterval');
//   },
//   timeOut
// );


const contactUs = document.querySelector('.contactus');
const modalForm = document.querySelector('.modal__form');
const form = modalForm.querySelector('.modal');

// Show modal
contactUs.addEventListener('click', () => {
  modalForm.classList.add('show');
});

// Close modal
modalForm.addEventListener('click', (e) => {
  if(
    e.currentTarget === e.target ||
    e.target.dataset.action === 'CLOSE'
  ) {
    modalForm.classList.remove('show');
  }
});


// Submitting form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // console.log('e.target.elements.name', e.target.elements.name)
  const elements = e.target.elements;
  const submData = {
    name: elements.name.value,
    email: elements.email.value,
    phone: elements.phone.value,
    message: elements.message.value,
  }
  console.log('submData', submData);
});



console.log('clg2');
console.log('clg3');

// const myPromise = new Promise((resolve, reject) => {
//   // if(date === '25.10.2019') {
//   //   setTimeout(() => {

//   //     resolve("It's true");
//   //   }, 4000);

//   // } else {
//   //   reject("It's false");
//   // }
//   setTimeout(() => {
//     modalForm.classList.add('show');
//     resolve();
//   }, 4000);
// });


function fetch() {
  let a = 5;
  if(true) {

    return Promise.resolve(a * a);
  }
}

console.log('fetch()', fetch())
console.log('fetch()', fetch().then(fetchData => console.log('fetchData', fetchData)))

// myPromise
//   .then(someData => {
//     // console.log('someData', someData);
//     setTimeout(() => modalForm.classList.remove('show'), 2000);
//     return 10;
//   })
//   .then(newData => console.log('newData', newData))
//   .catch(err => console.log('err', err));


  // setTimeout(() => {
  //   modalForm.classList.add('show');
  // }, 4000);

  // setTimeout(() => modalForm.classList.remove('show'), 6000);



// Дана таблица с числами. По нажатию на кнопку найдите ячейку,
// в которой хранится максимальное число, и сделайте ее фон красным.

// <table>
//     <tr>
//         <td>25</td>
//         <td>11</td>
//         <td>8</td>
//     </tr>
//     <tr>
//         <td>54</td>
//         <td>13</td>
//         <td>22</td>
//     </tr>
//     <tr>
//         <td>15</td>
//         <td>23</td>
//         <td>6</td>
//     </tr>
// </table>
// <button>Жми</button>

const newTable = document.querySelectorAll('td');
const newButton = document.querySelector('.tableButton');
console.log(newTable);

let biggerNumber = +newTable[0].textContent;
let newIndex = 0

newTable.forEach((element, index) => {
  if( +element.textContent > biggerNumber ){
    biggerNumber = +element.textContent
    newIndex = index
  }

});
newButton.addEventListener('click',() =>{
  newTable[newIndex].style.backgroundColor = 'red'
} )





// Даны два селекта. В первом находятся страны,
// во втором - города. Сделайте так, чтобы когда
// выбирается определенная страна - в другом селекте
// появлялись города этой страны. В абзац ниже пишите
// выбранную страну и город через запятую.

const cityArr = {
    'aus': ['Мельбурн', 'Сидней', 'Аделаида', 'Брисбен', 'Хобарт'],
    'jap': ['Токио', 'Киото', 'Осака', 'Иокогама'],
    'sar': ['Кейптаун', 'Йоханесбург'],
 }

 const countryNames = {
  'aus': "Австралия",
  'jap': "Япония",
  'sar': "ЮАР",
}

// <select name="country" id="country">
//     <option value="aus">Австралия</option>
//     <option value="jap">Япония</option>
//     <option value="sar">ЮАР</option>
// </select>

// <select name="cities" id="cities"></select>
// <p class="select__result"></p>

const country = document.querySelector('#country');
const cities = document.querySelector('#cities');
const selectResult = document.querySelector('.select__result');

let countryValue = country.value;

function renderCities () {
  let markup = '';
  cityArr[countryValue].forEach (el => {
    markup += `<option value=${el}>${el}</option>`;
  });

  cities.innerHTML = markup;
}

renderCities ()

country.addEventListener('change', (e) => {
  countryValue = e.target.value;
  // let markup = '';
  // cityArr[countryValue].forEach (el => {
  //   markup += `<option value=${el}>${el}</option>`;
  // });

  // cities.innerHTML = markup;
  renderCities();
  selectResult.textContent = `${countryNames[countryValue]} ${cities.value}`;

})

cities.addEventListener('change', (e) => {
  selectResult.textContent = `${countryNames[countryValue]} ${e.target.value}`;
});




