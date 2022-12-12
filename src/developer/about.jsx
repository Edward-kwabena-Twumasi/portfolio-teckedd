import background from "../assets/cleareddimg.png";
import 'animate.css';
import { useRef,useState,useEffect } from 'react';
import '../App.css'



const About=(props)=>{

    const techsRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        // ✅ You can read or write refs in effects
       const Technologies= techsRef.current;
       const skils= skillsRef.current;

       const allTechnologies = Technologies.querySelectorAll('div > div')
       
       const allSkills = skils.querySelectorAll('div')
       let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
      let options1 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9
      }
      
      let observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
            // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
             entry.target.classList.toggle('scaleUp',entry.isIntersecting)
            if (entry.isIntersecting) {
                // console.log( entry.target.getAttribute("id"))
                observer.unobserve(entry.target);
                // entry.target.classList.toggle('animate-bounce',entry.isIntersecting)
            }

           
           
          });
      }, options);

      let observer1 = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
            // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
              entry.target.classList.toggle('animateSkills',entry.isIntersecting)
             
            if (entry.isIntersecting) {
                observer1.observe(entry.target);
            }
            // else
            // observer1.unobserve(entry.target);
            
           
          });
      }, options1);

      allTechnologies.forEach(i=>{
        if (i) {
            observer.observe(i);
            return () => observer.unobserve(i)
        }
      })
      allSkills.forEach(j=>{
        if (j) {
            observer1.observe(j);
            // return () => observer1.unobserve(j)
        }
      })
      

      },[]);

    return(
        
        <div className={"about h-full flex flex-col justify-center lg:p-20 p-4 items-start w-full"}>
            
            
            <div className="head lg:flex md:flex w-full justify-start m-3 ml-0  shadow-xl mx-5 lg:p-[40px] p-9px">
                 <div className="images lg:w-60 lg:h-60 h-40 w-40 m-5 p-2 self-center rounded-full  bg-white lg:self-start bg-no-repeat 
                bg-start bg-cover mr-7 hover:animate-bounce duration-500ms border-solid border-pink-600 "
                 style={{backgroundImage:"url("+background+")"}}>
                </div> 
               
                <div className="words flex flex-col ">
                    <div className="intro mb-7 flex flex-col">
                        <h1 className="font-extrabold lg:text-3xl text-lg self-start text-white mb-2 animate__animated animate__bounceInRight animate__faster">HELLO <span className="text-red-600">.</span></h1>
                        <h1 className="font-extrabold lg:text-3xl text-lg self-start text-white mb-2 duration-150 animate__animated animate__fadeInUp animate__fast">MY NAME IS <span className="text-yellow-600">.</span></h1>
                        <h1 className="my-name font-extrabold lg:text-4xl text-xl self-start   duration-200 animate__animated animate__bounce animate__bounceInRight animate__slow">EDWARD KWABENA TWUMASI </h1>
                    </div>

                    <div className="more-intro flex flex-col shadow-xl p-5 rounded-md">
                        <h1 className=" lg:text-xl font-normal font-mono text-sm text-white self-start text-start mb-1">I am a programming Enthusiast constantly seeking out innovative solutions to everyday problems. I simply love programming!</h1>

                    </div>
                </div>
                
            </div>
            <div className="verbal mt-6 mb-5 flex flex-col w-screen">
                <h1 className="title lg:font-bold lg:text-2xl mb-5 font-extrabold self-start text-[#2b5592]">Spoken Languages .<span className="text-sm font-thin font-mono">(Hover on languages to see a greeting)</span></h1>
                <div className="languages flex self-center justify-start gap-6 flex-wrap w-full">
                    <div className="english  relative left-0">  
                       <h2 className=" lg:p-2 lg:px-4 p-1 px-2   rounded-full shadow-xl  default-color text-white left-0 ">Hello,Welcome </h2> 
  
                        <h2 className=" lg:p-2 lg:px-4 p-1 px-2   rounded-full shadow-xl  default-color text-white left-0">English </h2> 
                    </div>
                    <div className="english  relative left-20">  
                       <h2 className=" lg:p-2 lg:px-4 p-1 px-2   rounded-full shadow-xl  default-color text-white left-20 ">Hola,Bienvenido </h2> 
  
                        <h2 className=" lg:p-2 lg:px-4 p-1 px-2   rounded-full shadow-xl  default-color text-white left-20">Spanish </h2> 
                    </div>
                    <div className="english  relative left-40">  
                       <h2 className=" lg:p-2 lg:px-4 p-1 px-2   rounded-full shadow-xl  default-color text-white left-40 ">Bonjour,Bienvenue </h2> 
  
                        <h2 className=" lg:p-2 lg:px-4 p-1 px-2   rounded-full shadow-xl  default-color text-white left-40">French </h2> 
                    </div>
                    
                </div>
            </div>
            <h1 className="title lg:font-bold lg:text-2xl mt-11 mb-5 font-extrabold self-start text-[#2b5592]">Skills</h1>
            <div className="skills mt-10  flex flex-col w-3/4 self-center " ref={skillsRef}>
                <div className="flex lg:self-center justify-start gap-4   w-3/4 ">
                <h2 className=" p-6 pt-3 pb-3  rounded-md shadow-xl bg-[#2b5592] text-white lg:font-bold font-mono text-sm ">Frontend Development </h2> 
                <h2 className=" p-6 pt-3 pb-3  rounded-md shadow-xl bg-[#2b5592] text-white lg:font-bold font-mono text-sm ">Backend Development </h2> 
                <h2 className=" p-6 pt-3 pb-3  rounded-md shadow-xl bg-[#2b5592] text-white lg:font-bold font-mono text-sm ">Team leadership</h2> 
                <h2 className=" p-6 pt-3 pb-3  rounded-md shadow-xl bg-[#2b5592] text-white lg:font-bold font-mono text-sm ">Programming Tutor</h2> 
                <h2 className=" p-6 pt-3 pb-3  rounded-md shadow-xl bg-[#2b5592] text-white lg:font-bold font-mono text-sm ">Software engineering</h2>
                <h2 className=" p-6 pt-3 pb-3  rounded-md shadow-xl bg-[#2b5592] text-white lg:font-bold font-mono text-sm ">Full-stack development</h2>
                <h2 className=" p-6 pt-3 pb-3  rounded-md shadow-xl bg-[#2b5592] text-white lg:font-bold font-mono text-sm ">Machine Learning</h2> 
                <h2 className=" p-6 pt-3 pb-3  rounded-md shadow-xl bg-[#2b5592] text-white lg:font-bold font-mono text-sm ">Data analysis</h2> 
                <h2 className=" p-6 pt-3 pb-3  rounded-md shadow-xl bg-[#2b5592] text-white lg:font-bold font-mono text-sm ">Project Collaboration</h2>
               
                </div>
            </div>
            <div className="technical mt-12 flex flex-col" ref={techsRef}>
                <h1 className="title lg:font-bold lg:text-2xl mb-3 mt-10 font-extrabold self-start text-[#2b5592]">
                    Technologies
                  </h1>
                <div className="flex flex-wrap">
                    <div className="web lg:w-1/3 md:w-1/2 w-screen p-2 scale-50 duration-500ms">
                        <h1 className="text-center self-center font-semibold m-2 text-xl">Web</h1>
                        <div className="flex self-center justify-center gap-2  flex-wrap shadow-lg py-10 rounded-xl bg-white border border-t-[#2b5592] ">
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Javascript </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Nodejs  </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">React Js  </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">HTML</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Django</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">CSS</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Postgresql</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">MongoDb</h2>
                
                        </div>
                    </div>
                    <div className="mobile lg:w-1/3 md:w-1/2 w-screen p-2 scale-50 duration-500ms">
                    <h1 className="text-center self-center font-semibold m-2 text-xl">Mobile</h1>
                        <div className="flex self-center justify-center gap-4  flex-wrap shadow-lg py-10 rounded-xl bg-white border border-t-[#2b5592] ">
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Java</h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Android  </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Dart </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Firebase </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Flutter </h2>

                        </div>
                    </div> 

                    <div className="machine-learning lg:w-1/3 md:w-1/2 w-screen p-2 scale-50 duration-500ms">
                    <h1 className="text-center self-center font-semibold m-2 text-xl">Machine Learning</h1>
                        <div className="flex self-center justify-center gap-4  flex-wrap shadow-lg py-10 rounded-xl bg-white border border-t-[#2b5592] ">
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Python</h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Numpy  </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Pandas </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Tensorflow</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Scikit Learn </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">NLTK </h2>

                        </div>
                    </div>
                    <div className="other-tools lg:w-1/3 md:w-1/2 sm:w-screen p-2 scale-50 duration-500ms">
                    <h1 className="text-center self-center font-semibold m-2 text-xl">Cloud And DevOps</h1>
                        <div className="flex self-center justify-center gap-4  flex-wrap shadow-lg py-10 rounded-xl bg-white border border-t-[#2b5592] ">
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Aws</h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Kubernates  </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Docker </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Azure</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Github </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-4xl default-color text-white  ">Git </h2>

                        </div>
                    </div>

                </div>
            </div>
            
           
        </div>
        
    );
}

export default About;