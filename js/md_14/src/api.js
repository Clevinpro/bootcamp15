import eventEmitter from './eventEmitter';

export const getPeople = () => {
  fetch('https://swapi.co/api/people')
    .then(res => res.json())
    .then(resData => {
      console.log('resData :', resData);
      eventEmitter.emit(
        'afterFetchPeople',
        resData.results
      )
    })
}
