import { GET_lOGS, SET_LOADING, LOGS_ERROR } from './types';

import axios from 'axios';

export const getLogs = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get('/logs');

		dispatch({
			type: GET_lOGS,
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
