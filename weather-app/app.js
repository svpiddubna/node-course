const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');



// request({url: urlMapbox, json: true}, (error, response) => {
//   if (error) {
//     console.log("Error")
//   } else if (response.body.features.length === 0) {
//     console.log("Error")
//   } else {
//     console.log(response.body.features[0].place_name);
//     console.log(response.body.features[0].center[1]);
//     console.log(response.body.features[0].center[0]);
//   }
// })
const inputLocation = process.argv[2];

geocode (inputLocation, (error, {latitude, longitude, location}) => {
  if (inputLocation) {
    if (error) {
      return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
      return console.log(error)
      }
      console.log(location);
      console.log(forecastData);
    })
  } else {
    console.log("Enter location");
  }

})


