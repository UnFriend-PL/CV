import "./timelinepoint.css";
export default function TimeLinePoint({ number, title, date, desc }) {
  return (
    <div className="TimeLinePoint CenterItems">
      <div className="TimeLinePointCounter">
        <h3>{number}</h3>
      </div>
      <div className="TimeLinePointTitle">
        <h2>{title}</h2>
      </div>
      <div className="TimeLinePointDate">{date}</div>
      <div className="TimeLinePointDescription">{desc}</div>
    </div>
  );
}
