import openWeather from '../apis/openWeather';
// const APIKEY1 = '3e0acdf3a70764c639f8b277b9f95246';
// const APIKEY2 = 'e3b663fd167db46ac64cf117cc7097c0'

export const fetchData = () => {
	return async (dispatch) => {
		const response = await openWeather.get(
			'/forecast?us&appid=e3b663fd167db46ac64cf117cc7097c0&q=bhubaneswar'
		);

		dispatch({
			type: 'FETCH_DATA',
			payload: {
				cityForecast: response.data.list,
				cityData: response.data,
			},
		});
	};
};

export const onInputChange = (text) => {
	return {
		type: 'INPUT_CHANGE',
		payload: text,
	};
};

export const currentCity = (city) => {
	return {
		type: 'CURRENT_CITY',
		payload: city,
	};
};
