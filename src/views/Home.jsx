import React, { useState, useEffect } from "react";
import { Container } from "../components/StyledComponents";
import Overview from "../components/home/Overview";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import Loader from '../components/Loader';
import getData from '../utils/getData';



export default function Home(props) {
  const [skills, setSkills] = useState();
  const [projects, setProjects] = useState();

  useEffect(() => {
    getData('skills').then(res=>{
      setSkills(res.data.entries)
    });
    getData('projects').then(res=>{
      setProjects(res.data.entries)
    });
  }, []);




  return (
    <div className="home-page">
    {skills && projects ? 
      <Container className="home-content">
        <div className="left">
          <Overview />
          <Skills skills={skills} />
        </div>
        <div className="right">
          <Projects {...props} projects={projects}  />
        </div>
      </Container>
      : <Loader/>
    }
    </div>

  );
}
