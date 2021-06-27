import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import getCurrentDayTime from '../../utils/getCurrentDayTime';

const LineChartViz = (props) => {
	const temp = [];
	const labels = [];
	const humidity = [];
	const windSpeed = [];

	if (props.currentCity.city) {
		props.currentCity.list.forEach((elem) => {
			temp.push((elem.main.temp - 273).toFixed(0));
			labels.push(getCurrentDayTime(elem.dt_txt));
			humidity.push(elem.main.humidity);
			windSpeed.push(elem.wind.speed);
		});
	}

	if (props.forecast) {
		props.forecast.forEach((elem) => {
			temp.push((elem.main.temp - 273).toFixed(0));
			labels.push(getCurrentDayTime(elem.dt_txt));
			humidity.push(elem.main.humidity);
			windSpeed.push(elem.wind.speed);
		});
	}

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Temperature',
				data: temp,
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.2)',
			},
			{
				label: 'Humidity',
				data: humidity,
				fill: false,
				backgroundColor: 'rgb(0, 255, 0)',
				borderColor: 'rgb(0, 255, 0, 0.2)',
			},
			{
				label: 'Wind Speed',
				data: windSpeed,
				fill: false,
				backgroundColor: 'rgb(0, 255, 255)',
				borderColor: 'rgb(0, 255, 255, 0.2)',
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: false,
					},
				},
			],
		},
		responsive: false,
	};

	console.log(props.forecast);
	console.log(temp);
	console.log(labels);
	console.log(windSpeed);
	console.log(humidity);
	console.log(props.currentCity);

	return (
		<div>
			<Line data={data} options={options} width="1050" height="400" />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentCity: state.currentCity,
		forecast: state.forecast.cityForecast,
	};
};

export default connect(mapStateToProps)(LineChartViz);
