"use client";
import React, { useState } from "react";
import ScreenWithCode from "./ScreenWithCode";
import "./programmingskills.css";
import {
  csCode,
  jsCode,
  angularCode,
  htmlCode,
  reactCode,
  javaCode,
  error,
  sql,
} from "./languages";
export default function ProgrammingSkills() {
  const [codeArray, setCodeArray] = useState(csCode);
  const handleITSkillHover = (newCodeArray) => {
    setCodeArray(newCodeArray);
  };
  return (
    <div className="ProgrammingSkillsWrap">
      <div className="ProgrammingSkillsSection">
        <ScreenWithCode
          key={codeArray.length}
          codeArray={codeArray}
        ></ScreenWithCode>
      </div>
      <div className="ProgrammingSkillsSection">
        <h2>IT SKILLS</h2>
        <div className="ITSkills">
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(csCode);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(error);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(jsCode);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(htmlCode);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(javaCode);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(reactCode);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(angularCode);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(sql);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(error);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" />
          </div>

          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(error);
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </div>
          <div className="ITSkill Text">
            <p>problem solving</p>
          </div>
        </div>
      </div>
    </div>
  );
}
