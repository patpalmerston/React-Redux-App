import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [teamLead, setTeamLead] = useState('');

	const onSubmit = () => {
		if (message === '' || teamLead === '') {
			M.toast({ html: 'Please enter Notes and Team Lead' });
		} else {
			console.log(message, attention, teamLead);
			// Clear Fields
			setMessage('');
			setTeamLead('');
			setAttention(false);
		}
	};

	return (
		<div id='add-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Enter Team Notes</h4>
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
							name='teamLead'
							value={teamLead}
							className='browser-default'
							onChange={e => setTeamLead(e.target.value)}
						>
							<option value='' disabled>
								Select Team Lead
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

export default AddLogModal;
