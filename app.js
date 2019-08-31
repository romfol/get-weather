const request = require("request");

const url = "https://api.darksky.net/forecast/58efc0cfaaa379797790e584c095026d/37.8267,-122.4233";

request( {url}, (err, resp) => {
  const data = JSON.parse(resp.body);
  console.log(data.currently);
})