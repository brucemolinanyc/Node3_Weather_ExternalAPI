const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5473ff54a65c78c768b4103249fbe2aa/' + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude)

    request({url, json:true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather api.', undefined)
        } else if (body.error){
            callback('Unable to find location. Try another search.', undefined)
        } else{
            callback(undefined, body.daily.data[0].summary + " It is currently " + Math.round(body.currently.temperature) + " degress out. There is a " + body.currently.precipProbability + "% chance of rain." + " The high temperature today will be " + Math.round(body.daily.data[0].temperatureHigh) + " degrees and the low temperature today will be " + Math.round(body.daily.data[0].temperatureLow) + " degrees.")
        }
    })
}

module.exports = forecast
