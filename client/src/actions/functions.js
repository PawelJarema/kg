import { MESSAGE } from './types';
import axios from 'axios';

export const getMessage = async (dispatch) => {
	const res = await axios.get('/api/message');
	dispatch({ type: MESSAGE, payload: res.data });
}