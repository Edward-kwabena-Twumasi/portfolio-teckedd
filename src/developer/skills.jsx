

import { forwardRef, useEffect, useRef } from 'react';
import { Link, Route, Router, Routes , Outlet} from 'react-router-dom';
import Frontend from './front-end';
const Skills=forwardRef((props,ref)=>{


    return (
       <div className="flex flex-col h-full skills" ref={ref}>
        
                <div className="flex gap-6 mt-5 justify-center">
                    <button className='text-white rounded-full p-2 px-6 border-white border-2'><Link to='frontend'>Frontend</Link> </button> 
                    <button className='text-white rounded-full p-2 px-6 border-white border-1'><Link to='backend'>Backend</Link> </button> 

                </div>
               <Outlet/>
                       
       </div>

    );
})
export default Skills;