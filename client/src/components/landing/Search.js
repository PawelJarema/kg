import React, { Component } from 'react';
import Icon from '../icons/Icon';

class Search extends Component {
	render() {
		return (
			<form className="search-by-city">
				<fieldset>
					<label for="city">Miejscowość</label>
					<div className="flex-wrapper">
						<input type="text" id="city" placeholder="twoja miejscowość" />
						<button class="button-primary" type="submit"><Icon>search</Icon> Szukaj</button>
					</div>
				</fieldset>
			</form>
		)
	}
}

export default Search;
