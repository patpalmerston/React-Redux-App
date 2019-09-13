import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../actions/studentActions';

const StudentSelectOptions = ({
	getStudents,
	student: { students, loading }
}) => {
	useEffect(() => {
		getStudents();
		// eslint-disable-next-line
	}, []);
console.log('students', students)
	return (
		!loading &&
		students !== null &&
		students.map(s => (
			<option>
				{s.firstName} {s.lastName}
			</option>
		))
	);
};

const mapStateToProps = state => ({
	student: state.student
});

export default connect(
	mapStateToProps,
	{ getStudents }
)(StudentSelectOptions);
