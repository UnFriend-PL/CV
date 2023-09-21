"use client";
import TextTypingAnimation from "./TextTypingAnimation";
import "./monitor.css";

export default function ScreenWithCode({ codeArray }) {
  return (
    <article>
      <div className="stand">
        <div className="monitor">
          {codeArray.map((element, index) => (
            <TextTypingAnimation key={index} textToType={element} />
          ))}
        </div>
      </div>
    </article>
  );
}
