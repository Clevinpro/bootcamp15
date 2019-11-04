import './styles.css';
import eventEmitter from './eventEmitter';
import { getPeople } from './api';

function renderPeople(data) {
  console.log('renderPeople');
  console.log('data :', data);
}

function getTimeNow() {
  alert(new Date());
}

eventEmitter.subscribe('afterLogin', getTimeNow);
eventEmitter.subscribe('afterLogin', getPeople);
eventEmitter.subscribe('afterFetchPeople', renderPeople);
// eventEmitter.unsubscribe('afterLogin', getTimeNow);
console.log('eventEmitter :', eventEmitter);

const name = 'admin';

function initApp() {

  if(name === prompt('login:')) {
    alert(true);
    eventEmitter.emit('afterLogin');
  }
}

initApp();

