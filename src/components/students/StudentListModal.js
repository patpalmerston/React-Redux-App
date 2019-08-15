import React, { useState, useEffect } from 'react';
import StudentItem from './StudentItem';

const StudentListModal = () => {
	const [students, setStudents] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getStudents();
		// eslint-disable-next-line
	}, []);

	const getStudents = async () => {
		setLoading(true);
		const res = await fetch('/students');
		const data = await res.json();

		setStudents(data);
		setLoading(false);
	};

	return (
		<div id='student-list-modal' className='modal'>
			<div className='modal-content'>
				<h4>Student List</h4>
				<ul className='collection'>
					{!loading &&
						students.map(student => (
							<StudentItem student={student} key={student.id} />
						))}
				</ul>
			</div>
		</div>
	);
};

export default StudentListModal;
