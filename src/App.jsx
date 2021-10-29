import { useContext } from "react";
import Intro from "./components/intro/Intro";
import Experiences from "./components/experiences/experiences";
import ProjectList from "./components/projectlist/ProjectList";
import Achievements from "./components/achievements/Achievements";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar"
import { ThemeContext } from "./context";
import "./mode.scss";
import night from "./img/nightBg.jpeg"

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div className={darkMode ? "dark":"light"}>
    <Navbar/>
    <div className="sections">
      <Intro/>
      <ProjectList/>
      <Achievements/>
      <Contact/>
    </div>
  </div>;
};

export default App;