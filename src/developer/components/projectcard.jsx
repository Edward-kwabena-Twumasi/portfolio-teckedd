import { Link } from "react-router-dom";


const ProjectCard=({image,title,description,tags,repo})=>{
    const img=image;
    return (
        <div className="parent pt-5 mb-5">
            <div className="base p-4 pt-2 flex flex-col" >
                <h3 className="font-semibold text-lg m-1">{title}</h3>
                <section className="image" style={{backgroundImage:`url(${img})`,backgroundSize:"cover"}}></section>  
                <section className="description text-white text-md">
                {description}
                
                </section>
                <div>
                <section className="actions flex gap-7 justify-around  w-4/5 absolute">
                    <button>Demo</button>
                    <a target={"blank"} href={repo}><button>Source</button></a> 
                </section>
                    <section className="stack text-white text-sm font-bold text-center flex flex-row flex-wrap justify-start gap-2">
                    {tags}
                </section>
                </div>
                
            </div>
           

        </div>
    )
}

export default ProjectCard;