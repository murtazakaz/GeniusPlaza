import {Environment} from '../config/environment';
import {fetchAPI} from './fetch';

export const _getPeople = id => {
  let route = +'/people/' + id;

  let method = {method: 'GET'};
  return fetchAPI(Environment.BASE_URL, route, method);
};

export const _getPlanets = id => {
  let route = +'/planets/' + id;
  let method = {method: 'GET'};
  return fetchAPI(Environment.BASE_URL, route, method);
};

export const _getStarships = id => {
  let route = +'/starships/' + id;
  let method = {method: 'GET'};
  return fetchAPI(Environment.BASE_URL, route, method);
};
