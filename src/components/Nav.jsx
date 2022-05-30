import React from 'react';
import headShot from '../assets/headshot.jpeg';

const Nav = () => {
	return (
		<div className='nav-container'>
			<div className='header'>
				<img src={headShot} alt='' />
				<span>Software Engineer</span>
			</div>
			<div className='links'>
				<div className='tooltip'>
					<a
						href='https://github.com/asherman-ca'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fa-brands fa-github-square'></i>
					</a>
					<span className='tooltip-text'>https://github.com/asherman-ca</span>
				</div>
				<div className='tooltip'>
					<i className='fa-solid fa-square-envelope'></i>
					<span className='tooltip-text'>asherman.ca@gmail.com</span>
				</div>
				<div className='tooltip'>
					{/* <i className='fa-solid fa-phone tooltip'></i> */}
					<i className='fa-solid fa-square-phone'></i>
					<span className='tooltip-text'>415.652.0317</span>
				</div>
				<span className='tooltip-default'>Alex Sherman</span>
			</div>
		</div>
	);
};

export default Nav;
