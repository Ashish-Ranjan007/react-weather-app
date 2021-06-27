const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getCurrentDate = () => {
	const date = new Date();
	const month = months[date.getMonth()];
	const day = weeks[date.getDay()];
	return `${day}, ${date.getDate()} ${month}`;
};
