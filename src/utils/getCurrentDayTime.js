import getCurrentDay from './getCurrentDay';

const getCurrentDayTime = (str) => {
	const weekDay = getCurrentDay(str.split(' ')[0]);
	return str.split(' ')[1].split(':')[0] + ' ' + weekDay;
};

export default getCurrentDayTime;
