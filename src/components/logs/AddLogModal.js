import React, { useState } from 'react';
import StudentSelectOptions from '../students/StudentSelectOptions'
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logActions';

const AddLogModal = ({ addLog }) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [student, setStudent] = useState('');

	const onSubmit = () => {
		if (message === '' || student === '') {
			M.toast({ html: 'Please enter Notes and Student' });
		} else {
			const newLog = {
				message,
				attention,
				student,
				date: new Date()
			};

			addLog(newLog);

			M.toast({ html: `Log add by ${student}` });

			// Clear Fields
			setMessage('');
			setStudent('');
			setAttention(false);
		}
	};

	return (
		<div id='add-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Enter Notes</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
						<label htmlFor='message' className='active'>
							Note Message
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<select
							name='student'
							value={student}
							className='browser-default'
							onChange={e => setStudent(e.target.value)}
						>
							<option value='' disabled>
								Select Student
							</option>
							<StudentSelectOptions />
						</select>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={e => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
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

const modalStyle = {
	width: '75%',
	height: '75%'
};

export default connect(
	null,
	{ addLog }
)(AddLogModal);
