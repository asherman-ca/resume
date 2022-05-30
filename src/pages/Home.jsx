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
				<span
					onClick={() => setShowExperience(!showExperience)}
					className='title'
				>
					Experience
				</span>
				<div className='list item-list'>
					{resumeData.experience.map((job) => {
						return (
							<ResumeListItem
								key={job.title}
								item={job}
								itemShow={showExperience}
							/>
						);
					})}
				</div>
			</div>
			<div className='section'>
				{console.log('show projects', showProjects)}
				<span onClick={() => setShowProjects(!showProjects)} className='title'>
					Projects
				</span>
				<div className='list'>
					{resumeData.projects.map((project) => {
						return (
							<ResumeListItem
								key={project.title}
								item={project}
								itemShow={showProjects}
							/>
						);
					})}
				</div>
			</div>
			<div className='section'>
				<span className='title'>Education</span>
				<div className='list'>
					<div>
						<span>App Academy</span>
					</div>
					<div>
						<span>Union College</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
