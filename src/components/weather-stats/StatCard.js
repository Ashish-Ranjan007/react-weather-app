import React from 'react';
import getCurrentDay from '../../utils/getCurrentDay.js';

const StatCard = (props) => {
	const datetime = props.dateTime;
	const date = datetime.split(' ')[0];
	const time = datetime.split(' ')[1];

	const currentHour = time.split(':')[0];

	return (
		<div className="statCard">
			<img
				className="statCard__image"
				src={`http://openweathermap.org/img/w/${props.icon}.png`}
				alt="sun"
			/>
			<p className="statCard__minmaxTemp">{`${parseFloat(
				props.minTemp - 273
			).toFixed(0)}/${parseFloat(props.maxTemp - 273).toFixed(0)}`}</p>
			<p className="statCard__date">{`${currentHour} ${getCurrentDay(
				date
			)}`}</p>
		</div>
	);
};

export default StatCard;
