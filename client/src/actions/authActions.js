import { getMessage } from './functions';
import axios from 'axios';

export const login = formData => async dispatch => {
	const res = await axios.post('/auth/login', formData);
	if (res.data) {
		window.location.href = res.data;
		setTimeout(() => getMessage(dispatch), 250);
	} else {
		getMessage(dispatch);
	}
}

export const remindPassword = formData => async dispatch => {
	await axios.post('/auth/remindPassword', formData);
	getMessage(dispatch);
}

export const registerUser = formData => async dispatch => {
	await axios.post('/auth/register', formData);
	getMessage(dispatch);
}

export const registerCircle = formData => async dispatch => {
	await axios.post('/auth/circle', formData);
	getMessage(dispatch);
}