import { Button, CircularProgress, Paper } from "@mui/material";
import { getDocs, orderBy,query } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Navbar from "../../components/Frontend/Navbar";
import { projectsCollectionRef } from "../../utils/Firebase/firebaseConfig";
const important = (projects) =>
  projects?.map((project) => (
    <Paper key={project?.id} elevation={3} className="py-3 px-2 my-2 mx-1">
      <h2 className="text-3xl font-bold text-blue-700 mb-3 text-center">
        {project?.title}
      </h2>
      <p className="font-light">{project?.description}</p>
      <div className="flex flex-wrap items-center justify-around">
        <a target="_blank" className="my-2" href={project.github}>
          <Button className="" variant="outlined">
            Github
          </Button>
        </a>
        <a target="_blank" className="my-2" href={project.projectLink}>
          <Button className="" variant="outlined">
            Project
          </Button>
        </a>
        <Link href={`/projects/${project.id}`}>
          <Button className="" variant="outlined">
            Know More
          </Button>
        </Link>
      </div>
    </Paper>
  ));
const projectPage = () => {
  const [projects, setProjects] = React.useState([]);
  useEffect(() => {
    const projectsData = async () => {
      const getProjects = await getDocs(projectsCollectionRef);
      setProjects(getProjects?.docs?.map((doc) => doc.data()));
    };
    projectsData();
  }, []);
  console.log(projects);
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h1
          className={`text-transparent text-7xl md:text-9xl sticky top-22 leading-tight bg-clip-text font-valencia font-normal text-center `}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3826328/pexels-photo-3826328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          Projects
        </h1>
        {projects.length === 0 ? (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        ) : (
          important(projects)
        )}
      </div>
    </div>
  );
};

export default projectPage;
