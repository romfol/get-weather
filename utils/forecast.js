const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/58efc0cfaaa379797790e584c095026d/${lat},${long}?units=si`;  
  request({ url, json: true }, (err, { body }) => {
    
    if (err) {
      callback('unable to connect');
    } else if (body.error) {
      callback('unable to find location');
    } else {
      callback(undefined, body.daily.data[0].summary + " It's currently " + body.currently.temperature + " degress out. There is a " + body.currently.precipProbability+ "% chance of rain.");
    }
  });
};

module.exports = forecast;
