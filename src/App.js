import './App.css';
import About from './developer/about';
import Projects from './developer/projects';
import { useRef,useState,useEffect } from 'react';
import Contact from './developer/contact';


function App() {
  const [page,setPage]=useState(0);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const updatePage=(index)=>{
  setPage(index);
  console.log(index)
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
             var attr= entry.target.getAttribute("id");
             console.log(attr);
             if (attr==="about") {
              setPage(0)
              console.log(page +" a")
              
             } else if (attr==="projects"){
              setPage(1)
              console.log(page +" p")

             }
             
              // entry.target.classList.toggle('animate-bounce',entry.isIntersecting)
          }

         
         
        });
    }, options);

    observer.observe(about);
    observer.observe(projects);


    },[]);


  return (
  
    <div className="App flex flex-col w-screen scroll-smooth ">
       <div className="nav flex self-center justify-center gap-4 lg:p-4 p-2  rounded-full shadow-xl bg-slate-50  mb-0 fixed border-pink-500 m-4 z-50">
              <button className="font-bold text-[#2b5592]"><a href='#about'>About me</a></button> 
              <button className='text-pink-800'><a href='#projects'>Projects</a> </button> 
              <button ><a href='#contact'>Contact</a></button>  
       </div>
       <div id='about' ref={aboutRef}>
        <About/>
       </div>
       <div id='projects' ref={projectsRef}>
      <Projects/>
      </div>
      <div id='contact'>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
