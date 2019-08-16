import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions';

const EditLogModal = ({ current, updateLog }) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [student, setStudent] = useState('');

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setStudent(current.student);
		}
	}, [current]);

	const onSubmit = () => {
		if (message === '' || student === '') {
			M.toast({ html: 'Please enter Notes and Student' });
		} else {
			const updLog = {
				id: current.id,
				message,
				attention,
				student,
				date: new Date()
			};

			updateLog(updLog);
			M.toast({ html: 'Log Updated' });

			// Clear Fields
			setMessage('');
			setStudent('');
			setAttention(false);
		}
	};

	return (
		<div id='edit-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Edit Notes</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
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
							<option value='Joe Neviel'>Joe Neviel</option>
							<option value='Reda Tangrin'>Reda Tangrin</option>
							<option value='Skyler Derry'>Skyler Derry</option>
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

const mapStateToProps = state => ({
	current: state.log.current
});

export default connect(
	mapStateToProps,
	{ updateLog }
)(EditLogModal);
