import React, { useState, useEffect } from 'react';
import ResumeListItem from '../components/ResumeListItem';
import { resumeData } from '../data/resume';

// const resumeData = {
// 	experience: [],
// 	projects: [
// 		{ title: 'Tickr' },
// 		{ title: 'Miyagi' },
// 		{ title: 'MyOnlinePool' },
// 	],
// 	education: [],
// };

const Home = () => {
	const [resume, setResume] = useState();
	const [showExperience, setShowExperience] = useState(true);
	const [showProjects, setShowProjects] = useState(true);

	useEffect(() => {
		setResume(resumeData);
	}, []);

	return (
		<div className='home-container'>
			{console.log('resume', resume)}
			<div className='section'>
				<span className='title'>Experience</span>
				<div className='list'></div>
			</div>
			<div className='section'>
				{console.log('show projects', showProjects)}
				<span className='title'>Projects</span>
				<div className='button' onClick={() => setShowProjects(!showProjects)}>
					button
				</div>
				<div className='list'>
					{showProjects &&
						resumeData.projects.map((project) => {
							return (
								<ResumeListItem
									key={project.title}
									item={project}
									itemShow={true}
								/>
							);
						})}
					{!showProjects &&
						resumeData.projects.map((project) => {
							return (
								<ResumeListItem
									key={project.title}
									item={project}
									itemShow={false}
								/>
							);
						})}
				</div>
			</div>
			<div className='section'>
				<span className='title'>Education</span>
			</div>
		</div>
	);
};

export default Home;
