import TimeLinePoint from "./timelinepoint";
import "./timeline.css";
import { experience } from "./experience";
export default function TimeLine() {
  console.log(experience);

  return (
    <div className="TimeLine">
      {experience.map((element, index) => (
        <TimeLinePoint
          number={experience.length - index}
          title={element.title}
          date={element.date}
          desc={element.desc}
          skills={element.skills}
        ></TimeLinePoint>
      ))}
    </div>
  );
}
