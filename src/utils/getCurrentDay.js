const getCurrentDay = (currentDay) => {
	let year = parseInt(currentDay.split('-')[0]);
	let month = parseInt(currentDay.split('-')[1] - 1);
	let day = parseInt(currentDay.split('-')[2]);

	let date = new Date(year, month, day);
	const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return weeks[date.getDay()];
};

export default getCurrentDay;
