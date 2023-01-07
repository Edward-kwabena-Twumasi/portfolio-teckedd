import ProjectCard from "./components/projectcard";


function ProjectList({projects}) {
    return (
      <div className='lg:grid lg:grid-cols-3 p-3 pl-[70px] justify-evenly  flex flex-col'>
        {projects.map(project=><ProjectCard image={project.image} title={project.title} description={project.description} repo={project.github}/>)}
        
     </div>
    )
  }
  export default ProjectList