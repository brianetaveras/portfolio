import React from "react";

import styled from "styled-components";

export default function ProjectCard({ data }) {
  const ProjectPreview = styled.div`
        background-image: url('https://api.briantastic.com/${data.image.path}');
        background-size: 150%;
        background-position: center;
        height: 200px;
        width: 45%;
        border-radius: 10px;
        box-shadow: 2px 5px 10px 2px rgba(0,0,0,0.2);
        -webkit-transition:  2s; /* Safari prior 6.1 */
        transition: 2s;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover{
                background-size: 200%;
        }

    `;

   

  return <ProjectPreview />;
}
