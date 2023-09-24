import AboutMe from "./components/aboutme/aboutme";
import TimeLine from "./components/timeline/timeline";
import ProgrammingSkills from "./components/programmingskills/programmingSkills";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main>
      <Menu></Menu>
      <AboutMe></AboutMe>
      <ProgrammingSkills> </ProgrammingSkills>
      <TimeLine></TimeLine>
      <Footer></Footer>
    </main>
  );
}
