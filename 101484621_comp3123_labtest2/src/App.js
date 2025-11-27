import { useState, useEffect } from "react";
import SearchBar from "./Search";
import WeatherCard from "./WeatherCard";
import "./style.css";



function App() {

  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_WEATHER_KEY;
  console.log("API KEY:", API_KEY);



  const fetchWeather = async () => {
    
    setLoading(true);
    setError("");

    try {
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        
        setError("City not found");
        setLoading(false);
        return;
      }

      const data = await response.json();
      setWeather(data);
    } 
    
    catch (err) {
      setError("Unable to fetch weather");
    }

    setLoading(false);
  };



  useEffect(() => {
    
    fetchWeather();
  }, []);

  return (
    
    <div className="app">
      
      <h1>Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      
    </div>
  );
}

export default App;
