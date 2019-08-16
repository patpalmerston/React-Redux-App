import {
	GET_STUDENTS,
	ADD_STUDENT,
	DELETE_STUDENT,
	SET_LOADING,
	STUDENTS_ERROR
} from '../actions/types';

const initialState = {
	students: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_STUDENTS:
			return {
				...state,
				students: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
