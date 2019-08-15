import React from 'react';

const StudentItem = ({ student }) => {
	return (
		<li className='collection-item'>
			<div>
				{student.firstName} {student.lastName}
				<a href='#!' className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

export default StudentItem;
