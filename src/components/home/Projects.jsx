import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import Loader from '../Loader';
import axios from 'axios';


export default function Projects({projects}){

    return(
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map(project=>{
                    return <ProjectCard key={project._id} data={project} />
                })}
               
            </div>
        </div>
    )
}