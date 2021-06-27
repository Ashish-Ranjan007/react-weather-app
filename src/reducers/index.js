import { combineReducers } from 'redux';

const fetchReducer = (state = [], action) => {
	if (action.type === 'FETCH_DATA') {
		return action.payload;
	} else {
		return state;
	}
};

const onInputChangeReducer = (state = '', action) => {
	if (action.type === 'INPUT_CHANGE') {
		return action.payload;
	}
	return state;
};

const currentCityReducer = (state = {}, action) => {
	if (action.type === 'CURRENT_CITY') {
		return action.payload;
	} else {
		return state;
	}
};

export default combineReducers({
	forecast: fetchReducer,
	inputText: onInputChangeReducer,
	currentCity: currentCityReducer,
});
