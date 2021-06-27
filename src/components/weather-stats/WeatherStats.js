import react from 'react';
import StatCard from './StatCard';
import { connect } from 'react-redux';

const WeatherStats = (props) => {
	if (props.currentCity.city) {
		const statList = props.currentCity.list.map((stat) => {
			return (
				<StatCard
					dateTime={stat.dt_txt}
					icon={stat.weather[0].icon}
					minTemp={stat.main.temp_min}
					maxTemp={stat.main.temp_max}
				/>
			);
		});

		return (
			<div className="weatherStats">
				<p>{props.currentCity.city.name}</p>
				<div className="statCards">{statList.slice(0, 10)}</div>
			</div>
		);
	}
	if (props.forecast.cityData) {
		const statList = props.forecast.cityData.list.map((stat) => {
			return (
				<StatCard
					dateTime={stat.dt_txt}
					icon={stat.weather[0].icon}
					minTemp={stat.main.temp_min}
					maxTemp={stat.main.temp_max}
				/>
			);
		});

		return (
			<div className="weatherStats">
				<p>{props.forecast.cityData.city.name}</p>
				<div className="statCards">{statList.slice(0, 10)}</div>
			</div>
		);
	}
	return <div>Loading...</div>;
};

const mapStateToProps = (state) => {
	return { currentCity: state.currentCity, forecast: state.forecast };
};

export default connect(mapStateToProps)(WeatherStats);
