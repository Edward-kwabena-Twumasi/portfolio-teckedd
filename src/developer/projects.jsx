import { useRef,useState,useEffect } from 'react';
import electionHuburl from "../assets/electionhub.PNG";
import treckTrafficurl from "../assets/trecktraffic.PNG";
import phishingurl from "../assets/phishing_detect.png";
import cnnurl from "../assets/cnn_classify.jpeg";
import rnnurl from "../assets/rnn_text.png";
import ecommerceurl from "../assets/ecommerce.png";
import travelmates from "../assets/travelmates.png";
import stocktakingurl from "../assets/stock-tacking.png";






import 'animate.css';
import '../App.css'


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
        <div ref={myRef} className="projects bg-white w-screen" >

         <div className=' flex flex-col justify-start pt-20 gap-8 p-3 '>
         <h1 className='self-center lg:text-3xl text-2xl font-bold m-2 project-section-title'>Machine Learning Projects</h1>
          <div className='project-list flex-wrap  lg:flex md:flex justify-evenly'>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif '>Phishing Detection</h1>
              <img src={phishingurl} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'> A machine learning model trained on a large dataset of labelled urls, using about 7 scikit learn estimators and NLP </h1>
            </div>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif '>Image Classification</h1>
              <img src={cnnurl} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'> An CNN for image classification using Tensorflow and a dataset of cats and dogs</h1>
            </div>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif '>Smart Literature review Assistant</h1>
              <img src={rnnurl} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'> A very smart  AI system that seeks to aid researchers in doing literature review.</h1>
            </div>
          </div>  
         </div>
         
         <div className=' flex flex-col justify-start pt-20 gap-7 p-3 '>
         <h1 className='self-center lg:text-3xl text-2xl font-bold m-2 project-section-title'>Web Development Projects</h1>

          <div className='project-list flex-wrap  lg:flex md:flex justify-evenly'>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif '>Ecommerce</h1>
              <img src={ecommerceurl} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'>An ecommerce web platform built for a client to sell organic foods with paystack payment integration</h1>
            </div>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif '>Stock Taking</h1>
              <img src={stocktakingurl} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'>A stock taking web platform that will aid a client in taking stock of her products</h1>
            </div>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif '>Election Information System</h1>
              <img src={electionHuburl} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'>A frontend Development of a project undertaken by a group I am part that aims to provide quality election information to Ghanains.</h1>
            </div>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif'>Skill Aquisition Platform</h1>
              <img src={electionHuburl} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'>A web platform focused on promoting holistic development by aiding university students aquire useful extra-curricular skills</h1>
            </div>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif '>Automated traffic data archiving system</h1>
              <img src={treckTrafficurl} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'>
An automated data extraction tool for accessing and archiving google traffic data for traffic analysis and research</h1>
            </div>
          </div>  
         </div>

         <div className=' flex flex-col justify-start pt-20 gap-8 p-3 '>
         <h1 className='self-center lg:text-3xl text-2xl font-bold m-2 project-section-title'>Mobile App Development Projects</h1>

          <div className='project-list flex-wrap  lg:flex md:flex justify-evenly'>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif '>Integrated Ticketing System</h1>
              <img src={travelmates} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'>An integrated ticketing platform for booking bus, train and flight tickets all on one single app.</h1>
            </div>
            <div className='project flex flex-col mb-6'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700 font-serif '>Smart Farming App</h1>
              <img src={treckTrafficurl} alt='phone' className='lg:h-[200px]  m-2 h-[90px] rounded-md shadow-lg self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible font-medium text-black-400'>(Contributor) A mobile app to help farmers indentify several species of weed using a deep learning model,how to deal with them and also inform them about soil conditions. </h1>
            </div>
          </div>  
         </div>
         
        </div> 
      
                  
      );

}

export default Projects;