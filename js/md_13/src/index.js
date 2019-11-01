import './styles.css';
// import { getPeoples, getPerson } from './utils/api';
import * as API from './utils/api';
import myHelpers from './utils/helpers';

console.log(
  'myHelpers.formatDate()',
  myHelpers.formatDate(new Date(2007, 5, 23))
)

const a = Symbol(5);

const b = Number(5);

const c = Symbol(5);

console.log('a === b', a === b)
console.log('a === c :', a === c);

console.log('a', a);

const obj = {};

obj[a] = 'secret data';

console.log('obj', obj);

console.log('obj[Symbol(5)]', obj[Symbol(5)]);
console.log('obj[a]', obj[a]);

const iterator = (arr) => {
  let step = 0;

  return {
    next() {
      step += 1;
      const done = step <= arr.length ? false : true;
      const value = !done ? step : null;

      return {
        value,
        done,
      }
    },
  }
}

const i = iterator([1, 2, 3]);

console.log('i', i);
console.log('i.next()', i.next());
console.log('i.next()', i.next());
console.log('i.next()', i.next());
console.log('i.next()', i.next());

const generator = function* () {
  const a = yield 'some data';
  yield a + ' some text';
}

const generatorIterator = generator();

console.log('generatorIterator.next()', generatorIterator.next());
console.log('generatorIterator.next()', generatorIterator.next('sada'));
console.log('generatorIterator.next()', generatorIterator.next());


const someGen = function* () {
  yield prompt('Enter number > 10');
  yield alert('you are right');
  yield 3
}

const i2 = someGen();

// console.log('i2.next()', i2.next());

// if(+i2.next().value > 10) {
//   i2.next();
//   console.log('asdas');
// }

async function getSome() {
  try {
    const users = await fetch('https://swapi.co/api/people')
      .then(res => res.json());
    const firstUser = await fetch('https://swapi.co/api/peopleee/1')
      .then(res => {
        if(res.ok) {
          return res.json()
        } else {
          throw new Error(res.status)
        }
      });
    console.log('users', users);
    console.log('firstUser', firstUser);
    return {
      users,
      firstUser
    }
  } catch(err) {
    console.log('err', err);
  }
}

// console.log('getSome()', getSome());

getSome().then(data => console.log('data', data));

// fetch('https://swapi.co/api/people')
//     .then(res => res.json())
API.getPeoples()
  .then(resData => console.log(' users resData', resData))
  .then(() => {
    API.getPerson()
      .then(resData => console.log(' person resData', resData))
  })

