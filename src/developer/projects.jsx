import { useRef,useState,useEffect } from 'react';
import electionHuburl from "../assets/electionhub.PNG";
import treckTrafficurl from "../assets/trecktraffic.PNG";
import phishingurl from "../assets/phishing_detect.png";
import cnnurl from "../assets/cnn_classify.jpeg";
import rnnurl from "../assets/rnn_text.png";
import ecommerceurl from "../assets/ecommerce.png";
import travelmates from "../assets/travelmates.png";
import stocktakingurl from "../assets/stock-tacking.png";
import smartfarmUrl from "../assets/smart-farming.png";
import notesUrl from "../assets/notes.png";








import 'animate.css';
import '../App.css'
import ProjectCard from './components/projectcard';


const Projects=()=>{

    const myRef = useRef(null);
    
    useEffect(() => {
        // ✅ You can read or write refs in effects
       const projects= myRef.current;
       const allProjects = projects.querySelectorAll('div > div > div > img')
       const allProjectsDesc = projects.querySelectorAll('div > div > div > h1')
       let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
      
      let observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
            // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
            entry.target.classList.toggle('animateIn',entry.isIntersecting)
            if (entry.isIntersecting) {
                // console.log( entry.target.getAttribute("id"))
                observer.unobserve(entry.target);
                // entry.target.classList.toggle('animate-bounce',entry.isIntersecting)
            }

           
           
          });
      }, options);

      allProjects.forEach(i=>{
        if (i) {
            observer.observe(i);
            return () => observer.unobserve(i)
        }
      })
      allProjectsDesc.forEach(j=>{
        if (j) {
            observer.observe(j);
            return () => observer.unobserve(j)
        }
      })
      

      },[]);

      return (
        <div ref={myRef} className="projects page gap-0 grid grid-cols-3 p-3 pl-[70px] justify-evenly overflow-auto w-full" >
        
         <ProjectCard image={treckTrafficurl}/>
         <ProjectCard image={treckTrafficurl}/>
         <ProjectCard image={treckTrafficurl}/>
         <ProjectCard image={treckTrafficurl}/>

        </div> 
      
                  
      );

}

export default Projects;