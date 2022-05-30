import React, { useState } from 'react';

const ResumeListItem = ({ item, itemShow }) => {
	const [show, setShow] = useState(itemShow);
	return (
		<div className='resume-list-item'>
			<div className='header'>
				<i
					onClick={() => setShow(!show)}
					className={show ? 'fa-solid fa-folder-open' : 'fa-solid fa-folder'}
				/>
				<span className='title'>{item.title}</span>
			</div>
			{show && <div className='details'>details</div>}
		</div>
	);
};

export default ResumeListItem;
