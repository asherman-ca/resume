import React from 'react';

const Nav = () => {
	return (
		<div className='nav-container'>
			<span>Alex Sherman</span>
			<div>
				<div className='tooltip'>
					<a
						href='https://github.com/asherman-ca'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fa-brands fa-github' />
					</a>
					<span className='tooltip-text'>https://github.com/asherman-ca</span>
				</div>
				<div className='tooltip'>
					<i className='fa-solid fa-envelope'></i>
					<span className='tooltip-text'>asherman.ca@gmail.com</span>
				</div>
				<div className='tooltip'>
					<i className='fa-solid fa-phone tooltip'></i>
					<span className='tooltip-text'>415.652.0317</span>
				</div>

				{/* <span>asherman.ca@gmail.com</span> */}
				{/* <span>415.652.0317</span> */}
			</div>
		</div>
	);
};

export default Nav;
