import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../../actions/studentActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddStudentModal = ({ addStudent }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter first and last name' });
		} else {
			addStudent({
				firstName,
				lastName
			});

			M.toast({ html: `${firstName} ${lastName} was added as student` });
			// Clear Fields
			setFirstName('');
			setLastName('');
		}
	};

	return (
		<div id='add-student-modal' className='modal'>
			<div className='modal-content'>
				<h4>New Student</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
						<label htmlFor='firstName' className='active'>
							First Name
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
						<label htmlFor='lastName' className='active'>
							Last Name
						</label>
					</div>
				</div>
			</div>

			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='modal-close waves-effect blue waves-light btn'
				>
					Enter
				</a>
			</div>
		</div>
	);
};

export default connect(
	null,
	{ addStudent }
)(AddStudentModal);
