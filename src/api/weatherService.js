import axios from 'axios';
const API_KEY = '5df06f2407ae72e801181cdf1d05c2ba';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
};
