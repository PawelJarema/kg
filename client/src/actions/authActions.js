import { getMessage } from './functions';
import axios from 'axios';

export const registerCircle = formData => async dispatch => {
	const res = await axios.post('/auth/circle', formData);
	getMessage(dispatch);
}