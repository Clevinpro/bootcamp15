export const getPeoples = () => {
  return fetch('https://swapi.co/api/people')
    .then(res => res.json());
}


export const getPerson = () => {
  return fetch('https://swapi.co/api/people/1')
      .then(res => res.json());
}
