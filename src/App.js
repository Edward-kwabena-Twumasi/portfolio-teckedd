import logo from './logo.svg';
import './App.css';
import About from './developer/about';
import Projects from './developer/projects';

function App() {
  return (
  
    <div className="App flex flex-col w-screen">
       <div className="nav flex self-center justify-center gap-4 p-8 pt-4 pb-4  rounded-full shadow-xl bg-slate-50  mb-0 fixed">
              <button className="font-bold text-pink-500">About me</button> 
              <button className='text-blue-500'>Projects</button> 
              <button>Contact</button>  
       </div>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
