function WeatherCard({ weather }) {
  
    const icon = weather.weather[0].icon;

  return (
    <div className="weather-card">
      
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>

      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>

    </div>
  );
}

export default WeatherCard;
