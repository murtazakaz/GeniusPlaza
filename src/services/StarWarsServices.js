import Environment from '../config/environment';
import fetchAPI from './Fetch';

export const _getPeople = id => {
  let route = Environment.BASE_URL + 'people/';

  let method = {method: 'GET'};
  return fetchAPI(route, method);
};

export const _getMorePeople = route => {
  let method = {method: 'GET'};
  return fetchAPI(route, method);
};

export const _getPlanets = route => {
  let method = {method: 'GET'};
  return fetchAPI(route, method);
};

export const _getStarships = id => {
  let route = Environment.BASE_URL + 'starships/' + id;
  let method = {method: 'GET'};
  return fetchAPI(route, method);
};
