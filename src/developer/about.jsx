import edward from "../assets/edward.png";
import 'animate.css';
import {  forwardRef } from 'react';
import '../App.css'
import { Link } from "react-router-dom";



const About=forwardRef((props,ref)=>{

    return(
              
        <div className="about h-full flex flex-col justify-center overflow-hidden items-start 
        " ref={ref}>          

            <div className=" lg:flex md:flex w-full justify-start gap-7 ml-7 ">
                
                <div className="photo lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] self-center rounded-full  bg-no-repeat border-4
                bg-start bg-cover mr-7  border-solid border-[#ffe4c4] p-6 flex flex-col justify-center"
                >
                    <div className=" lg:w-[240px] w-[170px] lg:h-[240px] h-[170px] self-center rounded-full  bg-no-repeat 
                    bg-start bg-cover  border-solid bg-[#ffe4c4] shadow-xl"
                    style={{backgroundImage:`url(${edward})`,backgroundSize:"cover",backgroundPosition:"center"}}
                    >                  
                    </div> 
                </div> 
               
                <div className="text flex flex-col p-2">
                   <h1 className="role text-white mt-5 font-bold">Full stack software engineer</h1>
                   <h1 className="text-white font-extrabold lg:text-3xl text-xl self-start mt-6 
                     duration-200 animate__animated animate__bounce animate__bounceInRight animate__slow">Edward Twumasi
                     </h1>
                    
                    <p className="summary text-white text-md mt-4 w-2/3">
                        I love programming because it is what gives life to technological ideas.
                         I am a passionate, highly motivated and progressive individual 
                         with great social skills. I can rap too 😊🎤

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