
import {
    Link
  } from 'react-router-dom';
const NavBar=()=>{
    return (
        <div className="nav w-full flex gap-20  lg:p-4 p-2  bg-slate-700  mb-0 fixed text-white z-50">
              <div className='flex justify-start w-1/2'>
                <h1 className='font-bold '>TeckEdd</h1>
              </div>
              <div className='flex justify-around gap-7 float-right'>
                
                <button className="font-bold text-[#2b5592]"><Link to='/'>About</Link></button> 
                <button ><Link to='skills'>Skills</Link></button> 
                <button className='text-pink-800'><Link to='projects'>Projects</Link> </button> 
                <button ><Link to='contact'>Contact</Link></button> 
              </div> 
       </div>

    );
}
export default NavBar;