import ProjectCard from "./components/projectcard";


function Completed({image}) {
    return (
      <div className='grid grid-cols-3 p-3 pl-[70px] justify-evenly '>
      <ProjectCard image={image}/>
      <ProjectCard image={image}/>
      <ProjectCard image={image}/>
      <ProjectCard image={image}/>
      <ProjectCard image={image}/>
     </div>
    )
  }
  export default Completed