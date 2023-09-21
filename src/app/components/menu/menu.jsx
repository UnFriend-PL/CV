import "./menu.css";

export default function Menu() {
  return (
    <div class="menu">
      <div class="label">Menu</div>
      <div class="spacer"></div>
      <div class="item">
        <span>
          <a href="#AboutMe">About Me</a>
        </span>
      </div>
      <div class="item">
        <span>
          <a href="#ITSkills">IT Skills</a>
        </span>
      </div>
      <div class="item">
        <span>
          <a href="#Experience">Experience</a>
        </span>
      </div>
      <div class="item">
        <span>
          <a href="#">Contact</a>
        </span>
      </div>
    </div>
  );
}
