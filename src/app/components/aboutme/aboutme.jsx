import "./aboutme.css";
import CardCarousele from "./cardcarousele";
import { interests, shortDesc } from "./interests";
export default function AboutMe() {
  return (
    <div className="AboutMeWrapper" id="AboutMe">
      <h1>Szymon Marcinkowski</h1>
      <h2 className="SectionTitle">AboutMe()</h2>
      <div className="AbouMeContent">
        <div className="Squares">
          <div className="SquareLeftoToRight"></div>
          <div className="SquareLeftoToBottom"></div>
        </div>

        <div className="AboutMeInterests">
          {shortDesc.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
        <div className="AboutMeSliderWrap">
          <CardCarousele cards={interests}></CardCarousele>
        </div>
        <div className="Squares">
          <div className="SquareRightToTop"></div>
          <div className="SquareRightToLeft"></div>
        </div>
      </div>
    </div>
  );
}
