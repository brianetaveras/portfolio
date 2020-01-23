import React from "react";
import { SkillContainer, SkillImage, SkillBubble } from "../StyledComponents";

export default function SkillBlock({ skill }) {
  return (
    <div className="skill-block">
      <SkillContainer title={skill.Title}>
        <SkillBubble>
          <h3>{skill.Title}</h3>
          <div className="bubble-content">{skill.Description}</div>
        </SkillBubble>

        <SkillImage>
          <img src={`https://api.briantastic.com/${skill.Icon.path}`} alt="" />
        </SkillImage>
          <div className="title">{skill.Title}</div>
      </SkillContainer>
    </div>
  );
}
