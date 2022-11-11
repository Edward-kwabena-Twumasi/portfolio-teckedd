import background from "../assets/edward.png";
import 'animate.css';
import { useRef,useState,useEffect } from 'react';


const About=(props)=>{

    const techsRef = useRef(null);

    useEffect(() => {
        // ✅ You can read or write refs in effects
       const Technologies= techsRef.current;
       const allTechnologies = Technologies.querySelectorAll('div > div')
       const allTechnologiesDesc = Technologies.querySelectorAll('div > h1')
       let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
      
      let observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
            // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
             entry.target.classList.toggle('scale-100',entry.isIntersecting)
            if (entry.isIntersecting) {
                // console.log( entry.target.getAttribute("id"))
                observer.unobserve(entry.target);
                // entry.target.classList.toggle('animate-bounce',entry.isIntersecting)
            }

           
           
          });
      }, options);

      allTechnologies.forEach(i=>{
        if (i) {
            observer.observe(i);
            return () => observer.unobserve(i)
        }
      })
    //   allTechnologiesDesc.forEach(j=>{
    //     if (j) {
    //         observer.observe(j);
    //         return () => observer.unobserve(j)
    //     }
    //   })
      

      },[]);

    return(
        
        <div className={"About h-full bg-pink-50 flex flex-col justify-center p-20 items-start w-full"}>
            
            
            <div className="body lg:flex md:flex w-full justify-start m-3 ml-0 ">
                <div className="images w-60 h-60 rounded-md  shadow-xl bg-white self-start bg-no-repeat bg-start bg-cover mr-7 hover:animate-bounce duration-500 border-solid border-pink-600 " style={{backgroundImage:"url("+background+")"}}>
                </div>
                <div className="words flex flex-col ">
                    <div className="intro mb-7 flex flex-col">
                        <h1 className="font-extrabold lg:text-4xl text-2xl self-start text-black mb-2 animate__animated animate__bounceInRight animate__faster">HELLO <span className="text-red-600">.</span></h1>
                        <h1 className="font-extrabold lg:text-4xl text-2xl self-start text-black mb-2 duration-150 animate__animated animate__fadeInUp animate__fast">MY NAME IS <span className="text-yellow-600">.</span></h1>
                        <h1 className="font-extrabold lg:text-4xl self-start text-black duration-200 animate__animated animate__bounce animate__bounceInRight animate__slow">EDWARD KWABENA TWUMASI <span className="text-green-600">.</span></h1>
                    </div>

                    <div className="more-intro flex flex-col">
                        <h1 className="font-normal lg:text-2xl text-xl text-black self-start">I ♥ basketball, rap, taking walks</h1>
                        <h1 className="lg:font-extrabold font-bold  text-pink-500 m-2 self-start ">AND</h1>
                        <h1 className=" lg:text-2xl text-xl text-black self-start">I write code to give life to Ideas</h1>
                    </div>
                </div>
                
            </div>
            <div className="verbal mt-6 flex flex-col">
                <h1 className="title lg:font-semibold lg:text-xl mb-3 font-normal self-start text-pink-500">Languages I speak</h1>
                <div className="flex self-center justify-center gap-4 ">
                <h2 className=" p-6 pt-4 pb-2  rounded-full shadow-xl ">English  <span className="font-normal font-serif hidden lg:inline text-green-900">Proficient</span> </h2> 
                <h2 className=" p-6 pt-4 pb-2  rounded-full shadow-xl ">Spanish  <span className="font-normal font-serif hidden lg:inline text-green-500">Intermediate</span> </h2> 
                <h2 className=" p-6 pt-4 pb-2  rounded-full shadow-xl ">French  <span className="font-normal font-serif hidden lg:inline  text-green-500">Intermediate</span> </h2> 
                <h2 className=" p-6 pt-4 pb-2  rounded-full shadow-xl ">Portuguese  <span className="font-normal font-serif hidden lg:inline text-yellow-600">Beginner</span> </h2> 
                </div>
            </div>
            <div className="technical mt-10 flex flex-col" ref={techsRef}>
                <h1 className="title lg:font-semibold lg:text-xl mb-3  font-normal self-start text-pink-500">
                    Technologies I use
                  </h1>
                <div className="flex flex-wrap">
                    <div className="web lg:w-1/3 md:w-1/2 w-screen p-2 scale-50 duration-500">
                        <h1 className="text-center self-center font-bold">Web</h1>
                        <div className="flex self-center justify-center gap-2  flex-wrap shadow-lg py-10 rounded-xl ">
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Javascript </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Nodejs  </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">React Js  </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">HTML</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Django</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">CSS</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Postgresql</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">MongoDb</h2>
                
                        </div>
                    </div>
                    <div className="mobile lg:w-1/3 md:w-1/2 w-screen p-2 scale-50 duration-500">
                    <h1 className="text-center self-center font-bold">Mobile</h1>
                        <div className="flex self-center justify-center gap-4  flex-wrap shadow-lg py-10 rounded-xl ">
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Java</h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Android  </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Dart </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Firebase </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Flutter </h2>

                        </div>
                    </div> 

                    <div className="machine-learning lg:w-1/3 md:w-1/2 w-screen p-2 scale-50 duration-500">
                    <h1 className="text-center self-center font-bold">Machine Learning</h1>
                        <div className="flex self-center justify-center gap-4  flex-wrap shadow-lg py-10 rounded-xl ">
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Python</h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Numpy  </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Pandas </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Tensorflow</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Scikit Learn </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">NLTK </h2>

                        </div>
                    </div>
                    <div className="other-tools lg:w-1/3 md:w-1/2 sm:w-screen p-2 scale-50 duration-500">
                    <h1 className="text-center self-center font-bold">Cloud And DecOps</h1>
                        <div className="flex self-center justify-center gap-4  flex-wrap shadow-lg py-10 rounded-xl ">
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Aws</h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Kubernates  </h2> 
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Docker </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Azure</h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Github </h2>
                            <h2 className="font-thin p-6 pt-2 pb-2  rounded-full shadow-xl ">Git </h2>

                        </div>
                    </div>

                </div>
            </div>
            
           
        </div>
        
    );
}

export default About;