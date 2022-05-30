import React, { useEffect, useState } from 'react';

const ResumeListItem = ({ item, itemShow }) => {
	const [show, setShow] = useState(itemShow);

	useEffect(() => {
		setShow(itemShow);
	}, [itemShow]);

	return (
		<div className='resume-list-item'>
			<div className='header'>
				<span className='title'>{item.title.product}&nbsp;</span>
				<span className='detail'>- {item.title.detail}</span>
				{item.title.link && (
					<a target='_blank' rel='noopener noreferrer' href={item.title.link}>
						&nbsp;- <i className='fa-solid fa-arrow-up-right-from-square'></i>
					</a>
				)}
			</div>
			{show && (
				<div className='details'>
					{item.details.map((detail) => {
						return (
							<div className='details-item'>
								<div>-&nbsp;</div>
								<div>{detail}</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ResumeListItem;
