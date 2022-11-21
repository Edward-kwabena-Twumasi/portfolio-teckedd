import { useRef,useState,useEffect } from 'react';
import imgurl from "../assets/web1.png";

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
        <div ref={myRef} className="bg-white w-screen">

         <div className='lg:h-screen flex flex-col justify-start pt-20 gap-6 p-3 '>
         <h1 className='self-center lg:text-3xl text-2xl font-bold m-2 project-section-title'>Machine Learning Projects</h1>
          <div className='project-list lg:flex md:flex justify-evenly'>
            <div className='project flex flex-col'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700'>Phishing Detection</h1>
              <img src={imgurl} alt='phone' className='h-2/3 m-2 rounded-md shadow-lg max-w-sm self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible'> A machine learning model trained on a large dataset of labelled urls, using about 7 scikit learn estimators and NLP </h1>
            </div>
            <div className='project flex flex-col'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700'>Image Classification</h1>
              <img src={imgurl} alt='phone' className='h-2/3 m-2 rounded-md shadow-lg max-w-sm self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible'> A basic image classification with Tensorflow using the MNIST dataset</h1>
            </div>
            <div className='project flex flex-col'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700'>Smart Literature review Assistant</h1>
              <img src={imgurl} alt='phone' className='h-2/3 m-2 rounded-md shadow-lg max-w-sm self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible'> A very smart  AI system that seeks to aid researchers in doing literature review.</h1>
            </div>
          </div>  
         </div>
         
         <div className='lg:h-screen flex flex-col justify-start pt-20 gap-6 p-3 '>
         <h1 className='self-center lg:text-3xl text-2xl font-bold m-2 project-section-title'>Web Development Projects</h1>

          <div className='project-list lg:flex md:flex justify-evenly'>
            <div className='project flex flex-col'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700'>Ecommerce</h1>
              <img src={imgurl} alt='phone' className='h-2/3 m-2 rounded-md shadow-lg max-w-sm self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible'>An ecommerce web platform built for a client to sell organic foods with paystack payment integration</h1>
            </div>
            <div className='project flex flex-col'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700'>Stock Taking</h1>
              <img src={imgurl} alt='phone' className='h-2/3 m-2 rounded-md shadow-lg max-w-sm self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible'>A stock taking web platform that will aid a client in taking stock of her products</h1>
            </div>
            <div className='project flex flex-col'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700'>Election Information System</h1>
              <img src={imgurl} alt='phone' className='h-2/3 m-2 rounded-md shadow-lg max-w-sm self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible'>A frontend Development of a project undertaken by a group I am part that aims to provide quality election information to Ghanains.</h1>
            </div>
          </div>  
         </div>

         <div className='lg:h-screen flex flex-col justify-start pt-20 gap-6 p-3 '>
         <h1 className='self-center lg:text-3xl text-2xl font-bold m-2 project-section-title'>Mobile App Development Projects</h1>

          <div className='project-list lg:flex md:flex justify-evenly'>
            <div className='project flex flex-col'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700'>Integrated Ticketing System</h1>
              <img src={imgurl} alt='phone' className='h-2/3 m-2 rounded-md shadow-lg max-w-sm self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible'>An integrated ticketing platform for booking bus, train and flight tickets all on one single app.</h1>
            </div>
            <div className='project flex flex-col'>
              <h1 className='self-center text-xl font-normal m-2 text-slate-700'>Smart Farming App</h1>
              <img src={imgurl} alt='phone' className='h-2/3 m-2 rounded-md shadow-lg max-w-sm self-center  invisible translate-y-22' id='first'></img>
              <h1 className='text-center max-w-md m-4 self-center invisible'>(Contributor) A mobile app to help farmers indentify several species of weed using a deep learning model,how to deal with them and also inform them about soil conditions. </h1>
            </div>
          </div>  
         </div>
         
        </div> 
      
         
         
      );

}

export default Projects;