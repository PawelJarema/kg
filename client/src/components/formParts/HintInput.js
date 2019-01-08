import React, { Component } from 'react';
import './HintInput.css';

class HintInput extends Component {
	constructor(props) {
		super(props);
		this.state = { hints: [] }
	}

	handleInput(event) {
		const { url, params, onInput } = this.props,
				text 		  		   = event.target.value;

		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				text,
				...params
			})
		})
		.then(res => res.json())
		.then(hints => this.setState(
			{ hints }, 
			() => {
				if (text.length > 2) {
					const hints_left = hints.filter(hint => hint.name.toLowerCase() === text.toLowerCase());
					if (hints_left.length) {
						console.log(hints_left);
						this.hintClick(hints_left[0]);
					}
				}
			}
		));

		if (onInput) {
			onInput({ target: this.inputRef });
		}
	}

	hintClick(wojewodztwo) {
		const { callback } = this.props;
		if (callback) {
			callback(wojewodztwo.code);
		}

		this.inputRef.value = wojewodztwo.name;
		this.setState({ hints: [] });
	}

	render() {
		const { name, label, required, onInvalid } = this.props,
			  { hints } 	  					   = this.state;

		return (
			<span className="hint-input">
				<label htmlFor={name}>{ label }</label>
				<input ref={(e) => this.inputRef = e} name={name} type="text" onChange={this.handleInput.bind(this)} required={required} onInvalid={onInvalid}/>
				{
					hints.length > 0 && (
						<ul className="hint-list">
						{ 
							hints.map((hint, i) => <li key={"hint_" + i} onClick={() => this.hintClick(hint)}>{ hint.name } { hint.wcode }</li>) 
						}
						</ul>
					)
				}
			</span>
		);
	}
}

export default HintInput;