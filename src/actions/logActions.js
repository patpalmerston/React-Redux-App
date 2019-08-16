import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SEARCH_LOGS,
	SET_CURRENT,
	CLEAR_CURRENT
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

// update log from server
export const updateLog = log => async dispatch => {
	try {
		setLoading();
		const res = await axios.put(`/logs/${log.id}`, log);

		dispatch({
			type: UPDATE_LOG,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.msg
		});
	}
};

//Search Server logs
export const searchLogs = text => async dispatch => {
	try {
		setLoading();
		const res = await axios.get(`/logs?q=${text}`);

		dispatch({
			type: SEARCH_LOGS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.msg
		});
	}
};

// set Current in order to edit we need to populate a current state to edit
export const setCurrent = log => {
	return {
		type: SET_CURRENT,
		payload: log
	};
};

// set Current in order to edit we need to populate a current state to edit
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	};
};

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
