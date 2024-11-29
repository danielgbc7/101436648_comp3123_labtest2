import React, { useState } from 'react';
import { fetchWeather } from './api/weatherService';
import WeatherCard from './components/WeatherCard';
import './styles/style.css';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleSearch = async () => {
        if (city.trim() === '') return;
        const data = await fetchWeather(city);
        setWeather(data);
    };

    return (
      <div className="app-container">
          <h1>Weather App</h1>
          <div className="input-container">
              <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city"
              />
              <button onClick={handleSearch}>Search</button>
          </div>
          {weather && <WeatherCard weather={weather} />}
      </div>
  );
}

export default App;
