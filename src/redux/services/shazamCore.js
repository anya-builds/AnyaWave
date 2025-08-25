const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'aeab297e6bmsh616412e6462330fp13ed7cjsna1f0b42c3088',
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=IN', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));