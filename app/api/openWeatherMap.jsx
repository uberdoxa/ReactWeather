var axios = require('axios');
const API_KEY = 'b0823bb2a1e28935b2ed0a1f994588ed';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5weather?q=London,ukappid='+'API_KEY';

module.exports = {
  getTemp: function (location){
    // var encodedLocation = encodedURIComponent(location);
    // var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(OPEN_WEATHER_MAP_URL).then(function(res){
      if(res.data.cod && res.data.message){
        console.log('First bransh');
        throw new Error(res.data.message);
      }else{
         console.log('First bransh 2');
        return res.data.main.temp;
      }

    },function(res){
      console.log('First bransh 3');
        // throw new Error(res)
        throw new Error('Unable to fetch weather for that location')

    });

  }
};






