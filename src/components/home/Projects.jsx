import React from 'react';
import ProjectCard from './ProjectCard';


export default function Projects(props){

   
    return(
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {props.projects.map(project=>{
                    return <ProjectCard 
                    key={project._id}
                    data={project} 
                    {...props}
                    />
                })}
               
            </div>
        </div>
    )
}