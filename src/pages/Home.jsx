import React, { useState, useEffect } from 'react';
import ResumeListItem from '../components/ResumeListItem';
import { resumeData } from '../data/resume';

const Home = () => {
	const [resume, setResume] = useState({});
	useEffect(() => {
		setResume(resumeData);
	}, []);
	return (
		<div className='home-container'>
			{console.log('resume', resume)}

			<ResumeListItem />
		</div>
	);
};

export default Home;
