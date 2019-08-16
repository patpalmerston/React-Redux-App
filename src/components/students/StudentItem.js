import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from '../../actions/studentActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const StudentItem = ({
	student: { id, firstName, lastName },
	deleteStudent
}) => {
	const onDelete = () => {
		deleteStudent(id);
		M.toast({ html: 'Student Deleted' });
	};
	return (
		<li className='collection-item'>
			<div>
				{firstName} {lastName}
				<a href='#!' className='secondary-content' onClick={onDelete}>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

export default connect(
	null,
	{ deleteStudent }
)(StudentItem);
