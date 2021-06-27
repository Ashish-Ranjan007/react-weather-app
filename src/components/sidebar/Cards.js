import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import { getCurrentDate } from '../../utils/getCurrentDate';
import getCountry from '../../utils/countryCodes';

class Cards extends Component {
	componentDidMount() {
		this.props.fetchData();
	}
	render() {
		console.log(this.props.forecast.cityForecast, this.props.forecast);
		if (this.props.forecast.cityForecast) {
			return (
				<Card>
					<CardContent>
						<div className="card__header">
							<div className="left">
								<img
									src={`http://openweathermap.org/img/w/${this.props.forecast.cityForecast[0].weather[0].icon}.png`}
								/>
							</div>
							<div className="right">
								<p className="today">Today</p>
								<p className="time">
									{this.props.forecast.cityForecast[0].dt_txt
										.split(' ')[1]
										.slice(0, 5)}
								</p>
								<p className="date">{getCurrentDate()}</p>
							</div>
						</div>
						<div className="card__body">
							<p className="temperature">
								{parseFloat(
									this.props.forecast.cityForecast[0].main
										.temp - 273
								).toFixed(2)}
								<span>&#176;C</span>
							</p>
							<p className="city">New Delhi</p>
							<p className="country">
								{getCountry(
									this.props.forecast.cityData.city.country
								)}
							</p>

							<div className="humidity">
								<div className="humidity__content">
									<p className="text">Humidity:</p>
									<p className="value">
										{
											this.props.forecast.cityForecast[0]
												.main.humidity
										}
										%
									</p>
								</div>
								<div
									className="border-bottom"
									style={{
										width: `${this.props.forecast.cityForecast[0].main.humidity}%`,
									}}
								></div>
							</div>
							<div className="precipitation">
								<div className="precipitation__content">
									<p className="text">Precipitation:</p>
									<p className="value">25%</p>
								</div>
								<div className="border-bottom"></div>
							</div>
							<div className="wind">
								<p className="text">Wind:</p>
								<p className="value">
									{
										this.props.forecast.cityForecast[0].wind
											.speed
									}
									km/h
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			);
		} else {
			return <Card></Card>;
		}
	}
}

const mapStateToProps = (state) => {
	return { forecast: state.forecast };
};

export default connect(mapStateToProps, { fetchData })(Cards);
