import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectFetch } from "../../utils/project";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const ProjectDetailContainer = () => {
  const { pid } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    projectFetch(pid)
      .then((projectData) => {
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
