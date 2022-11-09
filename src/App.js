import logo from './logo.svg';
import './App.css';
import About from './developer/about';

function App() {
  return (
  
    <div className="App flex flex-col">
       <div className="nav flex self-center justify-center gap-4 p-8 pt-4 pb-4  rounded-full shadow-xl bg-slate-200  mb-0 fixed">
              <button className="font-bold">About me</button> 
              <button>Projects</button> 
              <button>Contact</button>  
       </div>
      <About/>
    </div>
  );
}

export default App;
