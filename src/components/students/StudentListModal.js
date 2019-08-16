import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StudentItem from './StudentItem';
import { getStudents } from '../../actions/studentActions';

const StudentListModal = ({student: {students, loading}, getStudents}) => {

	useEffect(() => {
		getStudents();
		// eslint-disable-next-line
	}, []);

	return (
		<div id='student-list-modal' className='modal'>
			<div className='modal-content'>
				<h4>Student List</h4>
				<ul className='collection'>
					{!loading &&
						students !== null &&
						students.map(student => (
							<StudentItem student={student} key={student.id} />
						))}
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	student: state.student
});

export default connect(
	mapStateToProps,
	{ getStudents }
)(StudentListModal);
