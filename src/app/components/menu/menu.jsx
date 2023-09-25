import "./menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="label">Menu</div>
      <div className="spacer"></div>
      <div className="item">
        <span>
          <a href="#AboutMe">About Me</a>
        </span>
      </div>
      <div className="item">
        <span>
          <a href="#ITSkills">IT Skills</a>
        </span>
      </div>
      <div className="item">
        <span>
          <a href="#Experience">Experience</a>
        </span>
      </div>
      <div className="item">
        <span>
          <a href="#Contact">Contact</a>
        </span>
      </div>
    </div>
  );
}
