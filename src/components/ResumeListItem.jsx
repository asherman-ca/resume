import React, { useEffect, useState } from 'react';

const ResumeListItem = ({ item, itemShow }) => {
	const [show, setShow] = useState(itemShow);

	useEffect(() => {
		setShow(itemShow);
	}, [itemShow]);

	return (
		<div className='resume-list-item'>
			<div className='header'>
				<span className='title'>{item.title}</span>
			</div>
			{show && (
				<div className='details'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorum
					dolores officia. Impedit qui quisquam delectus rerum iusto voluptates!
					Velit atque aliquid saepe repellendus delectus, harum totam sunt
					similique laboriosam.
				</div>
			)}
		</div>
	);
};

export default ResumeListItem;
