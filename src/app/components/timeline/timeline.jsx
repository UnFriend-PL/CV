"use client";
import TimeLinePoint from "./timelinepoint";
import "./timeline.css";
import { data } from "./experience";
import { useLangContext } from "@/app/services/context";
export default function TimeLine() {
  const { lang } = useLangContext();
  let experience;
  lang == "eng" ? (experience = data.en) : (experience = data.pl);
  let counter = experience.length - 1;
  return (
    <>
      <h2 className="SectionTitle" id="Experience">
        Experience()
      </h2>
      <div className="TimeLine">
        {experience.map((element, index) => (
          <TimeLinePoint
            number={counter--}
            title={element.title}
            date={element.date}
            desc={element.desc}
            skills={element.skills}
            key={index}
          ></TimeLinePoint>
        ))}
      </div>
    </>
  );
}
