import './App.css';
import About from './developer/about';
import Projects from './developer/projects';
import { useRef,useState,useEffect } from 'react';


function App() {
  const [page,setPage]=useState(0);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const updatePage=(index)=>{
setPage(index);
  }

  useEffect(() => {
      // ✅ You can read or write refs in effects
     const about= aboutRef.current;
     const projects= projectsRef.current;

     
     let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }
   
    
    let observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry) => {
          // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
          if (entry.isIntersecting) {
              // console.log( entry.target.getAttribute("id"))
              observer.unobserve(entry.target);
              // entry.target.classList.toggle('animate-bounce',entry.isIntersecting)
          }

         
         
        });
    }, options);

    observer.observe(about);
    observer.observe(projects);


    },[]);


  return (
  
    <div className="App flex flex-col w-screen">
       <div className="nav flex self-center justify-center gap-4 p-8 pt-4 pb-4  rounded-full shadow-xl bg-slate-50  mb-0 fixed border-pink-500 ">
              <button className="font-bold text-pink-500">About me</button> 
              <button className='text-slate-800'>Projects</button> 
              <button>Contact</button>  
       </div>
       <div id='about' ref={aboutRef}>
        <About/>
       </div>
       <div id='projects' ref={projectsRef}>
      <Projects/>
      </div>
    </div>
  );
}

export default App;
