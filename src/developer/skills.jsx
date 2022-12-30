

import { forwardRef,  useState } from 'react';
import { Link, Outlet} from 'react-router-dom';
const Skills=forwardRef((props,ref)=>{

const [index,setIndex]=useState(0)
let styles=["border-2",""]
const handleClick=(newIndex)=>{
  setIndex(newIndex)
}

    return (
       <div className="skills page flex flex-col h-full " ref={ref}>
        
                <div className="flex gap-6 mt-5 justify-center">
                    <Link onClick={()=>handleClick(0)} to='frontend'><button className= {`text-white rounded-full p-2 px-6 border-white  ${styles[index]}` } onClick={()=>handleClick(0)}>Frontend </button></Link>
                    <Link onClick={()=>handleClick(1)} to='backend'> <button className={`text-white rounded-full p-2 px-6 border-white ${styles[1-index]}` } onClick={()=>handleClick(1)}>Backend</button> </Link>

                </div>
                <div className="overflow-scroll hide-scroll">
                <Outlet/>
                </div>
               
                       
       </div>

    );
})
export default Skills;