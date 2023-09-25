"use client";
import "./aboutme.css";
import CardCarousele from "./cardcarousele";
import { data } from "./interests";
import { useLangContext } from "@/app/services/context";

export default function AboutMe() {
  const { lang } = useLangContext();
  let shortDesc, interests;
  lang == "eng"
    ? (shortDesc = data.shortDesc.en)
    : (shortDesc = data.shortDesc.pl);
  lang == "eng"
    ? (interests = data.interests.en)
    : (interests = data.interests.pl);
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
