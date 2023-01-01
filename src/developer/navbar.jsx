
import {
    Link
  } from 'react-router-dom';
  import {BsList} from "react-icons/bs"
import { useState } from 'react';
import { BiHide } from 'react-icons/bi';

const NavBar=({onNavChange,index})=>{
  let styles=["font-bold text-[#ffe4c4] ","font-normal","font-normal","font-normal"]

  const [open,setOpen]=useState(false)
 const handleClick=()=>{
   setOpen(!open)
  }
  
    return (
        <div className="nav w-full flex gap-20  lg:p-4 p-2  bg-slate-700  mb-0 fixed text-white z-50">
              <div className='flex justify-start w-1/2'>
                <h1 className='font-bold self-center'>Eddie's Portfolio</h1>
              </div>
              <div className='lg:flex justify-around gap-7 hidden'>
                
                <button className={`${styles[index]} ease-switch`} onClick={()=>onNavChange(0)}><Link to='/' >About</Link></button> 
                <button className={`${styles[Math.abs(1-index)]} ease-switch`} onClick={()=>onNavChange(1)}><Link to='skills'>Skills</Link></button> 
                <button className={`${styles[Math.abs(2-index)]} ease-switch`} onClick={()=>onNavChange(2)}><Link to='projects'>Projects</Link> </button> 
                <button className={`${styles[Math.abs(3-index)]} ease-switch`}  onClick={()=>onNavChange(3)}><Link to='contact'>Contact</Link></button> 
              </div> 
              {
                open?<div className='mobile-nav lg:hidden justify-around gap-7 flex flex-col absolute mt-16 p-7 w-[96%] rounded-md bg-slate-700 '>
                
                <button className={`${styles[index]} ease-switch`} onClick={()=>{onNavChange(0); setOpen()} }><Link to='/' >About</Link></button> 
                <button className={`${styles[Math.abs(1-index)]} ease-switch`} onClick={()=>{onNavChange(1); setOpen()} }><Link to='skills'>Skills</Link></button> 
                <button className={`${styles[Math.abs(2-index)]} ease-switch`} onClick={()=>{onNavChange(2); setOpen()} }><Link to='projects'>Projects</Link> </button> 
                <button className={`${styles[Math.abs(3-index)]} ease-switch`}  onClick={()=>{onNavChange(3); setOpen()} }><Link to='contact'>Contact</Link></button> 
              </div>:"" }

              <div className='lg:hidden flex justify-end w-1/2 pr-4 text-3xl' onClick={handleClick}>
               {!open? <BsList className='  self-center'/>:
                <BiHide className='  self-center'/>}

              </div>
       </div>

    );
}
export default NavBar;