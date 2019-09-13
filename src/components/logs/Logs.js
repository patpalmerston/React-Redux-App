import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);

	if (loading || logs === null) {
		return <PreLoader />;
	}

	return (
		<div>
			<ul className='collection with-header'>
				<li className='collection-header'>
					<h4 className='center'>Team Lead Notes</h4>
				</li>
				{!loading && logs.length === 0 ? (
					<p className='center'>No Notes yet ...</p>
				) : (
					logs.map(log => <LogItem log={log} key={log.id} />)
				)}
			</ul>
		</div>
	);
};

const mapStateToProps = state => ({
	log: state.log
});

export default connect(
	mapStateToProps,
	{ getLogs }
)(Logs);
