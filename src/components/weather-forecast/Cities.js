import React from 'react';
import Amsterdam from '../images/Amsterdam.jpg';
import Budapest from '../images/Budapest.jpg';
import London from '../images/London.jpg';
import Paris from '../images/Paris.jpg';
import Tokyo from '../images/Tokyo.jpg';
import NewDelhi from '../images/NewDelhi.jpg';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';
import { Grid } from '@material-ui/core';

import { connect } from 'react-redux';
import { currentCity } from '../../actions';
import openWeather from '../../apis/openWeather';

const cities = [
	{
		title: 'Amsterdam',
		link: Amsterdam,
		time: '11:20',
		day: true,
	},
	{
		title: 'London',
		link: London,
		time: '12:19',
		day: true,
	},
	{
		title: 'Budapest',
		link: Budapest,
		time: '1:16',
		day: true,
	},
	{
		title: 'Paris',
		link: Paris,
		time: '19:55',
		night: true,
	},
	{
		title: 'Tokyo',
		link: Tokyo,
		time: '2:11',
		day: true,
	},
	{
		title: 'New Delhi',
		link: NewDelhi,
		time: '11:12',
		day: true,
	},
];

const Cities = (props) => {
	const getSearchResult = async (city) => {
		const response = await openWeather.get(
			`/forecast?us&appid=e3b663fd167db46ac64cf117cc7097c0&q=${city}`
		);
		return response.data;
	};

	return (
		<div className="cities">
			<Grid container spacing={3}>
				{cities.map((city, key) => {
					let translate = '';
					if (props.currentCity.city) {
						translate =
							props.currentCity.city.name === city.title
								? 'translateY(-10%)'
								: '';
					}
					return (
						<Grid item sm={2} key={key}>
							<div
								onClick={() => {
									translate = 'translateY(-10%)';
									getSearchResult(city.title).then(
										(response) => {
											console.log(response);
											return props.currentCity(response);
										}
									);
								}}
								className="city__content"
								style={{ transform: translate }}
							>
								<img
									className="city__image"
									src={city.link}
									alt={city.title}
								/>
								{/* <p className="city__text">
									11:12
									<img
										className="city__weatherIcon"
										src={city.day ? sun : moon}
										alt="sun"
									/>
								</p> */}
							</div>
							<p className="city__title">{city.title}</p>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { currentCity: state.currentCity };
};

export default connect(mapStateToProps, { currentCity })(Cities);
