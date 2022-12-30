import ProjectCard from "./components/projectcard";


function ProjectList({projects}) {
    return (
      <div className='grid grid-cols-3 p-3 pl-[70px] justify-evenly '>
        {projects.map(project=><ProjectCard image={project.image} title={project.title} description={project.description}/>)}
        
     </div>
    )
  }
  export default ProjectList