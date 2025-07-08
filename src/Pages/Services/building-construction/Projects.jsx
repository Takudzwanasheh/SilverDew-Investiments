import React from "react";
import { projectsData } from "./date"; // Corrected the import from "date" to "data"
import "./project.scss";
export default function Projects() {
	return (
		<div className='project-images'>
			{projectsData.map((project, index) => (
				<div className='project' key={index}>
					<h2>{project.title}</h2>
					<div>
						<img src={project.image1} alt='Road repair' />
						<img className='small' src={project.image2} alt='Road repair' />
					</div>
				</div>
			))}
		</div>
	);
}
