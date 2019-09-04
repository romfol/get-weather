const request = require("request");

const url = "https://api.darksky.net/forecast/58efc0cfaaa379797790e584c095026d/49.4444,32.0598?units=si&lang=ru";

request( {url, json: true},  (err, resp) => {
  console.log(resp.body.daily.data[0].summary);
})

const urlMapAPI = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los&Angeles.json?access_token=pk.eyJ1Ijoicm9tZm9sIiwiYSI6ImNrMDAwcmhvMDBidWgzaHF0d21qZTZpN2wifQ.tQkCXh2owYHqE1FFXwSBxg&limit=1"
request( {url: urlMapAPI, json: true},  (err, resp) => {
  console.log(resp.body.features[0].center);
})