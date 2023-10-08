

import { useEffect,useRef,forwardRef,  useState } from 'react';
import { Link, Outlet} from 'react-router-dom';

const Skills=forwardRef((props,ref)=>{

const [index,setIndex]=useState(0)
let styles=["border-2","",""]
const handleClick=(newIndex)=>{
  setIndex(newIndex)
}

const myRef = useRef(null);
    
useEffect(() => {
    // ✅ You can read or write refs in effects
   const skills= myRef.current;
   const allskills = skills.querySelectorAll('div >.tile ')
   const skillsLevels = skills.querySelectorAll('div >.level ')

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
  let observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry,idx) => {
        // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
       
            entry.target.classList.toggle('slideIn',entry.isIntersecting)
          
        if (entry.intersectionRatio>0.7) {
           observer.unobserve(entry.target);
        }
       
      });
  }, options);


  allskills.forEach((i,j)=>{
    if (i) {
      setTimeout(() => {
        observer.observe(i);
      }, j*40);  
        return () => observer.unobserve(i)
     
       
    }
  })
  skillsLevels.forEach((i,j)=>{
    if (i) {
      setTimeout(() => {
        observer1.observe(i);
      }, j*35);  
        return () => observer1.unobserve(i)
     
       
    }
  })
  
  

  },[]);

 

    return (
       <div className="skills  flex flex-col h-full " ref={ref}>
        
                <div className="flex gap-6 lg:mt-5 mt-20 justify-center">
                    <Link onClick={()=>handleClick(0)} to='frontend'><button className= {`text-white rounded-full p-2 px-6 border-white  ${styles[index]}` } onClick={()=>handleClick(0)}>Frontend </button></Link>
                    <Link onClick={()=>handleClick(1)} to='backend'> <button className={`text-white rounded-full p-2 px-6 border-white ${styles[1-index]}` } onClick={()=>handleClick(1)}>Backend</button> </Link>
                    <Link onClick={()=>handleClick(2)} to='ai'> <button className={`text-white rounded-full p-2 px-6 border-white ${styles[2-index]}` } onClick={()=>handleClick(1)}>AI/Data Science</button> </Link>

                </div>
                <div ref={myRef} className="overflow-scroll hide-scroll">
                  <Outlet/>
                </div>
               
                       
       </div>

    );
})
export default Skills;