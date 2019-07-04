const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/93a1259317b7ffe711f3b57c380cb961/${latitude},${longitude}`
  request({ url:url, json: true}, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service")
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      callback(undefined,
        `${body.daily.data[0].summary}It is currently ${body.currently.temperature} degress out.There is a ${body.currently.precipProbability}% chance of rain.`);
    }
  })
}
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })
module.exports = forecast
