import React from 'react';

const TeamLeadItem = ({ teamLead }) => {
	return (
		<li className='collection-item'>
			<div>
				{teamLead.firstName} {teamLead.lastName}
				<a href='#!' className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

export default TeamLeadItem;
