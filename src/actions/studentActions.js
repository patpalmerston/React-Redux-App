import {
	GET_STUDENTS,
	ADD_STUDENT,
	DELETE_STUDENT,
	SET_LOADING,
	STUDENTS_ERROR
} from './types';

import axios from 'axios';

// get Student from server
export const getStudents = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get('/students');

		dispatch({
			type: GET_STUDENTS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: STUDENTS_ERROR,
			payload: err.response.msg
		});
	}
};

// set loading
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
