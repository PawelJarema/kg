import { MESSAGE } from '../actions/types';

export default function (state = null, action) {
	switch (action.type) {
		case MESSAGE:
			return action.payload || false;
		default:
			return state;
	}
}