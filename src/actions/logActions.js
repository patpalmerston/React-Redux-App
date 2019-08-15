import { SET_LOADING, LOGS_ERROR, GET_LOGS } from './types';

import axios from 'axios';

// get logs from server
export const getLogs = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get('/logs');

		dispatch({
			type: GET_LOGS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.msg
		});
	}
};

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
