export const fetchAPI = (baseURL, route, method) => {
  console.log('Request', baseURL + route, method);
  return fetch(baseURL + route, method)
    .then(response => response.json())
    .then(response => {
      console.log('Response', response);
      return response;
    })
    .catch(error => {
      console.log('ERROR: ' + error + ' in' + route + 'in Fetch API');
      return false;
    });
};
