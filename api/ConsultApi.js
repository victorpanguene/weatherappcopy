const getCurrentWeather = async function (locationCoords) {
  const axios = require('axios');

  const lat = locationCoords.latitude;
  const lng = locationCoords.longitude;

  let result = [];

  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4dbf35618e1b427bc015a99287f8778e`
    )
    .then((res) => {
      const data = res.data;

      const locationName = data.sys.country + ',' + data.name;
      const temperatureMin = data.main.temp_min;
      const temperatureMax = data.main.temp_max;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;
      const currentTemperature = data.main.temp;

      // locationName, temperatureMin, temperatureMax, windSpeed, humidity, currentTemperature
      result = [
        currentTemperature,
        temperatureMin,
        temperatureMax,
        locationName,
        windSpeed,
        humidity,
      ];
      console.log(...result);
    })
    .catch((err) => {
      console.log(`Erro econtrado1: ${err}`);
    });
  return result;
};
export default getCurrentWeather;
