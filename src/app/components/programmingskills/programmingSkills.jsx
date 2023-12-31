"use client";
import React, { useState } from "react";
import ScreenWithCode from "./screenwithcode";
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
  problemSolving,
  githubInfo,
} from "./itskills";
import Image from "next/image";
export default function ProgrammingSkills() {
  const [codeArray, setCodeArray] = useState(csCode);
  const handleITSkillHover = (newCodeArray) => {
    setCodeArray(newCodeArray);
  };
  return (
    <div className="ProgrammingSkillsWrap " id="ITSkills">
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
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
            />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(error);
            }}
          >
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(jsCode);
            }}
          >
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(htmlCode);
            }}
          >
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(javaCode);
            }}
          >
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(reactCode);
            }}
          >
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(angularCode);
            }}
          >
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
            />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(sql);
            }}
          >
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            />
          </div>
          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(error);
            }}
          >
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
            />
          </div>

          <div
            className="ITSkill"
            onMouseEnter={() => {
              handleITSkillHover(githubInfo);
            }}
          >
            <Image
              width={128}
              height={128}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </div>
          <div
            className="ITSkill Text"
            // onMouseEnter={() => {
            //   handleITSkillHover(problemSolving);
            // }}
          >
            <p>problem solving</p>
          </div>
          <div
            className="ITSkill Text"
            // onMouseEnter={() => {
            //   handleITSkillHover(problemSolving);
            // }}
          >
            <p>Can-do attitude</p>
          </div>
        </div>
      </div>
    </div>
  );
}
