import { Link } from "react-router-dom";


const ProjectCard=({image,title,description,repo})=>{
    const img=image;
    return (
        <div className="parent pt-5 mb-5">
            <div className="base p-4 pt-2 flex flex-col" >
                <h3 className="font-semibold text-lg m-1">{title}</h3>
                <section className="image" style={{backgroundImage:`url(${img})`,backgroundSize:"cover"}}>

                </section>  
                <section className="description text-white text-lg">
                {description}
                </section>
                <section className="stack text-white font-bold text-center">
                    React,Tailwind,Css,
                    Nodejs,postgresql
                </section>
                <section className="actions flex gap-7 justify-around  w-4/5 absolute">
                    <button>Demo</button>
                    <a target={"blank"} href={repo}><button>Github</button></a> 
                </section>
            </div>
           

        </div>
    )
}

export default ProjectCard;