const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a7b22a7a579e2927228d0f73dd1e620d/' + latitude + ',' + longitude + '?units=si'
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather sevices!', undefined)
        } else if (body.error) {
            callback('Unable to find weather for this location. Try another search.', undefined)
        } else {
            callback(undefined, {
                summary: body.currently.summary,
                temperature: body.currently.temperature,
                rain: body.currently.precipProbability
            })
        }

        
    })
}

module.exports = forecast