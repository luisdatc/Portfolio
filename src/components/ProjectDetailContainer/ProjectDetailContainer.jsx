import { useEffect, useState } from "react";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import { useParams } from "react-router-dom";
import { projectFetch } from "../../utils/project";

const ProjectDetailContainer = () => {
  const { pid } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    projectFetch(pid)
      .then((projectData) => {
        console.log(projectData); // Verificar los datos devueltos
        setProject(projectData);
      })
      .catch((err) => console.log(err));
  }, [pid]);

  console.log(pid);

  return (
    <>
      <ProjectDetail project={project} />
    </>
  );
};

export default ProjectDetailContainer;