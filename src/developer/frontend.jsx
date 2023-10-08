import SkillCard from "./components/skillcard"
import {skills} from "../data.js"
import {skilllevels} from "../data.js"
import SkillLevel from "./components/skilllevel"
import { useEffect,useRef } from 'react';




const Frontend=()=>{
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
      }, j*50);  
        return () => observer.unobserve(i)
     
       
    }
  })
  skillsLevels.forEach((i,j)=>{
    if (i) {
      setTimeout(() => {
        observer1.observe(i);
      }, j*60);  
        return () => observer1.unobserve(i)
     
       
    }
  })
  
  

  },[]);

    return (
        <div ref={myRef} className="flex flex-col pl-14 h-full">
            <h1 className="title text-3xl text-white font-bold m-3 text-center">Front end skills</h1>
            <div className="lg:flex md:flex justify-around ">
                <div>
                {
                skills.map((skill,idx)=>{
                    return  <SkillCard icon={skill.icon} title={skill.title} body={skill.description} index={idx}> 
                    </SkillCard>
                })
                }
                </div>
                <div className="self-start">
                {
                skilllevels.map((skilllevel,idx)=>{
                    return  <SkillLevel  title={skilllevel.title} level={skilllevel.level} index={idx}> 
                    </SkillLevel>
                })
                }
                </div>   

            </div>
           


        </div>
    )
}

export default Frontend 