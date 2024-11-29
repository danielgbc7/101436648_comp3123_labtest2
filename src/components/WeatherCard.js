import React from 'react';

function WeatherCard({ weather }) {
    const { name, main, weather: details } = weather;
    const { temp, temp_min, temp_max } = main;
    const { description, icon } = details[0];

    return (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>{name}</h2>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
            <p><strong>Temperature:</strong> {temp}°C</p>
            <p><strong>High:</strong> {temp_max}°C</p>
            <p><strong>Low:</strong> {temp_min}°C</p>
            <p><strong>Condition:</strong> {description}</p>
        </div>
    );
}

export default WeatherCard;
