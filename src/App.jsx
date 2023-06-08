import MenuBar from "./components/MenuBar/MenuBar";
import Profile from "./components/Profile/Profile";
import Education from "./components/Education/Education";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetailContainer from "./components/ProjectDetailContainer/ProjectDetailContainer";
import Certifications from "./components/Certifications/Certifications";
import Technologies from "./components/Technologies/Technologies";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuBar />
        <Profile />
        <AboutMe />
        <Education />
        <Technologies />
        <Routes>
          <Route path="/" element={<ProjectsContainer />} />
          <Route path="/detail/:pid" element={<ProjectDetailContainer />} />
        </Routes>
        <Certifications />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
