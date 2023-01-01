import './App.css';
import About from './developer/about';
import Projects from './developer/projects';
import { useRef,useState } from 'react';
import Contact from './developer/contact';
import NavBar from './developer/navbar';
import Skills from './developer/skills';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Frontend from './developer/frontend';
import Backend from './developer/backend';
import ProjectList from './developer/projectlist';
import {FaWordpress} from "react-icons/fa"
import {GoPerson} from "react-icons/go"
import {GoTasklist} from "react-icons/go"
import {FaPhone} from "react-icons/fa"







function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  // window.alert(window.location.pathname)
  const pathNames=["/","/skills","/projects","/contact"]

  console.log(pathNames.indexOf(window.location.pathname))
  let currentIndex=pathNames.indexOf(window.location.pathname);
  const [index,setIndex]=useState(currentIndex)
  let styles=["border-4 shadow-2xl","","",""]
  const handleClick=(newIndex)=>{
    setIndex(newIndex)
  }

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
           <Router> 
          <div className='sidenav h-full w-1/12 bg-slate-700 fixed border-pink-500 z-50 lg:flex lg:flex-col justify-center gap-5  hidden'>
              <div className={`border-[#ffe4c4] w-[60px] h-[60px] rounded-full self-center ease-switch flex flex-col justify-center text-white text-3xl  ${styles[index]}`} onClick={()=>handleClick(0)}>
              <Link className='self-center' to="/"><GoPerson /></Link> 
              </div>
              <div className={`border-[#ffe4c4] w-[60px] h-[60px] rounded-full self-center ease-switch flex flex-col justify-center text-white text-3xl ${styles[Math.abs(1-index) ]}`} onClick={()=>handleClick(1)}>
              <Link className='self-center' to="/skills"><FaWordpress ></FaWordpress></Link>
              </div>
              <div className={`border-[#ffe4c4] w-[60px] h-[60px] rounded-full self-center ease-switch flex flex-col justify-center text-white text-3xl ${styles[Math.abs(2-index)]}`} onClick={()=>handleClick(2)}>
              <Link className='self-center' to="/projects"><GoTasklist ></GoTasklist></Link>
              </div>
              <div className={`border-[#ffe4c4] w-[60px] h-[60px] rounded-full self-center ease-switch flex flex-col justify-center text-white text-3xl ${styles[Math.abs(3-index)]}`} onClick={()=>handleClick(3)}>
              <Link className='self-center' to="/contact"><FaPhone ></FaPhone></Link>
              </div>
          </div>

          <div className='main rounded-lg lg:h-full overflow-scroll lg:w-11/12 content hide-scroll  '>
           
                 <NavBar onNavChange={handleClick} index={index}/> 
                 <div className='content-body  bg-slate-600 rounded-lg shadow-xl '>
                  <Routes>
                    <Route exact path="/"  element={<About ref={aboutRef} />}></Route>           
                    {/* <Route exact path="/about" element={<About/>}></Route> */}
                    <Route path="/skills" element={<Skills ref={skillsRef}/>}>
                     <Route exact path="frontend"  element={<Frontend  />}></Route> 
                     <Route exact path="backend"  element={<Backend  />}></Route> 
                     <Route index element={<Frontend />} />          
                   
                    </Route>
                    <Route exact path="/projects" element={<Projects/>}>
                    <Route exact path="completed"  element={<ProjectList  />}></Route> 
                     <Route exact path="ongoing"  element={<ProjectList  />}></Route> 
                     <Route index element={<ProjectList />} />          
                   
                    </Route>
                    <Route path="/contact" element={<Contact/>}></Route>
 
                </Routes>
                 </div>
          </div>
            </Router>
           
         </div>   
  
    
  );
}

export default App;
