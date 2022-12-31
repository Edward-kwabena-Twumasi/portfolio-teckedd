import { useRef,useState,useEffect } from 'react';

import 'animate.css';
import '../App.css'
import { Link } from 'react-router-dom';
import ProjectList from './projectlist';
import {projects} from "../data.js"




const Projects=()=>{

    const myRef = useRef(null);
    
    useEffect(() => {
        // ✅ You can read or write refs in effects
       const projects= myRef.current;
       const allProjects = projects.querySelectorAll('div > div ')
       let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
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
          }, j*30);  
            return () => observer.unobserve(i)
         
           
        }
      })
      
      

      },[]);

      const [index,setIndex]=useState(0)
      let styles=["border-2",""]
      const handleClick=(newIndex)=>{
        setIndex(newIndex)
      }

      return (
        <div  className="projects page flex flex-col  w-full h-full" >

          <div className="flex gap-6 mt-5 justify-center m-2">
              <button className= {`text-white rounded-full p-2 px-6 border-white  ${styles[index]}` } onClick={()=>handleClick(0)}><Link to='completed'>Completed</Link> </button> 
              <button className={`text-white rounded-full p-2 px-6 border-white ${styles[1-index]}` } onClick={()=>handleClick(1)}><Link to='ongoing'>Ongoing</Link> </button> 

          </div>
          <div ref={myRef} className="overflow-scroll hide-scroll">
              <ProjectList projects={projects}/>
          </div>
       

        </div> 
      
                  
      );

}

export default Projects;