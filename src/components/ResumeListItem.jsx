import React, { useEffect, useState } from 'react';

const ResumeListItem = ({ item, itemShow }) => {
	const [show, setShow] = useState(itemShow);

	useEffect(() => {
		setShow(itemShow);
	}, [itemShow]);

	return (
		<div className='resume-list-item'>
			<div className='header' onClick={() => setShow(!show)}>
				<i
					className={
						show
							? 'fa-solid fa-circle-chevron-down'
							: 'fa-solid fa-circle-chevron-right'
					}
				/>
				<span className='title'>{item.title}</span>
			</div>
			{show && <div className='details'>details</div>}
		</div>
	);
};

export default ResumeListItem;
