import React from 'react';

const Nav = () => {
	return (
		<div className='nav-container'>
			<span>
				<a
					href='https://github.com/asherman-ca'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fa-brands fa-github' /> Alex Sherman
				</a>
			</span>
			<div>
				<i className='fa-solid fa-envelope tooltip'>
					<span className='tooltip-text'>asherman.ca@gmail.com</span>
				</i>
				<i className='fa-solid fa-phone tooltip'>
					<span className='tooltip-text'>415.652.0317</span>
				</i>
				{/* <span>asherman.ca@gmail.com</span> */}
				{/* <span>415.652.0317</span> */}
			</div>
		</div>
	);
};

export default Nav;
