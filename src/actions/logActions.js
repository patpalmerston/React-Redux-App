import {
	SET_LOADING,
	LOGS_ERROR,
	GET_LOGS,
	ADD_LOG,
	DELETE_LOG
} from './types';

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

// add logs to server
export const addLog = log => async dispatch => {
	try {
		setLoading();
		const res = await axios.post('/logs', log);

		dispatch({
			type: ADD_LOG,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.msg
		});
	}
};

// Delete log from server
export const deleteLog = id => async dispatch => {
	try {
		setLoading();
		await axios.delete(`/logs/${id}`);

		dispatch({
			type: DELETE_LOG,
			payload: id
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
