import React, { Component } from 'react';
import search from '../images/search.svg';
import { IconButton } from '@material-ui/core';

import { connect } from 'react-redux';
import { onInputChange, currentCity } from '../../actions';
import openWeather from '../../apis/openWeather';

class Searchbar extends Component {
	async getSearchResult() {
		const response = await openWeather.get(
			`/forecast?us&appid=e3b663fd167db46ac64cf117cc7097c0&q=${this.props.inputText}`
		);
		return response.data;
	}

	render() {
		return (
			<div className="searchbar">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						this.getSearchResult().then((response) => {
							console.log(response);
							console.log(this.props);
							return this.props.currentCity(response);
						});
					}}
					className="searchbar__form"
				>
					<input
						onChange={(e) =>
							this.props.onInputChange(e.target.value)
						}
						type="text"
						required
						className="searchbar__input"
						placeholder="Search a City..."
					/>
					<span className="border-bottom"></span>
					<span className="searchbar__icon">
						<IconButton>
							<img
								className="searchbar__button"
								src={search}
								alt="search"
							/>
						</IconButton>
					</span>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { inputText: state.inputText, currentCity: state.currentCity };
};

export default connect(mapStateToProps, { onInputChange, currentCity })(
	Searchbar
);
