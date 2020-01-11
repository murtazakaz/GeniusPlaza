export default fetchAPI = (route, method) => {
  console.log('Request', route, method);
  return fetch(route, method)
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
