import React, { useState, useEffect } from 'react';
import ResumeListItem from '../components/ResumeListItem';
import { resumeData } from '../data/resume';

const Home = () => {
	const [resume, setResume] = useState([]);
	const [showExperience, setShowExperience] = useState(true);
	const [showProjects, setShowProjects] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setResume(resumeData);
		setLoading(false);
	}, [resumeData]);

	if (loading) {
		return <div>loading</div>;
	}

	const onShowExperience = () => {
		setShowExperience(!showExperience);
		setShowProjects(!showProjects);
	};

	return (
		<div className='home-container'>
			<div className='section'>
				<span
					// onClick={() => setShowExperience(!showExperience)}
					onClick={() => onShowExperience()}
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
					{resume.experience.map((job) => {
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
				<span
					// onClick={() => setShowProjects(!showProjects)}
					onClick={() => onShowExperience()}
					className='title'
				>
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
					{resume.projects.map((project) => {
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
