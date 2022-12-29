import './App.css';
import About from './developer/about';
import Projects from './developer/projects';
import { useRef,useState,useEffect } from 'react';
import Contact from './developer/contact';
import NavBar from './developer/navbar';
import Skills from './developer/skills';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Frontend from './developer/frontend';
import Backend from './developer/backend';


function App() {
  const [page,setPage]=useState(0);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);



  // useEffect(() => {
  //     // ✅ You can read or write refs in effects
  //    const about= aboutRef.current;     

  //   let animateContent=about.querySelectorAll('h1')
  //   let aboutOptions = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.0
  //   }
     
  //   //obsserve skills ref
  //   let aboutObserver = new IntersectionObserver((entries)=>{
  //     entries.forEach((entry) => {
  //         // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
  //           entry.target.classList.toggle('animateSkills',entry.isIntersecting)
           
  //         if (entry.isIntersecting) {
  //             aboutObserver.observe(entry.target);
  //         }
  //         // else
  //         // aboutObserver.unobserve(entry.target);
          
         
  //       });
  //   }, aboutOptions);

  //   animateContent.forEach(j=>{
  //     if (j) {
  //         aboutObserver.observe(j);
  //         // return () => aboutObserver.unobserve(j)
  //     }
  //   })

  //   },[]);


  return (
  
        
        <div className='flex w-screen h-screen'>

          <div className='h-full w-1/12 bg-slate-700 fixed border-pink-500 z-50 flex flex-col justify-center gap-5'>
            <div className='border-2 border-white w-[60px] h-[60px] rounded-full self-center'>

            </div>
            <div className='border-2 border-white w-[60px] h-[60px] rounded-full self-center'>

            </div>
            <div className='border-2 border-white w-[60px] h-[60px] rounded-full self-center'>

            </div>
            <div className='border-2 border-white w-[60px] h-[60px] rounded-full self-center'>

           </div>
          </div>

          <div className=' rounded-lg h-full overflow-scroll w-11/12 content'>
            <Router> 
                 <NavBar /> 
                 <div className='content-body bg-slate-600 rounded-lg shadow-xl'>
                  <Routes>
                    <Route exact path="/"  element={<About ref={aboutRef} />}></Route>           
                    {/* <Route exact path="/about" element={<About/>}></Route> */}
                    <Route path="/skills" element={<Skills ref={skillsRef}/>}>
                     <Route exact path="frontend"  element={<Frontend  />}></Route> 
                     <Route exact path="backend"  element={<Backend  />}></Route> 
                     <Route index element={<Frontend />} />          
                   
                    </Route>
                    <Route exact path="/projects" element={<Projects/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
 
                </Routes>
                 </div>
            </Router>
           
          </div>
         </div>   
  
    
  );
}

export default App;
