

const SkillCard=({icon,title,body,index})=>{
    return (
        <div className="tile w-[400px] h-auto flex flex-col text-white m-3 bg-slate-500 p-4 rounded-md" key={index}>
            <section className="flex gap-5 h-6 w-full">
                <div className="leading">
                {icon}
                </div>
                <div className="title font-bold">
                {title}
                </div>
            </section>
                <p className="ml-5 mt-3 h-auto text-sm w-11/12">
                 {body}
                </p>

        
        </div>
    )
}

export default SkillCard;