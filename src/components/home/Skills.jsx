import React from 'react';
import SkillBlock from "./SkillBlock";

export default function Skills({skills}){
    return (
        <div className="skills-list">
            <h1>Skills</h1>
            <div className="skills">

            {skills.map(skill=>{
                return <SkillBlock skill={skill} key={skill._id}/>

            })}
            
            

            </div>

        </div>
    )
}