
import {
    Link
  } from 'react-router-dom';
const NavBar=({onNavChange,index})=>{
  let styles=["font-bold text-[#ffe4c4] ","font-normal","font-normal","font-normal"]
  
    return (
        <div className="nav w-full flex gap-20  lg:p-4 p-2  bg-slate-700  mb-0 fixed text-white z-50">
              <div className='flex justify-start w-1/2'>
                <h1 className='font-bold '>TeckEdd</h1>
              </div>
              <div className='flex justify-around gap-7 float-right'>
                
                <button className={`${styles[index]} ease-switch`} onClick={()=>onNavChange(0)}><Link to='/' >About</Link></button> 
                <button className={`${styles[Math.abs(1-index)]} ease-switch`} onClick={()=>onNavChange(1)}><Link to='skills'>Skills</Link></button> 
                <button className={`${styles[Math.abs(2-index)]} ease-switch`} onClick={()=>onNavChange(2)}><Link to='projects'>Projects</Link> </button> 
                <button className={`${styles[Math.abs(3-index)]} ease-switch`}  onClick={()=>onNavChange(3)}><Link to='contact'>Contact</Link></button> 
              </div> 
       </div>

    );
}
export default NavBar;