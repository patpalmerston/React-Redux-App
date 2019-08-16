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
			payload: err.response.statusText
		});
	}
};

// add student to server
export const addStudent = student => async dispatch => {
	try {
		setLoading();
		const res = await axios.post('/students', student);

		dispatch({
			type: ADD_STUDENT,
			payload: res.student
		});
	} catch (err) {
		dispatch({
			type: STUDENTS_ERROR,
			payload: err.response.statusText
		});
	}
};

// delete students
export const deleteStudent = id => async dispatch => {
	try {
		setLoading();
		await axios.delete(`/students/${id}`);

		dispatch({
			type: DELETE_STUDENT,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: STUDENTS_ERROR,
			payload: err.response.statusText
		});
	}
};

// set loading
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
