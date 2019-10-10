// const arr = [1, 2 ,3, 4, 5];
// const users = [{id: 12313}, {id: "asdasdasd"}];

// const indx = 3;



// const arr1 = [1, 2 ,3, 4, 5];


// const squareOfArr1 = [];

// for(const el of arr1) {
//   // console.log(`el ${arr.indexOf(el)}:`, el);
//   squareOfArr1.push(el*el*el);
// }

// console.log('squareOfArr1 :', squareOfArr1);

// const arrTo = function(typeOperation) {
//   const newArr = [];
//   if(typeOperation === 'triple') {
//     for(const el of arr) {
//       // console.log(`el ${arr.indexOf(el)}:`, el);
//       newArr.push(el*el*el);
//     }
//   }else if(typeOperation === 'sum') {
//     let sum = 0;
//     for(const el of arr) {
//       // console.log(`el ${arr.indexOf(el)}:`, el);
//       sum += el;
//     }

//     return sum;
//   } else {
//     for(const el of arr) {
//       // console.log(`el ${arr.indexOf(el)}:`, el);
//       newArr.push(el*el);
//     }
//   }

//   return newArr;
// }

// for(const el of arr) {
//   // console.log(`el ${arr.indexOf(el)}:`, el);
//   newArr.push(el*el);
// }




// withOut CallBack 

// function arrLoop(arr) {
//   const newArr = [];
//   for(const el of arr) {
//     // console.log(`el ${arr.indexOf(el)}:`, el);
//     newArr.push(el*el);
//   }
  
//   return newArr;
// }



// function arrLoop(arr, action) {
//   const newArr = [];
//   for(const el of arr) {
//     // console.log(`el ${arr.indexOf(el)}:`, el);
//     newArr.push(action(el));
//   }
  
//   return newArr;
// }


// const actionSquare = function(number) {
//   return number * number;
// }

// const actionTax = function(number) {
//   return number * 0.6;
// }

// console.log('actionSquare(5) :', actionSquare(5));

// const square = arrLoop(arr, actionSquare);
// const square1 = arrLoop(arr, actionTax);

// console.log('square :', square);
// console.log('square1 :', square1);







// const squareOfArr = arrTo();
// const s2 = arrTo('triple');
// const s3 = arrTo('sum');

// console.log('squareOfArr :', squareOfArr);
// console.log('s2 :', s2);
// console.log('arr :', arr);




// const countries = [
//   {
//     name: 'Ukraine',
//     cost: 1000,
//   },
//   {
//     name: 'USA',
//     cost: 2000,
//   }
// ];

// const generateMessage = (country, cost) => 
// `Delivery in ${country} cost ${cost}`;

// const viewMessages = function(arrCountries) {
//   for(const country of arrCountries) {
//     console.log('country :', country);
//     console.log(generateMessage(country.name, country.cost));
//   }
// }



// viewMessages(countries);

// for(const key in countries[0]) {
//   console.log('key', key);
//   console.log('countries[0][key]', countries[0][key]);
// }


const hero = {
  name: 'Lancelot',
  defence: 10,
  health: 200,
  attack: 20,
};

const dragon = {
  name: 'Drakaries',
  defence: 40,
  health: 500,
  attack: 100,
}

const attackTarget = function(aggressor) {
  let hit;
  if(aggressor.name === 'Lancelot') {
    const chance = Math.round(Math.random() * 100);
    hit = chance <= 20 ? 50 : Math.round((1 - this.defence * 0.01) * aggressor.attack);
  } else {
    hit = Math.round((1 - this.defence * 0.01) * aggressor.attack);
  }

  this.health -= hit;
  console.log(`${aggressor.name} hit: ${hit}`);
  console.log(`${this.name}: ${this.health}`);
}

while(hero.health > 0 && dragon.health > 0) {
  // Hero attack dragon
  attackTarget.call(dragon, hero);

  if(dragon.health > 0) {
    // Dragon attack hero
    attackTarget.call(hero, dragon);
  }
}


if(hero.health > 0) {
  alert(`${hero.name} is winner`);
} else {
  alert(`${dragon.name} is winner`);
}