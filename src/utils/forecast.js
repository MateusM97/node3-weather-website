const request = require('request')

const forecast = (lat, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=c39b5c06e0e36cd430b8bd468b1b0b5b&query='+ lat +',' + long

    request({url, json: true }, (error, { body } = {}) => {
        if(error){
            callback('unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find weather information', undefined)
        } else {
            callback(undefined, {
                descriptions: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                humidity: body.current.humidity
            }                
            )
            
        }
        
    })
}

module.exports = forecast