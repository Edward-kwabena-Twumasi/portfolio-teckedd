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
import { Link } from 'react-router-dom';
import Completed from './projectlist';



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
      const [index,setIndex]=useState(0)
      let styles=["border-2",""]
      const handleClick=(newIndex)=>{
        setIndex(newIndex)
      }

      return (
        <div ref={myRef} className="projects page flex flex-col  w-full overflow-scroll" >

         <div className="flex gap-6 mt-5 justify-center m-2">
                    <button className= {`text-white rounded-full p-2 px-6 border-white  ${styles[index]}` } onClick={()=>handleClick(0)}><Link to='completed'>Completed</Link> </button> 
                    <button className={`text-white rounded-full p-2 px-6 border-white ${styles[1-index]}` } onClick={()=>handleClick(1)}><Link to='ongoing'>Ongoing</Link> </button> 

         </div>
        <Completed image={electionHuburl}/>

        </div> 
      
                  
      );

}

export default Projects;