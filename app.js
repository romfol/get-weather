const geocode = require('./geocode');

geocode('cherkasy', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
