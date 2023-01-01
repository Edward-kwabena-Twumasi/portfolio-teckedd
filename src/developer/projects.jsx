import { useRef,useState,useEffect } from 'react';
import 'animate.css';
import '../App.css'
import { Link } from 'react-router-dom';
import ProjectList from './projectlist';
import {projects} from "../data.js"




const Projects=()=>{
    
    const [index,setIndex]=useState(0)
    let styles=["border-2",""]
    let projectComplete=[true,false]  
    const myRef = useRef(null);
    const handleClick=(newIndex)=>{
        setIndex(newIndex)
      }
    
    useEffect(() => {
        // ✅ You can read or write refs in effects
       const projects= myRef.current;
       const allProjects = projects.querySelectorAll('div > div >div')
       let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
      }
      
      let observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry,idx) => {
            // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
           
                entry.target.classList.toggle('animateIn',entry.isIntersecting)
              
            if (entry.intersectionRatio>0.7) {
               observer.unobserve(entry.target);
            }
           
          });
      }, options);


      allProjects.forEach((i,j)=>{
        if (i) {
          setTimeout(() => {
            observer.observe(i);
          }, j*40);  
            return () => observer.unobserve(i)
         
           
        }
      })
      
      

      },[]);

      

      return (
        <div  className="projects page flex flex-col  w-full h-full" >

          <div className="flex gap-6 lg:mt-5 mt-20 justify-center m-2">
              <button className= {`text-white rounded-full p-2 px-6 border-white  ${styles[index]}` } onClick={()=>handleClick(0)}><Link to='completed'>Completed</Link> </button> 
              <button className={`text-white rounded-full p-2 px-6 border-white ${styles[1-index]}` } onClick={()=>handleClick(1)}><Link to='ongoing'>Ongoing</Link> </button> 

          </div>
          <div ref={myRef} className="overflow-scroll hide-scroll">
              <ProjectList projects={projects.filter(project=>project.completed===projectComplete[index])}/>
          </div>
       

        </div> 
      
                  
      );

}

export default Projects;