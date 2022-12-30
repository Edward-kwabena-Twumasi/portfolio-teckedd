

import { forwardRef,  useState } from 'react';
import { Link, Outlet} from 'react-router-dom';
const Skills=forwardRef((props,ref)=>{
  
const [index,setIndex]=useState(0)
let styles=["border-2",""]
const handleClick=(newIndex)=>{
  setIndex(newIndex)
}

    return (
       <div className="skills page flex flex-col h-full skills" ref={ref}>
        
                <div className="flex gap-6 mt-5 justify-center">
                    <button className= {`text-white rounded-full p-2 px-6 border-white  ${styles[index]}` } onClick={()=>handleClick(0)}><Link to='frontend'>Frontend</Link> </button> 
                    <button className={`text-white rounded-full p-2 px-6 border-white ${styles[1-index]}` } onClick={()=>handleClick(1)}><Link to='backend'>Backend</Link> </button> 

                </div>
                <div className="overflow-scroll">
                <Outlet/>
                </div>
               
                       
       </div>

    );
})
export default Skills;