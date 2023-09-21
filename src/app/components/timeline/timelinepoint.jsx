import "./timelinepoint.css";
export default function TimeLinePoint({
  number,
  title,
  date,
  desc,
  skills = [],
}) {
  return (
    <div className="TimeLinePoint CenterItems" key={number}>
      <div className="TimeLinePointCounter">
        <h3>{number}</h3>
      </div>
      <div className="TimeLinePointTitle">
        <h2>{title}</h2>
      </div>
      <div className="TimeLinePointDate">{date}</div>
      <div className="Pills">
        {skills.map((element, index) => (
          <div className="Pill" key={index}>
            {element}
          </div>
        ))}
      </div>
      <div className="TimeLinePointDescription">{desc}</div>
    </div>
  );
}
