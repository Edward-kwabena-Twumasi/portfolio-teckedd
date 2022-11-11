import { useRef,useState,useEffect } from 'react';
import 'animate.css';
import '../App.css'


const Projects=()=>{
    const imgurl='https://cdn.vectorstock.com/i/1000x1000/54/49/realistic-phone-screen-template-no-notch-front-vector-26985449.webp';

    const myRef = useRef(null);
    
    useEffect(() => {
        // ✅ You can read or write refs in effects
       const projects= myRef.current;
       const allProjects = projects.querySelectorAll('div > img')
       const allProjectsDesc = projects.querySelectorAll('div > h1')
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
        <div ref={myRef} className="bg-blue-50 w-screen">

         <div className='h-screen flex flex-col '>
            <h1 className='self-center text-3xl font-extrabold m-2 text-blue-500'>Machine Learning</h1>
           <img src={imgurl} alt='phone' className='h-2/3 m-2 max-w-sm self-center invisible translate-y-22' id='first'></img>
           <h1 className='text-center max-w-md m-4 self-center invisible'> This is a phone screen . The phone screen image was gotten from the internet.
            This is a content that represents a project i have carried out</h1>
         </div>
         <div className='h-screen flex flex-col'>
         <h1 className='self-center text-3xl font-extrabold m-2  text-blue-500'>Web development</h1>
           <img src={imgurl} alt='phone' className='h-2/3 m-2 max-w-sm self-center invisible translate-y-22' id='second'></img>
           <h1 className='text-center max-w-md m-4 self-center'> This is another screen . The 0ther screen image was gotten from the internet.
            This is a content that represents a project i have carried out</h1>
         </div>
         <div className='h-screen flex flex-col'>
         <h1 className='self-center text-3xl font-extrabold m-2  text-blue-500'>Mobile App development</h1>
           <img src={imgurl} alt='phone' className='h-2/3 m-2 max-w-sm self-center invisible translate-y-22' id='three'></img>
           <h1 className='text-center max-w-md m-4 self-center invisible'> This is a third screen . The 0ther screen image was gotten from the internet.
            This is a content that represents a project i have carried out</h1>
         </div>
        </div>
      );

}

export default Projects;