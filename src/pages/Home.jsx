import React, { useState, useEffect } from 'react';
import ResumeListItem from '../components/ResumeListItem';
import { resumeData } from '../data/resume';

const Home = () => {
	const [resume, setResume] = useState();
	const [showExperience, setShowExperience] = useState(true);
	const [showProjects, setShowProjects] = useState(false);

	useEffect(() => {
		setResume(resumeData);
	}, []);

	return (
		<div className='home-container'>
			<div className='section'>
				<span
					onClick={() => setShowExperience(!showExperience)}
					className='title'
				>
					<div className='icon-container'>
						<i
							className={
								showExperience
									? 'fa-solid fa-chevron-down'
									: 'fa-solid fa-chevron-right'
							}
						/>
					</div>
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
				<span onClick={() => setShowProjects(!showProjects)} className='title'>
					<div className='icon-container'>
						<i
							className={
								showProjects
									? 'fa-solid fa-chevron-down'
									: 'fa-solid fa-chevron-right'
							}
						/>
					</div>
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
				<div className='list edu-list'>
					<div>
						<span className='title'>App Academy</span>
					</div>
					<div>
						<span className='title'>Union College</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
