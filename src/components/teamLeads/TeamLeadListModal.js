import React, { useState, useEffect } from 'react';
import TeamLeadItem from './TeamLeadItem';

const TeamLeadListModal = () => {
	const [teamLeads, setTeamLeads] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getTeamLeads();
		// eslint-disable-next-line
	}, []);

	const getTeamLeads = async () => {
		setLoading(true);
		const res = await fetch('/teamLeads');
		const data = await res.json();

		setTeamLeads(data);
		setLoading(false);
	};

	return (
		<div id='teamLead-list-modal' className='modal'>
			<div className='modal-content'>
				<h4>Team Lead List</h4>
				<ul className='collection'>
					{!loading &&
						teamLeads.map(teamLead => (
							<TeamLeadItem teamLead={teamLead} key={teamLead.id} />
						))}
				</ul>
			</div>
		</div>
	);
};

export default TeamLeadListModal;
