import React, { useState } from 'react';

const ResumeListItem = () => {
	const [show, setShow] = useState(false);
	return (
		<div className='resume-list-item'>
			<div className='header'>
				<i
					onClick={() => setShow(!show)}
					className={show ? 'fa-solid fa-folder-open' : 'fa-solid fa-folder'}
				/>
				<span className='title'>Title</span>
			</div>
			{show && <div className='details'>details</div>}
		</div>
	);
};

export default ResumeListItem;
