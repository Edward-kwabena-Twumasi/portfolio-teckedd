

const ProjectCard=({image})=>{
    const img=image;
    return (
        <div className="parent pt-5 mb-5">
            <div className="base p-4 pt-2 flex flex-col" >
                <h3 className="font-semibold text-lg m-1">Automated data archiver</h3>
                <div className="image" style={{background:`url(${img})`,backgroundSize:"cover"}}>

                </div>  
                <div className="description text-white text-lg">
                An automated traffic data archiving system
                </div>
                <div className="stack text-white font-bold text-center">
                    React,Tailwind,Css,
                    Nodejs,postgresql
                </div>
                <div className="actions flex gap-7 justify-around  w-4/5 absolute">
                    <button>Demo</button>
                    <button>Github</button>
                </div>
            </div>
           

        </div>
    )
}

export default ProjectCard;