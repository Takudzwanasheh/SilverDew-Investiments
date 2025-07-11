import React, { useEffect, useState } from "react";
import axios from "axios";
import "./project.scss";

export default function Projects() {
	const [projects, setProjects] = useState([]);
	console.log("Project", projects);

	useEffect(() => {
		axios
			.get("https://siverdewinvestments-5c42fdd5e7e0.herokuapp.com/building")
			.then((response) => {
				setProjects(response.data);
			});
	}, []);

	return (
		<div className='project-images'>
			{projects.map((project, index) => (
				<div className='project' key={index}>
					<h2>{project.ProjectTitle}</h2>
					<div>
						<img src={project.FirstImage} alt='Road repair' />
						<img
							className='small'
							src={project.SecondImage}
							alt={project.ProjectTitle}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
