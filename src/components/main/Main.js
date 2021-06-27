import React from 'react';
import Searchbar from './Searchbar';
import Account from '../account/Account';
import LineChartViz from '../chart/LineChartViz';
import WeatherStats from '../weather-stats/WeatherStats';
import WeatherForecast from '../weather-forecast/WeatherForecast';

const Main = () => {
	return (
		<div className="main">
			<div className="main__searchbar">
				<Searchbar />
				<Account />
			</div>
			<div className="main__forecast">
				<WeatherForecast />
			</div>
			<div className="main__stats">
				<WeatherStats />
			</div>
			<div className="main__chart">
				<LineChartViz />
			</div>
		</div>
	);
};

export default Main;
