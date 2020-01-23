import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects(props){
    return(
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                <ProjectCard image="https://images.unsplash.com/photo-1579699915326-9019066707af"/>
                <ProjectCard image="https://images.unsplash.com/photo-1579699915326-9019066707af"/>
                <ProjectCard image="https://images.unsplash.com/photo-1579699915326-9019066707af"/>
            </div>
        </div>
    )
}