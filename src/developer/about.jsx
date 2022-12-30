import background from "../assets/cleareddimg.png";
import 'animate.css';
import { useRef,useEffect, forwardRef } from 'react';
import '../App.css'
import { Link } from "react-router-dom";



const About=forwardRef((props,ref)=>{

   
    // useEffect(() => {
    //     // ✅ You can read or write refs in effects
    //    const about= ref.current;     
  
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
  

    return(
        
        
        <div className="about h-full flex flex-col justify-center  p-4 items-start 
        " ref={ref}>
            
            

            <div className="page lg:flex md:flex w-full justify-start gap-7 ml-7 ">
                
                <div className="photo lg:w-[300px] lg:h-[300px] self-center rounded-full  bg-no-repeat border-4
                bg-start bg-cover mr-7  border-solid border-[#ffe4c4] p-6"
                >
                </div> 
               
                <div className="text flex flex-col p-2">
                   <h1 className="role text-white mt-5 font-bold">Full stack software engineer</h1>
                   <h1 className="text-white font-extrabold lg:text-3xl text-xl self-start mt-6 
                     duration-200 animate__animated animate__bounce animate__bounceInRight animate__slow">TeckEdd
                     </h1>
                    
                    <p className="summary text-white text-md mt-4 max-w-lg">
                        Edward is a computer science graduate, an AI enthusiat and a highly motivated and passion driven individual.
                        He loves to learn and improve and aspires to own a Tech Company in the near future.

                    </p>
                    <div className="flex gap-6 mt-5">
                    <button className='text-white rounded-full p-2 px-6 border-white border-2'><Link to='projects'>Projects</Link> </button> 
                    <button className='text-white rounded-full p-2 px-6 border-white border-2'><Link to='contact'>Contact</Link> </button> 

                    </div>
                
                </div>
                
            </div>
            
                
        </div>
        
    );
}
)
export default About;