import {showToast} from '../utils/toast';

export default fetchAPI = (route, method) => {
  return fetch(route, method)
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(error => {
      showToast('Failed to fetch data');
      return false;
    });
};
