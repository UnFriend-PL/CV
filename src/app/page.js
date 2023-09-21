import AboutMe from "./components/aboutme/aboutme";
import TimeLine from "./components/timeline/timeline";
import ProgrammingSkills from "./components/programmingskills/programmingSkills";

export default function Home() {
  return (
    <main>
      <AboutMe></AboutMe>
      <ProgrammingSkills> </ProgrammingSkills>
      <TimeLine></TimeLine>
    </main>
  );
}
