import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  background: white;
  color: #000;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SkillContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  transition: 1s;

  &:hover {
    background: white;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  }
  
  @media(max-width: 800px){
    background: white;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
    
  }
`;

export const SkillImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
`;

export const AddedSkill = styled.div`
  position: absolute;
  background: black;
  color: white;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 25px;
  right: -10%;
  top: -10%;
`;

export const SkillBubble = styled.div`
  display: none;
  position: absolute;
  left: 100%;
  color: white;
  width: 300px;
  height: 100%;
  border-style: solid;
  border-width: 23px 57px 59px 63px;
  -moz-border-image: url(img/bubble.svg) 45 57 59 63 fill repeat;
  -webkit-border-image: url(img/bubble.svg) 45 57 59 63 fill repeat;
  -o-border-image: url(img/bubble.svg) 45 57 59 63 fill repeat;
  border-image: url(img/bubble.svg) 45 57 59 63 fill repeat;
  transition: 1s;
  z-index: 9999;
  
 
`;

