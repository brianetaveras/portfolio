import React, { useState, useEffect } from "react";
import { Container } from "../components/StyledComponents";
import Overview from "../components/home/Overview";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import axios from "axios";

export default function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.briantastic.com/api/collections/get/skills?token=45c1a26189ae5d54ae4b6c64bcbc3c"
      )
      .then(res => {
        setSkills(res.data.entries);
      });
  }, []);

  return (
    <div className="home-page">
      <Container className="home-content">
        <div className="left">
          <Overview />
          <Skills skills={skills} />
        </div>
        <div className="right">
          <Projects />
        </div>
      </Container>
    </div>
  );
}
