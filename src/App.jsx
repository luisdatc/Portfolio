import MenuBar from "./components/MenuBar/MenuBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile/Profile";
import Education from "./components/Education/Education";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";

function App() {
  return (
    <>
      <MenuBar />
      <Profile />
      <AboutMe />
      <Education />
      <ProjectDetail />
    </>
  );
}

export default App;
