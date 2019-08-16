import { combineReducers } from 'redux';
import logReducer from './logReducer';
import studentReducer from './studentReducer';

export default combineReducers({
	log: logReducer,
	student: studentReducer
});
