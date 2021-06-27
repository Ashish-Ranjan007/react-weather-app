import axios from 'axios';
const APIKEY = '3e0acdf3a70764c639f8b277b9f95246';
const APIURL = `pro.openweathermap.org/data/2.5/forecast/hourly?q=München,DE&appid=${APIKEY}`;

export default axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
});

//
// ('pro.openweathermap.org/data/2.5/forecast/hourly?q=München,DE&appid={API key}');
